<template>
  <div>
    purp
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('GET_PURPOUSES');
  }
}
</script>

<style lang="scss">
  
</style>