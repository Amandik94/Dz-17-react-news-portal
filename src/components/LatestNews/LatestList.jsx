import React, { useState, useEffect } from "react";
import NewsItem from "../news/NewsItem"; // ✅ Подключаем NewsItem
import Loader from "../shared/Loader"; // ✅ Импортируем компонент Loader
import { fetchLatestNews } from "../../services/api";

export default function LatestList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // ✅ Сначала 3 статьи

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const news = await fetchLatestNews();
      setArticles(news);
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <section className="main-container">
      <h2 className="main-title">Latest News</h2>
      {loading ? (
        <Loader />
      ) : articles.length > 0 ? (
        <>
          {articles
            .filter((article) => article.urlToImage)
            .slice(0, visibleCount)
            .map((article, index) => (
              <NewsItem key={index} article={article} /> // ✅ Используем NewsItem
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
