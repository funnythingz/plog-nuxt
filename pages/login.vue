<template lang="pug">
v-container
  v-layout
    v-flex
      v-btn(@click="auth")
        v-icon.mr-1(color="light-blue")
          | mdi-twitter
        span
          | Login
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'before-auth',
    components: {
    },
    methods: {
      auth() {
        const provider = new firebase.auth.TwitterAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      }
    }
}
</script>

<style lang="sass" scoped>
</style>
