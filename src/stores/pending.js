import { defineStore } from 'pinia'

export const usePendingStore = defineStore('pending', {
  state: () => ({ pending: false }),
  actions: {
    startPending() {
      this.pending = true
    },
    finishPending() {
      this.pending = false
    }
  }
})
