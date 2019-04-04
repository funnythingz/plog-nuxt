<template lang="pug">
v-layout.justify-end.mr-2
  v-avatar(v-if="isLogin()" size="36px")
    v-btn(icon)
      img(:src="currentUser.photoURL")
  v-btn(v-else @click="auth" icon)
    v-icon.mr-1(color="light-blue")
      | mdi-twitter
    span
      | Login
</template>

<script>
import firebase from 'firebase'
import isEmpty from 'lodash/isEmpty'
import { mapState } from 'vuex'

export default {

  computed: mapState(['currentUser']),

  created () {
    firebase.auth().onAuthStateChanged((currentUser) => {
      this.$store.commit('setCurrentUser', currentUser)
    })
  },

  methods: {
    logout() {
      this.$router.push({path: '/logout'})
    },
    auth() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    isLogin() {
      return !isEmpty(this.currentUser)
    }
  }

}
</script>
