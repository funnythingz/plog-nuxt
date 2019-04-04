<template lang="pug">
v-flex.lg3(v-if="isLogin()")
  v-layout.row
    v-flex
      v-form(@submit.prevent="submit")
        v-textarea(v-model="comment" outline label="Comment" color="indigo lighten-1")
        v-layout.row.justify-end
          v-flex.text-sm-right
            v-btn(@click="commit" :disabled="commitActive")
              v-icon.mr-1
                | mdi-comment-plus
              | post
</template>

<script>
import firebase from 'firebase'
import { db } from '~/plugins/firestore.js'
import { mapGetters } from 'vuex'
import isNull from 'lodash/isNull'
import sample from 'lodash/sample'
import MaterialColorsSelector from 'material-colors-selector'

export default {

  data() {
    return {
      comment: '',
      commitActive: false
    }
  },

  methods: {
    async commit() {
      this.commitActive = true
      const storageRef = firebase.storage().ref()
      const comment = await db.collection('comments').add(this.createComment(this.comment))
      this.clearComment()
      this.$router.push({path: '/'})
    },

    createComment(comment) {
      const mcs = new MaterialColorsSelector();
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
    }
  }

}
</script>

<style lang="sass" scoped>
</style>
