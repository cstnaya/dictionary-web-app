<template>
  <div class="container mx-auto grid gap-y-8 py-8 px-3 font-serif">
    <header class="flex items-center justify-between">
      <h1>
        <router-link to="/" class="text-5xl text-slate-400"
          ><font-awesome-icon icon="fas fa-glasses"
        /></router-link>
      </h1>
      <ul class="flex gap-5">
        <li>
          <select class="px-2 text-right">
            <option value="serif">serif</option>
            <option value="sans serif">sans serif</option>
            <option value="monospace">monospace</option>
          </select>
        </li>
        <li>
          <Switches class="mr-2" />
          <font-awesome-icon icon="fas fa-moon" />
          <font-awesome-icon icon="fas fa-sun" />
        </li>
      </ul>
    </header>
    <div>
      <form @submit.prevent="onSearch" class="relative flex w-full">
        <input
          type="search"
          class="flex-1 rounded-xl bg-slate-100 p-3 focus:bg-slate-200 focus:ring-1"
          v-model="keyword"
        />
        <font-awesome-icon
          icon="fas fa-search"
          class="absolute inset-y-1/2 right-2 -translate-y-1/2 p-2 text-violet-800"
        />
      </form>
    </div>
    <div class="word">
      <section class="word__title relative">
        <h2 class="text-4xl font-bold text-slate-800">keyboard</h2>
        <h3 class="mt-2 text-xl text-violet-500">accent....</h3>
        <button
          class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-violet-200"
        >
          <font-awesome-icon icon="fas fa-play-circle" class="rounded-full bg-violet-500" />
        </button>
      </section>
      <section class="word__definition">
        <h4 class="my-6 text-xl font-bold"><span>noun</span></h4>

        <div>
          <h5 class="text-xl text-slate-500">Meaning</h5>
          <ul class="list-disc p-8 px-10">
            <li>Any word used as the key to a code.</li>
            <li>Any word used in a reference work to link to other words or other information.</li>
          </ul>
        </div>

        <div class="mb-5 flex items-center gap-3">
          <h5 class="text-xl text-slate-500">synonyms</h5>
          <ul class="flex gap-3 font-bold text-violet-600">
            <li>operative word</li>
            <li>workword</li>
          </ul>
        </div>

        <div class="flex items-center gap-3">
          <h5 class="text-xl text-slate-500">antonyms</h5>
          <ul class="flex gap-3 font-bold text-violet-600">
            <li>lorem ipsum</li>
            <li>lorem</li>
          </ul>
        </div>
      </section>
      <section class="word__source my-8 flex items-center gap-3">
        <h6 class="text-xs text-slate-500">Source</h6>
        <ul class="flex gap-3 text-sm text-slate-600 underline">
          <li>
            <a href="https://wikipedia.com/keyword" target="_blank"
              >https://wikipedia.com/keyword</a
            >
            <font-awesome-icon icon="fas fa-external-link-alt" class="ml-1 text-xs" />
          </li>
          <li>
            <a href="https://wikipedia.com/search/keyword" target="_blank"
              >https://wikipedia.com/search/keyword</a
            >
            <font-awesome-icon icon="fas fa-external-link-alt" class="ml-1 text-xs" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Switches from 'vue-switches'

export default {
  components: { Switches },
  data() {
    return {
      keyword: ''
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

<style scoped lang="scss">
.header__list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2em;
}

.search {
  display: flex;

  .search__input {
    flex: 1;
    border: none;
    outline: none;
    background-color: $color-light-grey;
    padding: 1em;
    border-radius: 10px;
    font-weight: bold;
  }

  .search__icon {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
  }
}

.word__title {
  display: grid;

  .word__btn--play {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    padding: 0;
  }
}

.word__synonyms__list,
.word__antonyms__list {
  display: flex;
  gap: 0.75em;
  list-style: none;

  .word__synonyms__item,
  .word__antonyms__item {
    text-decoration: underline;
  }
}
</style>
