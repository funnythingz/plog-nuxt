<template lang="pug">
  v-toolbar(color="lime accent-4" dense)
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title
      | Plog
    v-spacer
    Auth
</template>

<script>
import Auth from '~/components/Auth'
import {mapState} from 'vuex'
import isEmpty from 'lodash/isEmpty'

export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  components: {
    Auth
  },
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    logout() {
      this.$router.push({name: 'logout', path: '/logout'})
    },
    isLogin() {
      return !isEmpty(this.currentUser)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
