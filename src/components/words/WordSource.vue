<template>
  <section class="flex items-start gap-3 border-t border-slate-300 py-4">
    <h6 class="text-xs text-slate-500">Source</h6>
    <ul class="flex flex-wrap gap-3 text-sm text-slate-600 underline">
      <li v-for="source of sources" :key="source">
        <a :href="source" target="_blank">{{ source }}</a>
        <font-awesome-icon icon="fas fa-external-link-alt" class="ml-1 text-xs" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['sources']
}
</script>
