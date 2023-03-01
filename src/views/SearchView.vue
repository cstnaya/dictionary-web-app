<template>
  <div>search result here... {{ keyword }}</div>
</template>

<script>
import api from '@/utils/request.js'

export default {
  data() {
    return {
      keyword: []
    }
  },
  computed: {
    query() {
      return this.$route.query.q
    }
  },
  async created() {
    const res = await api.get(`${this.query}`)
    this.keyword = res.data
  }
}
</script>
