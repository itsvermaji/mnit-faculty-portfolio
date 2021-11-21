const axios = require("axios");

const fun = async (author) => {
  const url = "https://serpapi.com/search.json?";

  try {
    const response = axios.get(url, {
      params: {
        engine: "google_scholar_author",
        author_id: author,
        api_key: process.env.AUTHOR_API_KEY,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fun;

// fun("O4y8ddYAAAAJ");
