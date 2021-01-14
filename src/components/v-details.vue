<template>
  <div class="details">
    
    <div class="details__header">
      <h2 class="details__title">Виды</h2>
    </div>
    <ul class="details__list">
      <li
        v-for="elem in $store.getters[order.value]"
        :key="elem.id"
        class="details__elem"
      >{{elem.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$route.meta
    }
  }
}
</script>

<style lang="scss">
.details {
  width: 600px;
  margin: 5px auto;
  padding: 0 auto;

  &__header {
    padding: 5px 0;
    background-color: rgb(36, 168, 213);
    color: white;
  }

  &__title {
    text-align: center;
  }

  &__list {
    border: 1px solid gray;
    max-height: 80vh;
    overflow: scroll;
    overflow-x: hidden;
  }

  &__elem{
    padding: 2px 5px;

    &:not(:last-child) {
      border-bottom: 1px solid gray; 
    }

    &:hover {

      background-color: #ffe79f;
    }
  }
}
</style>