<template>
  <div class="alert alert-danger" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ['message']
}
</script>

<style scoped>

</style>