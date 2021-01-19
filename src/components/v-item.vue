<template>
  <div class="item item-hover">
    <v-popup
      v-if="isShowPopup"
      @hidePopup="isShowPopup = false"
      @dataRetrieval="modifiedPipeData"
      :oldPipeData="pipe"
    ></v-popup>

    <p class="item__elem">{{pipe.name}}</p>

    <p class="item__elem">
      <span
        v-if="$store.getters.getStates.length"
      >{{getTheState.value}}</span>
    </p>

    <p class="item__elem">
      <span
        v-if="$store.getters.getPurpouses.length"
      >{{getThePurpous.value}}</span>
    </p>

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
      isShowPopup: false
    } 
  },

  computed: {
    getTheState() {
      return this.$store.getters.getTheStateById(this.pipe.stateId)
    },

    getThePurpous() {
      return this.$store.getters.getThePurpousById(this.pipe.purposeId)    
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