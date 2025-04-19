import { useEffect, useState } from "react";
import Loader from "../shared/Loader"; // ✅ Импортируем компонент Loader
import NewsItem from "../news/NewsItem";
import { fetchTechnologyNews } from "../../services/api"; // ✅ Импортируем функцию для получения новостей

export default function TechnologyList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // ✅ Показываем 3 статьи сначала

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const news = await fetchTechnologyNews();
      setArticles(news);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section className="main-container">
      <h2 className="main-title">Technology News</h2>
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
