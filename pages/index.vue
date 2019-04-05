<template lang="pug">
v-container(grid-list-lg)
  v-layout(row justify-center wrap)
    CreateComment
    Timeline
</template>

<script>
import Timeline from '~/components/Timeline'
import CreateComment from '~/components/CreateComment'

export default {

  components: {
    Timeline,
    CreateComment
  },

}
</script>

<style lang="sass" scoped>
</style>
