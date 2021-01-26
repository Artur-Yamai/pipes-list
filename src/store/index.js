import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const URL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pipes: [],
    states: [],
    purpouses: []
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
    },

    getTheStateById: state => id => {
      let hit = state.states.find(elem => elem.id == id)
      return hit
    },

    getThePurpousById: state => id => {
      let hit = state.purpouses.find(elem => elem.id == id)
      return hit
    },

    getTheStateByValue: state => value => {
      let hit = state.states.find(elem => elem.value == value)
      return hit.id
    },

    getThePurpousByValue: state => value => {
      let hit = state.purpouses.find(elem => elem.value == value)
      return hit.id
    }
  },

  mutations: {
    getPipes(state, pipesList) {
      state.pipes = pipesList;
    },

    addPipe(state, newPipe) {
      state.pipes.push(newPipe)
    },

    updatedPipe(state, newData) {
      let index = state.pipes.findIndex(elem => elem.id === newData.id);

      for(let info in state.pipes[index]) {
        state.pipes[index][info] = newData[info];
      }      
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
      axios.post(`${URL}/pipes`, payLoad)
        // если данные успешно отправились, то меняем данные на странице
        .then(() => commit('addPipe', payLoad))
        .catch(err => console.error(err))
    },

    UPDATED_PIPE({commit}, payLoad) {
      commit('updatedPipe', payLoad);
    },

    DELETE_PIPE({commit}, payLoad) {
      axios.delete(`${URL}/pipes/${payLoad}/`)
        .then(() => commit('deletePipe', payLoad))
        .catch(err => console.error(err))
      // commit('deletePipe', payLoad);
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
