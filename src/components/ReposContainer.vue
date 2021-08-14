<template>
  <div class="mt-4">
    <div class="row text-left">
      <div class="col-6 offset-3">
        <button @click="filterReposByLanguage(lang)" :key="lang" v-for="lang in langs" class="btn btn-info">{{lang}}</button>
        <button @click="resetRepos" class="btn btn-default">Clear</button>
        <Repo :key="repo.id" v-for="repo in repos" :repo="repo" />
      </div>
    </div>
  </div>
</template>

<script>
  import Repo from './Repo.vue'

  export default {
    name: 'ReposContainer',
    components: {
      Repo
    },
    props: ['repos'],
    data() {
      return {
        langs: ['Ruby', 'Python', 'JavaScript', 'PHP', 'Java', 'TypeScript', 'C#', 'Go', 'Clojure', 'Rust', 'C', 'C++']
      }
    },
    methods: {
      filterReposByLanguage (language) {
        console.log('dispatching filter action')
        this.$store.dispatch('filterReposByLanguage', language)
      },
      resetRepos() {
        console.log('dispatching clear action')
        this.$store.dispatch('clearFilters')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>