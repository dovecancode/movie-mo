import axios from 'axios'

class MovieServices {
  #httpInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  })

  config = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2U2NzYwYTNkMWZlYTY1Y2Y2ZDViZjAyMTZjNzkyNyIsInN1YiI6IjYyZDNkMjg1Y2Y2MmNkMDA0ZjJjNGU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRU9lxQO0pdJ4pFW_oUE7N0yqEHPhfb0u9M0TeRjkjI',
    },
  }

  async getTrending() {
    const res = await this.#httpInstance.get(
      '/trending/all/day?language=en-US',
      this.config
    )
    return res.data
  }

  async getAllMovies() {
    const res = await this.#httpInstance.get(
      '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      this.config
    )
    return res.data
  }
}

export default new MovieServices()
