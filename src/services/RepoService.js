import axios from 'axios';
axios.defaults.baseURL = 'https://api.github.com/'

export default {
  getRepos(searchParams = {}) {
    return axios.get('search/repositories', { params: searchParams})
  },
  getReadme(repo) {
    return axios.get(`repos/${repo}/contents/README.md`, { headers: { 'accept': 'application/vnd.github.VERSION.html' }})
  }
}