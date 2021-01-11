<template>
  <div class="header item">
    <v-popup 
      v-if="isShowPopup"
      @hidePopup="isShowPopup = false"
      @dataRetrieval="dataRetrieval"
    ></v-popup>

    <p class="header__elem item__elem">Наименование</p>
    <p class="header__elem item__elem">ID</p>
    <p class="header__elem item__elem">ID назначения трубопровода</p>
    <p class="header__elem item__elem">ID состояния трубопровода</p>
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
  border-bottom: 1px solid black;
  padding: 5px 0;
  transition: 0.2s;
  align-items: center;

  &__elem {
    width: calc(100% / 8 - 10px);
    margin: 0 5px;
    text-align: center;
  }
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(36, 168, 213);
  color: white;
  font-size: 1.1em;
  border-bottom: none;
}

  
</style>