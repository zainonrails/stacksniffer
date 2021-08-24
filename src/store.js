
import { createStore } from "vuex" 
import RepoService from './services/RepoService'

export default createStore({
  state: {
    repos: [],
    repoLanguages: [],
    activeReadme: '',
    isSearching: false,
    isFetchingReadme: false,
    error: ''
  },
  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos
      state.repoLanguages = [...new Set(repos.map(r => r.language))]
    },
    SET_ACTIVE_README(state, readme) {
      state.activeReadme = readme
    },
    SET_SEARCHING(state, isSearching) {
      state.isSearching = isSearching
    },
    SET_FETCHING_README(state, isFetching) {
      state.isFetchingReadme = isFetching
    },
    SET_ERROR(state,error) {
      state.error = error
    }
  },
  actions: {
    fetchRepos({ commit }, params) {
      commit('SET_SEARCHING', true)
      RepoService.getRepos(params).then((res) => {
        commit('SET_REPOS', res.data.items);
        commit('SET_SEARCHING', false)
      })
    },
    fetchReadmeContents({ commit }, repoName) {
      commit('SET_ERROR', '')
      commit('SET_FETCHING_README', true)
      commit('SET_ACTIVE_README', '')
      RepoService.getReadme(repoName).then(data => {
        commit('SET_ACTIVE_README', data.data)
        commit('SET_FETCHING_README', false)
      }).catch(function (error) {
        commit('SET_ERROR', `${error.response.statusText}: ${error.response.status}`)
        commit('SET_FETCHING_README', false)
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
