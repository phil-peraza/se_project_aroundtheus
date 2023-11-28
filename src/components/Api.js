// API Token: 60774818-2b72-4a3b-8d83-5b2abf9c8a5e

/*export class Api {
    constructor(config) {
      this.url = config.baseUrl;
      this.headers = config.headers;
    }
  
    getInitialCards() {
      return fetch(`${this.url}/cards`, {
        headers: {
          authorization: "60774818-2b72-4a3b-8d83-5b2abf9c8a5e",
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
    }
  }*/

  export default class Api {
    constructor(config) {
      this.url = config.baseUrl;
      this.headers = config.headers;
    }
    getInitialCards() {
      return fetch("https://around-api.en.tripleten-services.com/v1", {
        headers: {
          authorization: "60774818-2b72-4a3b-8d83-5b2abf9c8a5e"
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
    }
  }