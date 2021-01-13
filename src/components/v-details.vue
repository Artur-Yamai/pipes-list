<template>
  <div class="states">
    
    <div class="states__header">
      <h2 class="states__title">Виды</h2>
    </div>
    <ul class="states__list">
      <li
        v-for="elem in $store.getters[value.value]"
        :key="elem.id" 
        class="states__elem"
      >{{elem.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['test'],

  computed: {
    value() {
      return this.$route.meta
    }
  }
}
</script>

<style lang="scss">
.states {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 720px;
  margin: 0 auto;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(36, 168, 213);
    color: white;
    width: 50%;
  }

  &__title {
    text-align: center;
  }

  &__list {
    width: 50%;
    border: 1px solid gray;
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