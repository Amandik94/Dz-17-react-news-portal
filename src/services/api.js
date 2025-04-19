import axios from "axios";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export const fetchLatestNews = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: { country: "us", apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error.message);
    return [];
  }
};

export const fetchTechnologyNews = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: { category: "technology", country: "us", apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching technology news:", error.message);
    return [];
  }
};

export const fetchBlockchainNews = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: { q: "blockchain", language: "en", apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching blockchain news:", error.message);
    return [];
  }
};

export const fetchSearchResults = async (query) => {
  if (!query || query.trim() === "") {
    console.error("Invalid search query provided.");
    return [];
  }

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: { q: query, language: "en", apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    return [];
  }
};
