<template lang="pug">
v-layout.justify-end.mr-2
  v-btn(v-if="isLogin()" @click="enabledDialog()" flat)
    v-icon.mr-1
      | mdi-comment-plus
    span
      | comment
  v-avatar(v-if="isLogin()" size="36px")
    v-btn(icon)
      img(:src="currentUser.photoURL")
  v-btn(v-if="isLogout()" @click="auth" flat)
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
    },
    isLogout() {
      return isEmpty(this.currentUser)
    },

    enabledDialog() {
      this.$store.commit('setCreateCommentFlag', true)
    },

    disabledDialog() {
      this.$store.commit('setCreateCommentFlag', false)
    }
  }

}
</script>
