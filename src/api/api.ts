class Api {
    static token: string | null = null;
    baseUrl = 'http://127.0.0.1:9001/api/'

    async query (postfix: string, method: string, data = {}) {
      let headers = {}
      if (Api.token) {
        headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Api.token
        }
      } else {
        headers = {
          'Content-Type': 'application/json'
        }
      }

      const response = await fetch(this.baseUrl + postfix, {
        method: method,
        headers: headers,
        body: JSON.stringify(data)
      })

      const result = await response.json()

      return result || result.results
    }

    setToken (token: string) {
      Api.token = token
    }
}

export default new Api()
