<template>
  <div class="container mt-5">
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

  export default {
    name: 'ReposSearchForm',
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
      fetchRepos() {
        let params = {
          sort: 'stars',
          order: 'desc',
          per_page: 20,
          q: this.topicString
        }

        this.$store.dispatch('fetchRepos', params)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>