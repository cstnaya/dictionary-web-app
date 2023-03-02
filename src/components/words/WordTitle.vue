<template>
  <section class="relative mt-6 md:mt-3">
    <h2 class="text-4xl font-bold text-slate-800">{{ word }}</h2>
    <h3 class="mt-2 text-xl text-violet-500">{{ phonetic.text }}</h3>
    <button
      @click.prevent="onPlay(phonetic.audio)"
      class="btn--play absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-violet-200"
      :disabled="noSound"
    >
      <font-awesome-icon icon="fas fa-play-circle" class="rounded-full bg-violet-500" />
    </button>
  </section>
</template>

<script>
export default {
  props: ['word', 'phonetic'],
  computed: {
    noSound() {
      return this.phonetic.audio == false
    }
  },
  methods: {
    onPlay(mp3) {
      if (mp3) {
        let audio = new Audio(mp3)
        audio.play()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.btn--play:disabled {
  opacity: 0.5;
}
</style>
