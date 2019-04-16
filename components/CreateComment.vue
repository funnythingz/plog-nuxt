<template lang="pug">
v-dialog(v-model="createCommentFlag" max-width="500")
  v-card
    v-card-text
      v-form(@submit.prevent="submit")
        v-textarea(v-model="comment" outline label="Comment" color="indigo lighten-1")
        v-layout.row.justify-end.text-xs-right
          v-flex
            v-btn(@click="closeDialog()" color="primary" flat small)
              v-icon.mr-1
                | mdi-close-circle-outline
              | Close
            v-btn(@click="commit" :disabled="commitActive" flat small)
              v-icon.mr-1
                | mdi-comment-plus-outline
              | Post
    v-card-actions
</template>

<script>
import firebase from 'firebase'
import { db } from '~/plugins/firestore.js'
import { mapGetters, mapState } from 'vuex'
import isNull from 'lodash/isNull'
import sample from 'lodash/sample'
import MaterialColorsSelector from 'material-colors-selector'

export default {

  computed: {
    createCommentFlag: {
      get() {
        return this.$store.state.createCommentFlag
      },
      set(value) {
        this.$store.commit('setCreateCommentFlag', value)
      }
    }
  },

  data() {
    return {
      comment: '',
      commitActive: false
    }
  },

  methods: {
    async commit() {
      this.closeDialog()
      this.commitActive = true
      const comment = await db.collection('comments').add(this.createComment(this.comment))
      this.clearComment()
      this.$router.push({path: '/'})
    },

    createComment(comment) {
      let mcs = new MaterialColorsSelector()
      return {
        content: comment,
        color: mcs.random(),
        good: 0,
        bad: 0,
        timestamp: firebase.firestore.Timestamp.now().toDate()
      }
    },

    isLogin() {
      return !isNull(this.$store.state.currentUser)
    },

    clearComment() {
      this.commitActive = false
      this.comment = ''
    },

    closeDialog() {
      this.$store.commit('setCreateCommentFlag', false)
    }
  }

}
</script>

<style lang="sass" scoped>
</style>
