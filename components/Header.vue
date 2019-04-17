<template lang="pug">
v-layout
  v-toolbar(dense fixed)
    v-toolbar-side-icon(@click.stop="drawer = !drawer" v-if="isLogin()")
    v-toolbar-title
      | plog
    v-spacer
    Auth
  v-navigation-drawer(v-model="drawer" absolute temporary v-if="isLogin()")
    v-list.pa-0
      v-list-tile(avatar)
        v-list-tile-avatar
          img(:src="currentUser.photoURL")
        v-list-tile-content
          v-list-tile-title
            | {{currentUser.displayName}}
    v-list.pt-0(dense)
      v-divider
      nuxt-link(to="/logout")
        v-list-tile
          v-list-tile-content
            v-list-tile-title
              | Logout
      v-divider
</template>

<script>
import Auth from '~/components/Auth'
import {mapState} from 'vuex'
import isEmpty from 'lodash/isEmpty'

export default {
  computed: mapState(['currentUser']),
  components: {
    Auth
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    logout() {
      this.$router.push({name: 'logout', path: '/logout'})
    },
    isLogin() {
      return !isEmpty(this.currentUser)
    },
    isLogout() {
      return isEmpty(this.currentUser)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
