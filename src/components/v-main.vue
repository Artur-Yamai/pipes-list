<template>
  <div class="main">
    <v-table-header></v-table-header>

    <div class="list" v-if="$store.state.pipes">      
      <v-item 
        v-for="pipe in $store.state.pipes"
        :key="pipe.id"
        :pipe="pipe"
      ></v-item>
    </div>
  </div>
</template>

<script>
import vTableHeader from './v-table-header'
import vItem from './v-item'

export default {
  name: 'v-main',
  
  components: {
    vItem,
    vTableHeader,
  },

  data() {
    return {
    }
  },

  methods: {
    showPopup(data) {
      this.isShowPopup = true;
    },

    hidePopup() {
      this.isShowPopup = false;
    }
  },
  
  // сразу загружаем список всех труб из бд
  beforeCreate() {
    this.$store.dispatch('GET_DATA');
    this.isShowPopup = false;
  }

}
</script>

<style lang="scss">

.list {
  width: 100%;
  margin-top: 52px;
}

</style>
