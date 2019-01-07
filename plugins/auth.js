import firebase from '~/plugins/firebase'
import {isEmpty} from 'lodash/lodash'

export default ({app}, inject) => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      inject('currentUser', () => {
        if (isEmpty(user)) {
          return null
        }
        return {
          displayName: user.displayName,
          photoURL: user.photoURL,
        }
      })
      resolve(user || false)
    })
  })
}
