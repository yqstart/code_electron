<template>
  <main class="h-screen w-screen flex">
    <video class="object-cover"></video>
  </main>
</template>

<script setup lang="ts">
// navigator.mediaDevices.enumerateDevices().then(res => {
//   console.log(res)
// })

import { onMounted } from 'vue'

onMounted(() => {
  const video = document.querySelector('video')
  const constraints = {
    audio: false,
    video: true
  }
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style scoped></style>
