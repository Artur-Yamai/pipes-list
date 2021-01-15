<template>
  <div class="home">
    <v-table-header></v-table-header>
    <div class="list" v-if="$store.getters.getPipes.length">      
      <v-item
      
        v-for="pipe in $store.getters.getPipes"
        :key="pipe.id"
        :pipe="pipe"
      ></v-item>
    </div>
    <div class="list plug" v-else>
      <h2>Грузим данные</h2>
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

  methods: {
    showPopup(data) {
      this.isShowPopup = true;
    },

    hidePopup() {
      this.isShowPopup = false;
    }
  },

}
</script>

<style lang="scss">

.home {
  width: 80%;
  min-width: 768px;
  margin: 0 auto;
}


.list {
  max-width: 100%;
  margin: 74px 0 0; 
  border-right: 1px solid gray;
  border-left: 1px solid gray;
}

.plug {
  text-align: center;
  border: none
}

</style>
