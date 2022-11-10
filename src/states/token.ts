import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore('token', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)

  return {
    accessToken,
    refreshToken
  }
})
