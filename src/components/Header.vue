<template>
  <header class="flex items-center justify-between pt-6 pb-3">
    <h1>
      <router-link to="/" aria-label="go to homepage"
        class="text-4xl text-slate-500 dark:text-neutral-500 md:text-5xl"><font-awesome-icon
          icon="fas fa-glasses" /></router-link>
    </h1>
    <ul class="flex gap-5">
      <li class="flex items-center">
        <select class="px-2 text-right dark:bg-neutral-800 dark:text-white" :value="fontSize"
          @change="$emit('changeFontSize', $event.target.value)">
          <option value="serif">serif</option>
          <option value="sans-serif">sans serif</option>
          <option value="monospace">monospace</option>
        </select>
      </li>
      <li class="flex items-center border-l-2 border-l-slate-200 pl-4">
        <Switches class="mr-2" v-model="darkMode" />
        <font-awesome-icon icon="fas fa-moon" v-if="darkMode" class="w-8 text-xl dark:text-violet-400" />
        <font-awesome-icon icon="fas fa-sun" v-else class="w-8 text-xl" />
      </li>
    </ul>
  </header>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: { Switches: defineAsyncComponent(() => import('@/components/switches/Switches.vue')) },
  data() {
    return {
      darkMode: false
    }
  },
  props: {
    fontSize: {
      type: String,
      required: true,
      validator(v) {
        return ['serif', 'sans-serif', 'monospace'].includes(v)
      }
    }
  },
  created() {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      this.darkMode = true
    }
  },
  watch: {
    darkMode(newValue) {
      if (newValue) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        localStorage.removeItem('theme')
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
