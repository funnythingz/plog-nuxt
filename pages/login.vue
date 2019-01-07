<template lang="pug">
v-container
  v-layout
    v-flex
      p(v-if="isLogin()")
        | {{currentUser.displayName}}
        span(@click="logout")
          | Logout
      v-btn(v-else @click="auth")
        v-icon.mr-1(color="light-blue")
          | mdi-twitter
        span
          | Login
</template>

<script>
import firebase from 'firebase'
import {isEmpty} from 'lodash/lodash'

export default {
  layout: 'before-auth',
  components: {
  },
  asyncData(context){
    return {
      currentUser: context.app.$currentUser()
    }
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    auth() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logout() {
      this.$router.push({path: '/logout'})
    },
    isLogin() {
      return !isEmpty(this.currentUser)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
