<template>
  <div class="item item-hover">
    <v-popup 
      v-if="isShowPopup"
      @hidePopup="isShowPopup = false"
      @dataRetrieval="modifiedPipeData"
      :oldPipeData="thePipe"
    ></v-popup>
    <p class="item__elem">{{pipe.name}}</p>
    <p class="item__elem">{{pipe.id}}</p>
    <p class="item__elem">{{pipe.purposeId}}</p>
    <p class="item__elem">{{pipe.stateId}}</p>
    <p class="item__elem">{{pipe.diameter}}</p>
    <p class="item__elem">{{pipe.thickness}}</p>
    <p class="item__elem">{{pipe.formationDate}}</p>
    <p class="item__elem">
      <button 
        class="item__button btn btn__red"
        @click="deletePipe"
      >&#10006;</button>
      <button 
        class="item__button btn btn__blue"
        @click="isShowPopup = true"
      >&#9998;</button>
    </p>
  </div>
</template>

<script>
import vPopup from './v-popup'

export default {
  components: {
    vPopup
  },

  props: ['pipe'],

  data() {
    return {
      thePipe: this.pipe,
      isShowPopup: false
    } 
  },

  methods: {
    deletePipe() {
      this.$store.dispatch('DELETE_PIPE', this.pipe.id)
    },

    hidePopup() {
      this.isShowPopup = false;
    },

    modifiedPipeData(updatedData) {
      // console.log(updatedData);
      this.isShowPopup = false;
      this.$store.dispatch('UPDATED_PIPE', updatedData);
    }
  }
  
}
</script>

<style lang="scss">
  .item {

    &-hover:hover {
      background-color: #ffe79f;
    }

    &__button {
      margin: 0 5px;
    }
    
  }
</style>