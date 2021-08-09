<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <form class="form">
          <label for="search"><strong> Explore open source libraries </strong></label>
          <input name="search" @keyup.enter="fetchRepos" class="form-control" v-model="searchTerm" type="text" />
          <button class="btn btn-primary mt-2" @click.prevent="fetchRepos"> Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import RepoService from '../services/RepoService'

  export default {
    name: 'ReposSearchForm',
    emits: ['fetchedRepos'],
    data() {
      return {
        searchTerm: ''
      }
    },
    computed: {
      topicString() {
        return `${this.searchTerm}+language:javascript+language:ruby+language:python`
      }
    },
    methods: {
      async fetchRepos() {
        let params = {
          sort: 'stars',
          order: 'desc',
          per_page: 20,
          q: this.topicString
        }
        let repos = await RepoService.getRepos(params)
        this.$emit('fetchedRepos', repos)
        // console.log(repos.data)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>