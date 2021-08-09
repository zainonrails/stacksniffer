<template>

<div class="card">
  <div class="card-header">
    
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ repo.full_name }}</h5>
    <p class="card-text"> {{repo.description}} </p>
    <a :href="repo.html_url" class="btn btn-primary">Homepage</a>
  </div>
</div>

  <!-- <div class="card my-3 mx-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="movie.medium_cover_image" class="card-img-top" :alt="movie.title">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> {{ movie.title }} </h5>
          <p class="card-text"> {{ movie.synopsis.substring(0, 200) }} </p>
          <a :href="movie.url" target="_blank" class="card-text"><small class="text-muted">Checkout Movie</small></a>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
  export default {
    name: 'Repo',
    props: ['repo'] 
  }
</script>

<style lang="scss" scoped>

</style>