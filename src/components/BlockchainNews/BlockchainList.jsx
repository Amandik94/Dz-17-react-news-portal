import { useEffect, useState } from "react";
import Loader from "../shared/Loader"; // ✅ Импортируем компонент Loader
import NewsItem from "../news/NewsItem";
import { fetchBlockchainNews } from "../../services/api";

export default function BlockchainList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // ✅ Показываем сначала 3 статьи

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const news = await fetchBlockchainNews();
      setArticles(news);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section className="main-container">
      <h2 className="main-title">Blockchain News</h2>
      {loading ? (
        <Loader />
      ) : articles.length > 0 ? (
        <>
          {articles.slice(0, visibleCount).map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
          {visibleCount < articles.length && (
            <button
              className="show-more-btn"
              onClick={() => setVisibleCount(visibleCount + 3)}
            >
              Show More
            </button>
          )}
        </>
      ) : (
        <p>No articles available.</p>
      )}
    </section>
  );
}
