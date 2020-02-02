import axios from "axios";

/**
 * Connect to TokenDatabase.com API
 */
class Api {
  constructor() {
    this.req = axios.create({
      baseURL: "https://api.tokendatabase.com/v1/"
    });
    this.key = null;
  }

  /**
   * Retrieve API key from localStorage
   */
  getKey() {
    this.key = localStorage.getItem("apikey");
  }

  /**
   * Get news posts from API
   */
  async queryNews(query) {
    this.getKey();
    try {
      const req = await this.req.get(`news/posts`, {
        params: {
          query: `'${query}'`,
          key: this.key
        }
      });

      return { results: req.data.results, remaining: req.data.hits_remaining };
    } catch (e) {
      return { error: "Invalid key" };
    }
  }
}

module.exports = new Api();
