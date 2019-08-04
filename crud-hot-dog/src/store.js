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
    list: []
  },
  mutations: {
    createItem(state, payload) {
      state.list.push(payload)
    },
    // deleteItem(state, payload) {
    //     console.log(payload)
    // }
    loadItem(state, payload) {
      state.list = payload
    },
    deleteItem(state, payload) {
      const index = state.list.indexOf(payload)
      state.list.splice(index,1)
    }
  },
  actions: {
    async createItem({commit}, payload) {
      try {
        const newHotDog = new HotDog(
          payload.base,
          payload.sausages,
          payload.additionalIngredients
        )
        const fbValue = await fb.database().ref('hotdog').push(newHotDog)
        commit('createItem', newHotDog)

      }
      catch (e) {
        throw new Error('Something goes wrong' +  e.message)
      }
      commit('createItem', payload)

    },
    async fetchItem({commit}) {
      const result = []

      try {
        const fbValue = await fb.database().ref('hotdog').once('value')
        const hotDogs = fbValue.val()
        Object.keys(hotDogs).forEach(key => {
          const item = hotDogs[key]
          result.push(
            new HotDog(item.base, item.sausages, item.additionalIngredients, key)
          )
        })
        commit('loadItem', result)
      }
      catch (e) {
        throw new Error('fetch error' + e.message )
      }
    },
    async deleteItem({commit}, payload) {
      try {
        await fb.database().ref('hotdog/' + payload.id).remove()
        commit('deleteItem', payload)
      }
      catch (e) {
        throw new Error('Something goes wrong' +  e.message)
      }
    }
  },
  getters: {
    getPost(state) {
      return state.list.reverse()
    }
  }
})
