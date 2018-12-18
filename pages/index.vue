<template lang="pug">
v-container
  v-layout.mb-3
    v-flex
      v-btn
        v-icon.mr-1(color="lime")
          | mdi-plus-circle-outline
        span
          | Create
  v-layout
    v-flex
      v-card.mb-2(v-for="content of contents")
        v-card-text
          | {{content.comment}}
        v-card-actions
          v-btn(color="red" flat)
            v-icon.mr-1
              | mdi-heart-broken
            | Bad!
            span.small.ml-2
              | {{content.actions.bad}}
          v-btn(color="green" flat)
            v-icon.mr-1
              | mdi-heart-circle-outline
            | Good!
            span.small.ml-2
              | {{content.actions.good}}
</template>

<script>
export default {
  data(){
    return {
      contents: [
        {
          comment: 'ひゃっはー！たのしいよね！',
          actions: {
            good: 12,
            bad: 4
          }
        },
        {
          comment: 'せやな！',
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

<style lang="sass">
</style>
