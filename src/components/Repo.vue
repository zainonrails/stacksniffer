<template>
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
</template>

<script>
  export default {
    name: 'Repo',
    props: ['repo'] 
  }
</script>

<style lang="scss" scoped>

</style>