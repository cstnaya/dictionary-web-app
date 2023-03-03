<template>
  <div class="container mx-auto px-3 md:px-5">
    <Loading v-if="pending" />
    <Word
      v-else-if="word"
      :word="word"
      :phonetic="phonetic"
      :meanings="meanings"
      :sources="sources"
    />
    <NoResult v-else />
  </div>
</template>

<script>
import api from '@/utils/request.js'
import Word from '@/components/words/Word.vue'
import NoResult from '@/components/NoResult.vue'
import Loading from '@/components/Loading.vue'
import { usePendingStore } from '@/stores/pending'
import { mapActions } from 'pinia'

export default {
  components: { Word, NoResult, Loading },
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
    },
    pending: () => usePendingStore().pending
  },
  methods: {
    async httpFetch() {
      try {
        const res = await api.get(`${this.query}`)
        this.keyword = res.data[0]
        usePendingStore().finishPending()
      } catch (e) {
        this.keyword = {}
        usePendingStore().finishPending()
      }
    },
    ...mapActions(usePendingStore, ['finishPending'])
  },
  created() {
    this.httpFetch()
  },
  watch: {
    async query() {
      this.httpFetch()
    }
  }
}
</script>
