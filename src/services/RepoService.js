import axios from 'axios';
axios.defaults.baseURL = 'https://api.github.com/'

export default {
  getRepos(searchParams = {}) {
    return axios.get('search/repositories', { params: searchParams})
  }
}