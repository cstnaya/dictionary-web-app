<template>
  <header class="flex items-center justify-between pt-6 pb-3">
    <h1>
      <router-link to="/" class="text-4xl md:text-5xl dark:text-neutral-500 text-slate-500"><font-awesome-icon icon="fas fa-glasses" /></router-link>
    </h1>
    <ul class="flex gap-5">
      <li class="flex items-center">
        <select class="px-2 text-right dark:bg-neutral-800 dark:text-white">
          <option value="serif">serif</option>
          <option value="sans serif">sans serif</option>
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
import Switches from '@/components/switches/Switches.vue'

export default {
  components: { Switches },
  data() {
    return {
      darkMode: false
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
    },
  }
}
</script>
