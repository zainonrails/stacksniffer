
import { createStore } from "vuex" 
import RepoService from './services/RepoService'

export default createStore({
  state: {
    repos: [],
    filteredRepos: []
  },
  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos
    },
    FILTER_REPOS(state, language) {
      state.filteredRepos = state.repos.filter((repo) => repo.language === language )
    },
    CLEAR_FILTERS(state) {
      state.filteredRepos = []
    }
  },
  actions: {
    fetchRepos({ commit }, params) {
      RepoService.getRepos(params).then((res) => {
        commit('SET_REPOS', res.data.items);
      })
    },
    filterReposByLanguage({ commit }, language) {
      console.log('inside filter action')
      commit('FILTER_REPOS', language)
    },
    clearFilters({ commit }) {
      console.log('inside clear action')
      commit('CLEAR_FILTERS')
    }
  },
  getters: {
    filterRepos: (state) => (languageToFilter) => {
      return state.repos.filter((repo) => repo.language === languageToFilter );
    }
  }
})
