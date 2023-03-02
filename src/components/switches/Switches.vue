<template>
  <button
    type="button"
    @click="$emit('update:modelValue', !modelValue)"
    class="w-16 rounded-3xl border-none bg-violet-600 p-1 focus:outline-none"
  >
    <input type="checkbox" :checked="modelValue" class="hidden" />
    <span class="block h-6 w-6 rounded-full bg-white transition-all"></span>
  </button>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style scoped lang="scss">
input[type='checkbox']:checked ~ span {
  transform: translateX(30px);
}
</style>
