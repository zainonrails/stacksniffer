<template>
  <ReposSearchForm @fetchedRepos="populateRepos" />
  <ReposContainer v-if="repos.length > 0" :repos="this.repos" />
</template>

<script>
import ReposSearchForm from './components/ReposSearchForm.vue'
import ReposContainer from './components/ReposContainer.vue'

export default {
  name: 'App',
  components: {
    ReposSearchForm,
    ReposContainer
  },
  data() {
    return {
      repos: []
    }
  },
  methods: {
    populateRepos(event) {
      console.log(event.data)
      this.repos = event.data.items
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
