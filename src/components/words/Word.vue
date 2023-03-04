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
import WordTitle from '@/components/words/WordTitle.vue'
import WordMeaning from '@/components/words/WordMeaning.vue'
import WordSource from '@/components/words/WordSource.vue'

export default {
  components: { WordTitle, WordMeaning, WordSource },
  props: ['word', 'phonetic', 'meanings', 'sources']
}
</script>
