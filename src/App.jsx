import { Routes, Route } from "react-router-dom"
import "./assets/css/styles.css"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import LatestList from "./components/LatestNews/LatestList"
import TechnologyList from "./components/TechnologyNews/TechnologyList"
import BlockchainList from "./components/BlockchainNews/BlockchainList"
import SearchResults from "./components/pages/SearchPage"
import ArticlePage from "./components/pages/ArticlePage"
import NotFoundPage from "./components/pages/NotFoundPage"

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={<LatestList />} />
        <Route path="/technology" element={<TechnologyList />} />
        <Route path="/blockchain" element={<BlockchainList />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/article/:title" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
