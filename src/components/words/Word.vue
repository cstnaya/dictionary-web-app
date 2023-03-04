<template>
  <div>
    <!-- title -->
    <WordTitle :word="word" :phonetic="phonetic" />

    <!-- meanings -->
    <WordMeaning v-for="(mean, idx) of meanings" :key="word + idx" :mean="mean" />

    <!-- source -->
    <WordSource :sources="sources" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    WordTitle: defineAsyncComponent(() => import('@/components/words/WordTitle.vue')),
    WordMeaning: defineAsyncComponent(() => import('@/components/words/WordMeaning.vue')),
    WordSource: defineAsyncComponent(() => import('@/components/words/WordSource.vue'))
  },
  props: ['word', 'phonetic', 'meanings', 'sources']
}
</script>
