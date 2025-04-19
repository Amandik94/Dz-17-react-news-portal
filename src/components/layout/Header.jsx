import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import logo from "../../assets/images/icons8-news.svg";
import LoginModal from "../pages/LoginModal";
import RegisterModal from "../pages/RegisterModal";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Проверка статуса аутентификации при монтировании компонента
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  // Обработчик поиска
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  // Обработчик выхода из системы
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-upper">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <h1 className="header-title">News Portal</h1>
          </div>
          <div className="header-bar">
            <div className="header-search">
              <form className="form-search" onSubmit={handleSearch}>
                <input
                  type="text"
                  className="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
              </form>
            </div>
            <div className="header-login">
              {isAuthenticated ? (
                <>
                  <span className="welcome">Welcome, User</span>
                  <button className="logout" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <button className="login" onClick={() => setShowLogin(true)}>Login</button>
                  <button className="register" onClick={() => setShowRegister(true)}>Register</button>
                  {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
                  {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
                </>
              )}
            </div>
            <div className="header-theme" onClick={toggleTheme}>
            {theme === "light" ? (
              <FaMoon title="Темная тема" />
            ) : (
              <FaSun title="Светлая тема" />
            )}
            </div>
          </div>
        </div>
        <div className="header-navigation">
          <nav>
            <ul className="header-nav">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/technology" className="nav-link">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/blockchain" className="nav-link">
                  Blockchain
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
