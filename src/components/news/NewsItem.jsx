import { Link } from "react-router-dom";

export default function NewsItem({ article }) {
  return (
    <div className="news-card">
      <img className="image" src={article.urlToImage || "/default-image.jpg"} alt={article.title} />
      <h3 className="card-title">{article.title}</h3>
      <p className="card-dc">{article.description || "No description available."}</p>
      <div className="card-button">
        <Link to={`/article/${encodeURIComponent(article.title)}`} state={{ article }} className="card-link">
          Read more
        </Link>  
      </div>
    </div>
  );
}
