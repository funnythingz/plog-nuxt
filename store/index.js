import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const strict = false

export const state = () => ({
  currentUser: {},
  comments: [],
  createCommentFlag: false
})

export const mutations = {
  ...vuexfireMutations,
  setCurrentUser(state, user) {
    state.currentUser = user
  },
  setCreateCommentFlag(state, flag) {
    state.createCommentFlag = flag
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
  },
  getCreateCommentFlag: (state) => {
    return state.createCommentFlag
  }
}
