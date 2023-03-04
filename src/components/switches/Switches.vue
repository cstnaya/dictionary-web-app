<template>
  <button type="button" aria-label="switch" @click="$emit('update:modelValue', !modelValue)"
    class="w-16 rounded-3xl border-none p-1" :class="classes">
    <input type="checkbox" :checked="modelValue" class="hidden" />
    <span class="block h-6 w-6 rounded-full bg-white transition-all"></span>
  </button>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    classes() {
      return ({
        'bg-violet-400': this.modelValue,
        'bg-slate-500': !this.modelValue
      })
    },
  },
}
</script>

<style scoped lang="scss">
input[type='checkbox']:checked~span {
  transform: translateX(30px);
}
</style>
