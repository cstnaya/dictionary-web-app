import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/'
})

// 在請求被處理前攔截
api.interceptors.request.use()

// 在回應被處理前攔截
api.interceptors.response.use()

export default api
