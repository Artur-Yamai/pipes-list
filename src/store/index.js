import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const URL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pipes: {},
    states: {},
    purpouses: {}
  },

  getters: {
    getPipes(state) {
      return state.pipes
    },

    getStates(state) {
      return state.states
    },

    getPurpouses(state) {
      return state.purpouses
    }
  },

  mutations: {
    getPipes(state, pipesList) {
      state.pipes = pipesList;
    },

    addPipe(state, newPipe) {
      state.pipes.unshift(newPipe)
    },

    updatedPipe(state, newData) {
      let index = state.pipes.findIndex(elem => elem.id === newData.id);
      
      state.pipes.splice(index,1,newData)
      
    },

    deletePipe(state, pipeID) {
      let elem = state.pipes.findIndex(elem => elem.id === pipeID);

      state.pipes.splice(elem,1)
    },


    getStates(state, allStates) {
      state.states = allStates;
    },


    getPurpouses(state, allPurpouses) {
      state.purpouses = allPurpouses;
    }
  },

  actions: {
    GET_PIPES({commit}) {
      axios.get(`${URL}/pipes`)
        .then(resp => {
          commit('getPipes', resp.data)
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
    },


    GET_STATES({commit}) {
      axios.get(`${URL}/states`)
        .then(resp => {
          commit('getStates', resp.data)
        }).catch(err => console.error(err))
    },


    GET_PURPOUSES({commit}) {
      axios.get(`${URL}/purpouses`)      
      .then(resp => {
        commit('getPurpouses', resp.data)   
      }).catch(err => console.error(err))      
    }

  }
})
