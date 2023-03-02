<template>
  <header class="flex items-center justify-between pt-6 pb-3">
    <h1>
      <router-link to="/" class="text-5xl text-slate-400"
        ><font-awesome-icon icon="fas fa-glasses"
      /></router-link>
    </h1>
    <ul class="flex gap-5">
      <li class="flex items-center">
        <select class="px-2 text-right">
          <option value="serif">serif</option>
          <option value="sans serif">sans serif</option>
          <option value="monospace">monospace</option>
        </select>
      </li>
      <li class="flex items-center border-l-2 border-l-slate-200 pl-4">
        <Switches class="mr-2" v-model="darkMode" />
        <font-awesome-icon icon="fas fa-moon" v-if="darkMode" class="w-8 text-xl" />
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
  }
}
</script>
