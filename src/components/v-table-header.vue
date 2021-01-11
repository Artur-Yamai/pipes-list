<template>
  <div class="header item">
    <v-popup 
      v-if="isShowPopup"
      @hidePopup="isShowPopup = false"
      @dataRetrieval="dataRetrieval"
    ></v-popup>

    <p class="header__elem item__elem">Наименование</p>
    <p class="header__elem item__elem">ID</p>
    <p class="header__elem item__elem">диаметр трубы, мм</p>
    <p class="header__elem item__elem">толщина стенки трубы, мм</p>
    <p class="header__elem item__elem">дата установки трубы</p>
    <p class="header__elem item__elem">
      <button class="btn btn__green btn__circle"
        @click="isShowPopup = true"
      >Добавить</button>
    </p>
  </div>
</template>

<script>
import vPopup from './v-popup'

import helpers from '../helpers'

export default {
  name: 'v-table-headers',
  components: {
    vPopup
  },

  data() {
    return {
      isShowPopup: false,
    }
  },

  methods: {
    dataRetrieval(pipeData) {
      // console.log(pipeData);
      this.isShowPopup = false;
      pipeData.id = helpers.createID()
      this.$store.dispatch('ADD_PIPE', pipeData);
    }
  }
  
}
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding: 5px 0;
  transition: 0.2s;
  align-items: center;

  &__elem {
    width: calc(100% / 6 - 15px);
    margin: 0 5px;
    text-align: center;
  }
}  


.header {
  position: fixed;
  justify-content: center;
  top: 0;
  padding: 15px 0;
  width: 80%;
  max-width: 1024px;
  background-color: rgb(36, 168, 213);
  color: white;
  font-size: 1.2em;
  border-bottom: none;
}
</style>