<template>
  <div class="container mx-auto px-3 md:px-5">
    <!-- header -->
    <HeaderView :fontSize="fontSize" @changeFontSize="changeFontSize" />

    <!-- search -->
    <Search :key="$route.path" />
  </div>

  <RouterView />
</template>

<script>
import HeaderView from '@/components/Header.vue'
import Search from '@/components/Search.vue'

export default {
  components: { HeaderView, Search },
  data() {
    return {
      fontSize: 'serif'
    }
  },
  created() {
    if (localStorage.font && ['serif', 'sans-serif', 'monospace'].includes(localStorage.font)) {
      // check if localStorage has preference setting
      this.fontSize = localStorage.font
    }
  },
  methods: {
    changeFontSize(newFontSize) {
      this.fontSize = newFontSize
    }
  },
  watch: {
    fontSize(newFontSize) {
      localStorage.font = newFontSize
      document.documentElement.style.setProperty('--font-size', newFontSize)
    }
  }
}
</script>
