<template>
  <div class="reference">

    <button
      class="reference__button btn btn__blue"
      :disabled="isDisabled.home"
      @click.prevent="homeButton"
    >Главная</button>

    <button
      class="reference__button btn btn__blue"
      :disabled="isDisabled.states"
      @click.prevent="stateButton"
    >Состояния</button>

    <button 
      class="reference__button btn btn__blue"
      :disabled="isDisabled.purpouses"
      @click.prevent="purpousesButton"
    >Назначения</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: {
      home: false,
      states: false,
      purpouses: false
      }
    }
  },

  methods: {
    // дизейблит нажатую кнопку
    toDisabled(item) {
      for(let elem in this.isDisabled) {
        this.isDisabled[elem] = elem === item
      }
    },

    homeButton() {
      this.$router.push({name: 'home'});
      this.toDisabled('home');      
    },

    stateButton() {
      this.$router.push({name: 'states', 
                         params: {test: 'test'}
                       })
      this.toDisabled('states');

      if(!this.$store.getters.getStates.length) {
        this.$store.dispatch('GET_STATES')
      }
    },

    purpousesButton() {
      this.$router.push({name: 'purpouses'});
      this.toDisabled('purpouses');

      if(!this.$store.getters.getPurpouses.length) {
        this.$store.dispatch('GET_PURPOUSES')
      }
    }
  },

  mounted() {
    for(let elem in this.isDisabled) {
      this.isDisabled[elem] = `/${elem}` === window.location.pathname;
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
    min-width: 85px;
    margin: 8px 0;
  }
}
</style>