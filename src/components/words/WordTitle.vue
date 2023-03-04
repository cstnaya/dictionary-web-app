<template>
  <section class="relative mt-6 md:mt-3">
    <h2 class="text-4xl font-bold text-slate-800 dark:text-white">{{ word }}</h2>
    <h3 class="mt-2 text-xl text-violet-500 dark:text-violet-400">{{ phonetic.text }}</h3>
    <button aria-label="play audio" @click.prevent="onPlay(phonetic.audio)"
      class="btn--play absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-violet-200 dark:text-violet-600"
      v-if="!noSound">
      <font-awesome-icon icon="fas fa-play-circle" class="rounded-full bg-violet-500 dark:bg-violet-100" />
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
