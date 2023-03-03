import { setActivePinia, createPinia } from 'pinia'
import { usePendingStore } from '@/stores/pending'

describe('pinia pending store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('tests startPending action', () => {
    // initial state
    const pend = usePendingStore()
    expect(pend.pending).toBe(false)

    // start pending
    pend.startPending()
    expect(pend.pending).toBe(true)
  })

  it('tests finish pending action', () => {
    // initial state
    const pend = usePendingStore()

    // start pending
    pend.startPending()

    pend.finishPending()
    expect(pend.pending).toBe(false)
  })
})
