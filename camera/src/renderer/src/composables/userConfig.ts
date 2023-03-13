import { ref } from 'vue'

interface ConfigType {
  deviceId: string
  page: string
}

const config = ref<ConfigType>({
  deviceId: '',
  page: 'camera'
})

export default () => {
  return { config }
}
