<template lang="pug">
v-container
  v-layout.mb-3
    v-flex.text-sm-right
      v-btn
        v-icon.mr-1(color="lime")
          | mdi-plus-circle-outline
        span
          | Create
  v-layout
    v-flex
      LogoVue
      v-card.mb-2(v-for="comment of comments" :key="comment.id")
        v-card-text
          | {{comment.content}}
        v-card-actions
          v-btn(color="red" flat)
            v-icon.mr-1
              | mdi-heart-broken
            | Bad!
            span.small.ml-2
              | {{comment.actions.bad}}
          v-btn(color="green" flat)
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{comment.actions.good}}
</template>

<script>
import LogoVue from '~/components/Logo'
import firebase from 'firebase'

export default {
  components: {
    LogoVue
  },

  data(){
    return {
      comments: [
        {
          id: 1,
          content: 'ひゃっはー！たのしいよね！',
          actions: {
            good: 12,
            bad: 4
          }
        },
        {
          id: 2,
          content: 'せやな！',
          actions: {
            good: 2,
            bad: 3
          }
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
