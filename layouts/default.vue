<template lang="pug">
v-app(dark)
  v-toolbar(app fixed)
    v-toolbar-title
      | Plog
  v-content
    nuxt
  v-footer.pa-3(app fixed)
    span
      | &copy; funnythingz
</template>

<script>
export default {

  props: {
    source: String
  }

}
</script>

<style lang="sass">
</style>
