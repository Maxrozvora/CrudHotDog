import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from 'firebase'

Vue.use(Vuex)

class HotDog {
  constructor(base,sausages,additionalIngredients, id = null) {
    this.base = base
    this.sausages = sausages
    this.additionalIngredients = additionalIngredients
    this.id = id
  }
}

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
    async createItem({commit}, payload) {
      // console.log(payload); // TODO console.log
      try {
        const newHotDog = new HotDog(
          payload.base,
          payload.sausages,
          payload.additionalIngredients
        )
        const fbValue = await fb.database().ref('hotdog').push(newHotDog)
        console.log(fbValue); // TODO console.log
      }
      catch (e) {
        throw new Error('Somethimg goes wrong', e.message)
      }
      commit('createItem', payload)

    }
  }
})
