import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"; // ✅ Импортируем 404 страницу

export default function ArticlePage() {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) return <NotFoundPage />; // ✅ Если статьи нет, показываем 404

  return (
    <div className="article-container">
      <h1 className="article-title">{article.title}</h1>
      <img className="article-image" src={article.urlToImage || "/default-image.jpg"} alt={article.title} />
      <p>{article.content || "No content available."}</p>
      <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  );
}
