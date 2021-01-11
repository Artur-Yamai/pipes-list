<template>
  <div>
    states
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  beforeCreate() {
    if(!this.$store.getters.states) {
    this.$store.dispatch('GET_STATES');
    }
  }
  
}
</script>

<style lang="">
  
</style>