<template>
  <main
    class="h-screen w-screen overflow-hidden"
    :style="{ border: `${config.borderWidth} solid ${config.borderColor}` }"
    :class="{ 'rounded-full': config.rounded }"
  >
    <video class="object-cover h-full border-0" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { userConfigStore } from '../store/userConfigStore'
import { storeToRefs } from 'pinia'
const { config } = storeToRefs(userConfigStore())

onMounted(() => {
  const video = document.querySelector('video')
  const constraints = {
    audio: false,
    video: { deviceId: config.value.deviceId }
  }
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style scoped></style>
