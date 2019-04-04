<template lang="pug">
v-flex.lg2(v-if="isLogin()")
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
      const colors = [
        'red accent-1',
        'red accent-3',
        'pink lighten-3',
        'pink accent-1',
        'purple lighten-3',
        'purple accent-1',
        'deep-purple lighten-4',
        'deep-purple accent-1',
        'indigo lighten-4',
        'indigo accent-1',
        'blue lighten-3',
        'light-blue lighten-4',
        'light-blue accent-1',
        'cyan lighten-3',
        'cyan accent-3',
        'teal accent-2',
        'teal accent-3',
        'green lighten-3',
        'green accent-2',
        'green accent-3',
        'light-green lighten-2',
        'light-green accent-2',
        'light-green accent-3',
        'lime lighten-4',
        'lime lighten-3',
        'lime accent-2',
        'lime accent-3',
        'yellow lighten-2',
        'yellow accent-3',
        'yellow accent-2',
        'amber lighten-2',
        'amber accent-4',
        'orange lighten-2',
        'orange accent-3',
        'deep-orange lighten-1',
        'brown lighten-3',
        'blue-grey lighten-5',
        'blue-grey lighten-3',
        'grey lighten-3',
        'grey lighten-5',
        'grey lighten-1',
        'white'
      ]
      return {
        content: comment,
        color: sample(colors),
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
