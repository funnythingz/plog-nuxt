<template lang="pug">
v-flex.pr-3.mt-4.mb-3
  v-container.grid-list-lg
    v-layout.row.wrap
      v-flex(v-for="comment of comments" :key="comment.id")
        v-card(:color="comment.color" @click="linkToComment(comment.id)")
          v-card-text
            | {{comment.content}}
          v-divider
          v-card-actions.justify-end
            v-btn(flat :dark="isLogin()" small @click.stop="goodAction(comment.id)" :disabled="goodActionActive")
              v-icon.mr-1
                | mdi-heart-circle-outline
              | Good!
              span.small.ml-2
                | {{comment.good}}
            v-btn(flat :dark="isLogin()" small @click.stop="badAction(comment.id)" :disabled="badActionActive")
              v-icon.mr-1
                | mdi-heart-broken
              | Bad!
              span.ml-2
                | {{comment.bad}}
</template>

<script>
import { db } from '~/plugins/firestore.js'
import { mapGetters, mapState } from 'vuex'
import isEmpty from 'lodash/isEmpty'

export default {

  created() {
    this.$store.dispatch('setCommentsRef', db.collection('comments'))
  },

  updated() {
    if(this.isLogin()) {
      this.actionEnabled()
    } else {
      this.actionDisabled()
    }
  },

  computed: {
    ...mapGetters({ comments: 'getComments' }),
    ...mapState(['currentUser'])
  },

  data() {
    return {
      goodActionActive: false,
      badActionActive: false
    }
  },

  methods: {
    async goodAction(commentId) {
      if(this.isLogin()) {
        this.goodActionActive = true
        const docRef = db.collection('comments').doc(commentId)
        const doc = await docRef.get()
        const comment = doc.data()
        docRef.update({
          good: (comment.good += 1)
        })
        this.goodActionActive = false
        this.$router.push({path: '/'})
      }
    },

    async badAction(commentId) {
      if(this.isLogin()) {
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
    },

    isLogin() {
      return !isEmpty(this.currentUser)
    },

    actionEnabled() {
      this.goodActionActive = false
      this.badActionActive = false
    },

    actionDisabled() {
      this.goodActionActive = true
      this.badActionActive = true
    },

    linkToComment(commentId) {
      this.$router.push({path: `/comments/${commentId}`})
    }
  }

}
</script>

<style lang="sass" scoped>
.v-card
  cursor: pointer
</style>
