<template>
  <div class="mt-4 container-fluid">
    <div class="row text-left">
      <div class="col-6">
        <button @click="filterReposByLanguage(lang)" :key="lang" v-for="lang in langs" class="btn btn-info">{{lang}}</button>
        <button v-if="reposCount" @click="resetRepos" class="btn btn-default">Clear</button>
        <Repo :key="repo.id" v-for="repo in filteredRepos" :repo="repo" @click="fetchReadme(repo.full_name)" />
      </div>
      <div class="col-6">
        <Spinner v-if="fetchingReadme" />
        <Error v-if="error" :message="error" />
        <RepoReadme v-if="readme" :readmeContent="readme" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Repo from './Repo.vue'
  import RepoReadme from './RepoReadme.vue';
  import Spinner from "./Spinner";
  import Error from "./Error";

  export default {
    name: 'ReposContainer',
    components: {
      Repo,
      RepoReadme,
      Spinner,
      Error
    },
    data() {
      return {
        filteredRepos: []
      }
    },
    computed: {
      ...mapState({
        langs: 'repoLanguages', readme: 'activeReadme',
        repos: 'repos', fetchingReadme: 'isFetchingReadme',
        error: 'error'
      }),
      ...mapGetters(['reposCount'])
    },
    mounted() {
      this.filteredRepos = this.repos
    },
    methods: {
      filterReposByLanguage (language) {
        this.filteredRepos = this.$store.getters.filterRepos(language)
      },
      resetRepos() {
        this.filteredRepos = this.repos
      },
      fetchReadme(repoName) {
        this.$store.dispatch('fetchReadmeContents', repoName)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>