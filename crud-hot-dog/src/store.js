import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{"base":{"name":"Bun","price":20},"sausages":{"name":"Hinting","price":30},"additionalIngredients":[{"name":"Cheese","price":5,"added":true},{"name":"Fried potatoes","price":5,"added":false},{"name":"Carrots","price":5,"added":true},{"name":"Cabbage","price":5,"added":false},{"name":"Tomatoes","price":5,"added":false},{"name":"Pickles","price":5,"added":true}]},{"base":{"name":"Bun","price":20},"sausages":{"name":"Hinting","price":30},"additionalIngredients":[{"name":"Cheese","price":5,"added":true},{"name":"Fried potatoes","price":5,"added":false},{"name":"Carrots","price":5,"added":true},{"name":"Cabbage","price":5,"added":false},{"name":"Tomatoes","price":5,"added":false},{"name":"Pickles","price":5,"added":true}]},{"base":{"name":"Pita","price":30},"sausages":{"name":"Hinting","price":30},"additionalIngredients":[{"name":"Cheese","price":5,"added":true},{"name":"Fried potatoes","price":5,"added":false},{"name":"Carrots","price":5,"added":true},{"name":"Cabbage","price":5,"added":false},{"name":"Tomatoes","price":5,"added":false},{"name":"Pickles","price":5,"added":true}]}]
  },
  mutations: {
    createItem(state, payload) {
      state.list.push(payload)
    },
    deleteItem(state, payload) {
        console.log(payload)
    }
  },
  actions: {

  }
})
