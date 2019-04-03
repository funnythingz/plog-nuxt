<template lang="pug">
v-app(color="blue lighten-5")
  Header
  nuxt
  Footer
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  props: {
    source: String
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass" scoped>
</style>
