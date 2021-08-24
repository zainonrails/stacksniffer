<template>
  <div>
    <div class="card mt-4 pointer shadow p-3 mb-5 bg-white rounded" :key="repo.id">
      <div class="card-body">
        <h5 class="card-title">{{ repo.full_name }} <i :class="['programming', `lang-${repo.language ? repo.language.toLowerCase(): ''}`]"></i> </h5>
        
        <p class="card-text"> {{repo.description}} </p>
        <div class="text-right">
          {{repo.stargazers_count}}
          <span class="oi oi-star"></span>
        </div>
        
        <a :href="repo.html_url" target="_blank" class="btn btn-primary">Homepage</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Repo',
    props: ['repo'],

  }
</script>

<style lang="css" scoped>
.pointer {
  cursor: pointer;
}
</style>