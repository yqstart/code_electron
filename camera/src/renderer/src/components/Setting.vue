<template>
  <main class="main">
    <h2 class="text-center text-white text-sm opacity-70 mt-3">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="选择摄像头">
      <el-option
        v-for="item of cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
      ></el-option>
    </el-select>
    <el-input v-model="config.borderWidth" placeholder="边框宽度"></el-input>
    <el-input v-model="config.borderColor" placeholder="边框颜色"></el-input>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userConfigStore } from '../store/userConfigStore'
import { storeToRefs } from 'pinia'

const { config } = storeToRefs(userConfigStore())

const cameras = ref<MediaDeviceInfo[]>([])

navigator.mediaDevices.enumerateDevices().then((devices) => {
  cameras.value = devices.filter((d) => d.kind.includes('video'))
  if (cameras.value.length) {
    config.value.deviceId = cameras.value[0].deviceId
  }
})
</script>

<style scoped lang="scss">
.main {
  @apply bg-cyan-800 h-screen w-screen flex flex-col gap-6 p-6;
}
</style>
