<template lang="pug">
v-container.grid-list-xs
  v-layout.row.justify-center.wrap
    CreateComment
    Timeline
</template>

<script>
import CreateComment from '~/components/CreateComment'
import Timeline from '~/components/Timeline'

export default {

  components: {
    CreateComment,
    Timeline
  },

  head: {
    title: 'Plog - Timeline',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PlogのTimelineが流れているよ' }
    ]
  },

}
</script>

<style lang="sass" scoped>
</style>
