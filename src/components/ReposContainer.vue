<template>
  <div>
    <button @click="sortRepos(lang)" :key="lang" v-for="lang in langs" class="btn btn-info">{{lang}}</button>
    <button @click="resetRepos" class="btn btn-default">Clear</button>
    <div class="card" v-for="repo in containerRepos" :key="repo.id">
      <div class="card-header">
    
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ repo.full_name }}</h5>
        <p class="card-text"> {{repo.description}} </p>
        <a :href="repo.html_url" class="btn btn-primary">Homepage</a>
      </div>
    </div>
    <!-- <Repo :key="repo.id" v-for="repo in repos" :repo="repo" /> -->
  </div>
</template>

<script>
  // import Repo from './Repo.vue'

  export default {
    name: 'ReposContainer',
    props: ['repos'],
    data () {
      return {
        containerRepos: this.repos,
        langs: ['Ruby', 'Python', 'JavaScript', 'PHP', 'Java', 'TypeScript', 'C#', 'Go', 'Clojure', 'Rust']
      }
    },
    methods: {
      sortRepos(lang) {
        console.log(lang)
        this.containerRepos = this.repos.filter(r => r.language === lang)
        console.log(this.containerRepos)
      },

      resetRepos () {
        this.containerRepos = this.repos
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>