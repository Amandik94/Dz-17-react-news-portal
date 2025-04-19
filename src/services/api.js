import axios from "axios";

export const fetchLatestNews = async () => {
  try {
    const response = await axios.get("/api/news");
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error.message);
    return [];
  }
};

export const fetchTechnologyNews = async () => {
  try {
    const response = await axios.get("/api/news", {
      params: { category: "technology" },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching tech news:", error.message);
    return [];
  }
};

export const fetchBlockchainNews = async () => {
  try {
    const response = await axios.get("/api/news", {
      params: { query: "blockchain" },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching blockchain news:", error.message);
    return [];
  }
};

export const fetchSearchResults = async (query) => {
  if (!query || query.trim() === "") {
    return [];
  }
  try {
    const response = await axios.get("/api/news", {
      params: { query },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching search:", error.message);
    return [];
  }
};
