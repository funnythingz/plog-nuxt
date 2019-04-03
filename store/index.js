import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const Store = () => { return new Vuex.Store({
    state: {
      currentUser: {},
      comments: []
    },
    mutations: {
      ...vuexfireMutations,
      setCurrentUser(state, user) {
        state.currentUser = user
      },
    },
    actions: {
      setCommentsRef: firestoreAction(({ bindFirestoreRef }, ref) => {
        console.log(ref)
        bindFirestoreRef('comments', ref.orderBy('timestamp', 'desc'))
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
