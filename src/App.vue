<template>
  <Navbar />
  <ReposSearchForm />
  <ReposContainer v-if="repos.length > 0 && this.filteredRepos == 0" :repos="repos" />
  <ReposContainer v-if="filteredRepos.length > 0" :repos="filteredRepos" />
</template>

<script>
import ReposSearchForm from './components/ReposSearchForm.vue'
import ReposContainer from './components/ReposContainer.vue'
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    ReposSearchForm,
    ReposContainer,
    Navbar
  },
  computed: mapState(['repos', 'filteredRepos'])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
