<template lang="pug">
v-flex.lg6.pr-3
  v-layout.row
    v-flex
      v-card.mb-2(v-for="comment of comments" :key="comment.id" :color="comment.color")
        v-card-text
          | {{comment.content}}
        v-divider
        v-card-actions.justify-end
          v-btn(flat dark @click="goodAction(comment.id)" :disabled="goodActionActive")
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{comment.good}}
          v-btn(flat dark @click="badAction(comment.id)" :disabled="badActionActive")
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

  data() {
    return {
      goodActionActive: false,
      badActionActive: false
    }
  },

  methods: {
    async goodAction(commentId) {
      this.goodActionActive = true
      const docRef = db.collection('comments').doc(commentId)
      const doc = await docRef.get()
      const comment = doc.data()
      docRef.update({
        good: (comment.good += 1)
      })
      this.goodActionActive = false
      this.$router.push({path: '/'})
    },
    async badAction(commentId) {
      this.badActionActive = true
      const docRef = db.collection('comments').doc(commentId)
      const doc = await docRef.get()
      const comment = doc.data()
      docRef.update({
        bad: (comment.bad += 1)
      })
      this.badActionActive = false
      this.$router.push({path: '/'})
    }
  }

}
</script>

<style lang="sass" scoped>
</style>
