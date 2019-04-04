<template lang="pug">
v-container
  v-layout.row.justify-center
    Timeline
    CreateComment
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
