<template>
  <section class="my-3 md:my-5">
    <form @submit.prevent="onSearch" class="relative flex w-full">
      <input
        type="text"
        class="flex-1 rounded-xl bg-slate-100 p-3 focus:bg-slate-200 focus:ring-1 dark:bg-neutral-600 dark:text-white"
        v-model="keyword"
        aria-label="search"
      />
      <button type="submit" aria-label="search" class="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-violet-800 dark:text-violet-400">
        <font-awesome-icon icon="fas fa-search" />
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keyword: this.$route.query.q ?? ''
    }
  },
  methods: {
    onSearch() {
      if (this.keyword) {
        this.$router.push({ path: '/search', query: { q: this.keyword } })
      }
    }
  }
}
</script>
