import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

const Store = () => {
  return new Vuex.Store({
    state: {
      currentUser: {},
      comments: []
    },
    mutations: {
      ...firebaseMutations,
      setCurrentUser(state, user) {
        state.currentUser = user
      },
    },
    actions: {
      setCommentsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('comments', ref)
      })
    },
    getters: {
      getCurrentUser: (state) => {
        return state.currentUser
      },
      getComments: (state) => {
        return state.comments
      }
    }
  })
}

export default Store
