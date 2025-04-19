import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../shared/Loader"; // Создадим универсальный компонент для загрузки
import NewsItem from "../news/NewsItem";
import { fetchSearchResults } from "../../services/api"; // Создадим универсальный компонент для статей

export default function SearchResults() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const news = await fetchSearchResults();
      setArticles(news);
      setLoading(false);
    };
    fetchSearch();
  }, [query]);

  return (
    <section className="main-container">
      <h2 className="main-title">Search Results for "{query}"</h2>
      {loading ? (
        <Loader />
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </section>
  );
}
