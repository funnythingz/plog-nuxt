<template lang="pug">
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'before-auth',
  mounted() {
    console.log('mounted')
    this.signOut()
  },
  methods: {
    async signOut() {
      try {
        const res = await firebase.auth().signOut()
        console.log('logout')
        this.$router.push({path: '/login'})
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
