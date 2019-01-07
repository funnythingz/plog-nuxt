<template lang="pug">
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'before-auth',
  mounted() {
    console.log('mounted')
    const self = this
    firebase.auth().signOut().then(function() {
      console.log('logout')
      self.$router.push({path: '/login'})
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
