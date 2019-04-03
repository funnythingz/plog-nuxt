<template lang="pug">
v-container
  v-layout.row.justify-center
    v-flex.lg6.pr-3
      v-layout.row
        v-flex
          v-card.mb-2(v-for="comment of comments" :key="comment.id" color="deep-purple darken-1" dark)
            v-card-text
              | {{comment.content}}
            v-divider(dark)
            v-card-actions.justify-end
              v-btn(color="green" flat)
                v-icon.mr-1
                  | mdi-heart-circle-outline
                | Good!
                span.small.ml-2
                  | {{comment.good}}
              v-btn(color="red" flat)
                v-icon.mr-1
                  | mdi-heart-broken
                | Bad!
                span.small.ml-2
                  | {{comment.bad}}
    v-flex.lg2
      v-layout.row
        v-flex
          v-form(@submit.prevent="submit")
            v-textarea(v-model="comment" outline label="Comment" color="indigo lighten-1")
            v-layout.row.justify-end
              v-flex.text-sm-right
                v-btn
                  v-icon.mr-1
                    | mdi-comment-plus
                  | post
</template>

<script>
import { db } from '~/plugins/firestore.js'
import { mapGetters } from 'vuex'

export default {

  created() {
    this.$store.dispatch('setCommentsRef', db.collection('comments'))
  },

  data() {
    return {
      comment: ''
    }
  },

  computed: {
    ...mapGetters({ comments: 'getComments' })
  }

}
</script>

<style lang="sass" scoped>
</style>
