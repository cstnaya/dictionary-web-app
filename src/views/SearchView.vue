<template>
  <div class="container mx-auto px-3 md:px-5">
    <div v-if="word">
      <!-- title -->
      <WordTitle :word="word" :phonetic="phonetic" />

      <!-- meanings -->
      <WordMeaning v-for="(mean, idx) of meanings" :key="idx" :mean="mean" />

      <!-- source -->
      <WordSource :sources="sources" />
    </div>
    <NoResult v-else />
  </div>
</template>

<script>
import api from '@/utils/request.js'
import WordTitle from '@/components/words/WordTitle.vue'
import WordMeaning from '@/components/words/WordMeaning.vue'
import WordSource from '@/components/words/WordSource.vue'
import NoResult from '@/components/NoResult.vue'

export default {
  components: { WordTitle, WordMeaning, WordSource, NoResult },
  data() {
    return {
      keyword: {}
    }
  },
  computed: {
    query() {
      return this.$route.query.q
    },
    word() {
      return this.keyword?.word
    },
    phonetic() {
      if (!this.keyword.phonetics) {
        return {}
      }

      return this.keyword.phonetics.find((ph) => ph.audio !== null) ?? this.keyword.phonetics[0]
    },
    meanings() {
      return this.keyword?.meanings ?? []
    },
    sources() {
      return this.keyword?.sourceUrls
    }
  },
  methods: {
    async httpFetch() {
      try {
        const res = await api.get(`${this.query}`)
        this.keyword = res.data[0]
      } catch (e) {
        this.keyword = {}
      }
    }
  },
  watch: {
    async query() {
      this.httpFetch()
    }
  }
}
</script>
