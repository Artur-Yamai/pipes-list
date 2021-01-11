<template>
  <div class="reference">

    <button
      class="reference__button btn btn__blue"
      v-show="isDisabled.home"
      @click.prevent="homeButton"
    >Главная</button>

    <button
      class="reference__button btn btn__blue"
      v-show="isDisabled.states"
      @click.prevent="stateButton"
    >Состояние</button>

    <button 
      class="reference__button btn btn__blue"
      v-show="isDisabled.purpouses"
      @click.prevent="purpousesButton"
    >Назначение</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: {

      home: false,
      states: true,
      purpouses: true
      }
    }
  },

  methods: {
    // скрывает нажатую кнопку
    toDisabled(item) {
      for(let elem in this.isDisabled) {
        this.isDisabled[elem] = elem != item
      }
    },

    homeButton() {
      this.$router.push({name: 'home'})   
      this.toDisabled('home')
      
    },

    stateButton() {
      this.$router.push({name: 'states'});
      this.toDisabled('states')
    },

    purpousesButton() {
      this.$router.push({name: 'purpouses'})
      this.toDisabled('purpouses')
    }
  }

}
</script>

<style lang="scss">

.reference {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 2%;
  top: 70px;

  &__button {
    margin: 8px 0;
  }
}
</style>