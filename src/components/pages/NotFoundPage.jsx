import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The article you are looking for does not exist.</p>
      <Link to="/" className="back-home">Go back to Home</Link>
    </div>
  );
}
