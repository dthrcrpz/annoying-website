// initial state
const state = () => ({
  modal: false
})

const getters = {
  modal (state) {
    return state.modal
  }
}

const actions = {}

const mutations = {
  toggleModal (state, value = null) {
    if (value == null) {
      state.modal = !state.modal
    } else {
      state.modal = value
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}