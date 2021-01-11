<template>
  <div class="home">
    <v-table-header></v-table-header>

    <div class="list" v-if="$store.getters.getPipes">      
      <v-item 
        v-for="pipe in $store.getters.getPipes"
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
  name: 'v-home',
  
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
    if(!this.$store.getters.getPipes.length) {
    this.$store.dispatch('GET_DATA');
    this.isShowPopup = false;
    }
  }

}
</script>

<style lang="scss">

.home {
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
}


.list {
  max-width: 100%;
  margin: 74px 0 0; 
  border-right: 1px solid gray;
  border-left: 1px solid gray;
}

</style>
