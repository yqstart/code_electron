import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userConfigStore = defineStore(
  'userConfig',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '3px',
      borderColor: 'green',
      rounded: false
    })
    return { config }
  },
  {
    persist: {
      enabled: true
      // strategies: [
      //   {
      //     storage: localStorage,
      //     paths: []
      //   }
      // ]
    }
  }
)
