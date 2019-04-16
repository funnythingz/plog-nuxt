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
  }

}
</script>

<style lang="sass" scoped>
</style>
