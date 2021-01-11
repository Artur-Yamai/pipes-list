import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const URL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pipes: null
  },

  getters: {
  },

  mutations: {
    getData(state, pipesList) {
      state.pipes = pipesList;
    },

    addPipe(state, newPipe) {
      let index = state.pipes.findIndex(elem => elem.id === newPipe.id)

      state.pipes.unshift(newPipe)
    },

    updatedPipe(state, newData) {
      let index = state.pipes.findIndex(elem => elem.id === newData.id);
      
      state.pipes.splice(index,1,newData)
      
    },

    deletePipe(state, pipeID) {
      let elem = state.pipes.findIndex(elem => elem.id === pipeID);

      state.pipes.splice(elem,1)
    }
  },

  actions: {
    GET_DATA({commit}) {
      axios.get(`${URL}/pipes`)
        .then(resp => {
          commit('getData', resp.data)
        }).catch(err => console.error(err))
    },

    ADD_PIPE({commit}, payLoad) {
      commit('addPipe', payLoad);
    },

    UPDATED_PIPE({commit}, payLoad) {
      commit('updatedPipe', payLoad);
    },

    DELETE_PIPE({commit}, payLoad) {
      commit('deletePipe', payLoad);
    }
  }
})
