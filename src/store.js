
import { createStore } from "vuex" 
import RepoService from './services/RepoService'

export default createStore({
  state: {
    repos: [],
    repoLanguages: [],
    activeReadme: ''
  },
  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos
      state.repoLanguages = [...new Set(repos.map(r => r.language))]
    },
    SET_ACTIVE_README(state, readme) {
      state.activeReadme = readme
    }
  },
  actions: {
    fetchRepos({ commit }, params) {
      RepoService.getRepos(params).then((res) => {
        commit('SET_REPOS', res.data.items);
      })
    },
    fetchReadmeContents({ commit }, repoName) {
      RepoService.getReadme(repoName).then(data => {
        console.log(data.data)
        commit('SET_ACTIVE_README', data.data)
      })
    }
  },
  getters: {
    filterRepos: (state) => (languageToFilter) => {
      return state.repos.filter((repo) => repo.language === languageToFilter );
    },
    reposCount: (state) => {
      return state.repos.length > 0
    }
  }
})
