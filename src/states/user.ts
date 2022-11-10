import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const me = ref(null)

  return {
    users,
    me
  }
})
