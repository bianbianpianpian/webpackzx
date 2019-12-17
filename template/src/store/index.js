import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  state: {
    count: 0
  },
  mutations: { // 更改数据的方法
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    }
  },
  actions: {
    addAction ({ state, commit }, params) { // context 与 store 实例具有相同方法和属性（但不是store 实例）
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})

export default store
