<template lang="pug">
v-container
  v-layout.mb-3
    v-flex.text-sm-right
      v-btn
        v-icon.mr-1(color="lime")
          | mdi-plus-circle-outline
        span
          | Create
  v-layout.row.justify-center
    v-flex.lg6
      v-card.mb-2(v-for="comment of comments" :key="comment.id")
        v-card-text
          | {{comment.content}}
        v-card-actions
          v-btn(color="red" flat)
            v-icon.mr-1
              | mdi-heart-broken
            | Bad!
            span.small.ml-2
              | {{comment.bad}}
          v-btn(color="green" flat)
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{comment.good}}
</template>

<script>
import { db } from '~/plugins/firestore.js'
import { mapGetters } from 'vuex'

export default {

  created() {
    this.$store.dispatch('setCommentsRef', db.collection('comments'))
  },

  computed: {
    ...mapGetters({ comments: 'getComments' })
  }

}
</script>

<style lang="sass" scoped>
</style>
