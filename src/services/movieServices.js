import axios from 'axios'

class MovieServices {
  #httpInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  })

  #api_key = '13e6760a3d1fea65cf6d5bf0216c7927'

  // when you pass endpoints it should start with a slash
  async fetchData(endpoints) {
    const res = await this.#httpInstance.get(
      `${endpoints}?api_key=${this.#api_key}&language=en-US`
    )
    return res.data
  }

  async fetchSearchData(cat, q) {
    const res = await this.#httpInstance.get(
      `/search/${cat}?query=${q}&api_key=${this.#api_key}&language=en-US`
    )
    return res.data
  }

  async getMovieDetails(id) {
    const res = await this.#httpInstance.get(
      `/movie/${id}?&api_key=${this.#api_key}&language=en-US`
    )
    return res.data
  }

  async getTvShowDetails(id) {
    const res = await this.#httpInstance.get(
      `/tv/${id}?&api_key=${this.#api_key}&language=en-US`
    )
    return res.data
  }
}

export default new MovieServices()
