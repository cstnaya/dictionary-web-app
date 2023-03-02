<template>
  <div class="container mx-auto px-3 md:px-5">
    <!-- header -->
    <HeaderView />

    <!-- search -->
    <Search :key="$route.path" />
  </div>

  <RouterView />
</template>

<script>
import HeaderView from '@/components/Header.vue'
import Search from '@/components/Search.vue'

export default {
  components: { HeaderView, Search }
}
</script>
