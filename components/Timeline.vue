<template lang="pug">
v-flex.lg6.pr-3
  v-layout.row
    v-flex
      v-card.mb-2(v-for="comment of comments" :key="comment.id" :color="comment.color")
        v-card-text
          | {{comment.content}}
        v-divider
        v-card-actions.justify-end
          v-btn(flat dark)
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{comment.good}}
          v-btn(flat dark)
            v-icon.mr-1
              | mdi-heart-broken
            | Bad!
            span.small.ml-2
              | {{comment.bad}}
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
  },

  methods: {
  }

}
</script>

<style lang="sass" scoped>
</style>
