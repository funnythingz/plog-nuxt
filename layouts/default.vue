<template lang="pug">
v-app(dark)
  v-toolbar(app fixed clipped-left)
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title
      | Plog
  v-navigation-drawer(v-model="drawer" clipped fixed app)
    v-list
      v-list-tile(@click="")
        v-list-tile-action
          v-icon
            | dashboard
        v-list-tile-content
          v-list-tile-title
            | Dashboard
      v-list-tile(@click="")
        v-list-tile-action
          v-icon
            | settings
        v-list-tile-content
          v-list-tile-title
            | Settings
  v-content
    nuxt
  v-footer.pa-3(app fixed)
    span
      | &copy; funnythingz
</template>

<script>
export default {

  data: () => ({
    drawer: null
  }),

  props: {
    source: String
  }

}
</script>

<style lang="sass">
</style>
