<template>
  <Navbar />
  <ReposSearchForm />
  <ReposContainer v-if="reposCount" />
</template>

<script>
  import ReposSearchForm from './components/ReposSearchForm.vue'
  import ReposContainer from './components/ReposContainer.vue'
  import Navbar from './components/Navbar.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    components: {
      ReposSearchForm,
      ReposContainer,
      Navbar
    },
    computed: mapGetters(['reposCount'])
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
