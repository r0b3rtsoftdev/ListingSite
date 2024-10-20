import { createStore } from 'vuex'
import ApiService from '@/services/ApiService'

interface Contact {
  email: string
  parsedPhoneNumbers: string[]
}

interface Ad {
  adId: number
  address: string
  price: number
  image: string
  currency: string
  uploadDate: string
  description: string
  status: string
  contact: Contact
}

interface State {
  items: Ad[]
}

export default createStore<State>({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    setItems(state, items) {
      state.items = items
    },
  },
  actions: {
    async getItems({ state, dispatch }) {
      let items = state.items
      if (state.items.length === 0) {
        items = await dispatch('fetchListing')
      }
      return items
    },
    async fetchListing({ state, commit }) {
      return await ApiService.getListing().then((response) => {
        commit('setItems', response.ads)
        return state.items
      })
    },
  },
  modules: {},
})
