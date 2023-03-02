<template>
  <section class="py-3">
    <h4 class="title my-6 text-xl font-bold">
      <span class="bg-white pr-2">{{ mean.partOfSpeech }}</span>
    </h4>

    <section class="ml-4">
      <div>
        <h5 class="text-xl text-slate-500">Meaning</h5>
        <ul class="p-6 pl-10 leading-8">
          <li
            class="relative before:absolute before:-left-4 before:text-lg before:text-violet-500 before:content-['\002022']"
            v-for="def of mean.definitions"
            :key="def.definition"
          >
            {{ def.definition }}
          </li>
        </ul>
      </div>
      <div class="mb-5 flex items-start gap-3">
        <h5 class="text-xl text-slate-500">synonyms</h5>
        <ul class="flex flex-wrap gap-3 font-bold text-violet-600">
          <li v-for="syn of mean.synonyms" :key="syn">{{ syn }}</li>
        </ul>
      </div>
      <div class="mb-5 flex items-start gap-3">
        <h5 class="text-xl text-slate-500">antonyms</h5>
        <ul class="flex flex-wrap gap-3 font-bold text-violet-600">
          <li v-for="ant of mean.antonyms" :key="ant">{{ ant }}</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ['mean']
}
</script>

<style scoped lang="scss">
.title {
  border-bottom: 1px solid #c5c5c5;
  line-height: 0.1em;
}
</style>
