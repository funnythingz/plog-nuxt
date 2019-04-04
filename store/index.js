import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const strict = false

export const state = () => ({
  currentUser: {},
  comments: []
})

export const mutations = {
  ...vuexfireMutations,
  setCurrentUser(state, user) {
    state.currentUser = user
  }
}

export const actions = {
  setCommentsRef: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('comments', ref.orderBy('timestamp', 'desc'))
  })
}

export const getters = {
  getComments: (state) => {
    return state.comments
  },
  getCurrentUser: (state) => {
    return state.currentUser
  }
}
