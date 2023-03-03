import axios from 'axios'
import { usePendingStore } from '@/stores/pending'

const api = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/'
})

const pend = usePendingStore()

// 在請求被處理前攔截
api.interceptors.request.use((config) => {
  pend.startPending()

  return config
})

// 在回應被處理前攔截
api.interceptors.response.use()

export default api
