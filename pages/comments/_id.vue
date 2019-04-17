<template lang="pug">
v-container
  v-layout.mt-5.justify-center.align-center
    v-flex.lg4
      v-card(:color="comment.color")
        v-card-text
          | {{comment.content}}
        v-divider
        v-card-actions.justify-end
          v-btn(flat :dark="isLogin()" small @click="goodAction(commentId)" :disabled="goodActionActive")
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{comment.good}}
          v-btn(flat :dark="isLogin()" small @click="badAction(commentId)" :disabled="badActionActive")
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

  updated() {
    if(this.isLogin()) {
      this.actionEnabled()
    } else {
      this.actionDisabled()
    }
  },

  computed: {
    ...mapState(['currentUser'])
  },

  data() {
    return {
      goodActionActive: false,
      badActionActive: false
    }
  },

  async asyncData ({ params }) {
    const doc = await db.collection('comments').doc(params.id).get()
    return {
      comment: doc.data(),
      commentId: doc.id
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
        this.$router.push({path: `/comments/${this.$route.params.id}`})
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
        this.$router.push({path: `/comments/${this.$route.params.id}`})
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
    }
  }

}
</script>

<style lang="sass" scoped>
</style>
