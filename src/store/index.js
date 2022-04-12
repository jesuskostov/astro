import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signs: [
      'aquarius',
      'aries',
      'cancer',
      'capricorn',
      'gemini',
      'leo',
      'libra',
      'pisces',
      'sagittarius',
      'scorpio',
      'taurus',
      'virgo'
    ],
    sign: 'aquarius',
    info: null
  },
  mutations: {
    SET_SIGN: (state, sign) => {
      state.sign = sign
    },
    PREDICT: (state, predict) => {
      state.info = predict
    }
  },
  actions: {
    setSign: ({commit}, sign) => {
      commit('SET_SIGN', sign)
    },
    prediction: async ({commit}, sign) => {
      let yestarday = await axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=yesterday`)
      let today = await axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=today`)
      let tomorrow = await axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=tomorrow`)
      let predict = []
      predict.push({
        yestarday: yestarday.data,
        today: today.data,
        tomorrow: tomorrow.data,
      })
      commit('PREDICT', predict)
    }
  },
  modules: {
  }
})
