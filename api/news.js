// api/news.js

import axios from "axios";

export default async function handler(req, res) {
  const { category = "general", query = "" } = req.query;

  const apiKey = process.env.VITE_NEWS_API_KEY;

  try {
    let url = "https://newsapi.org/v2/top-headlines";
    let params = {
      apiKey,
      country: "us",
    };

    if (category === "technology") {
      params.category = "technology";
    } else if (query) {
      url = "https://newsapi.org/v2/everything";
      params = {
        apiKey,
        q: query,
        language: "en",
      };
    }

    const response = await axios.get(url, { params });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    res.status(500).json({ message: "Failed to fetch news", error: error.message });
  }
}
