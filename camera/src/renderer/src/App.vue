<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Config, CameraOne, MagicWand } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { userConfigStore } from './store/userConfigStore'
const { config } = storeToRefs(userConfigStore())

const quit = () => {
  window.api.quit()
}
</script>

<template>
  <main class="relative group" @contextmenu="quit">
    <Config
      theme="filled"
      size="24"
      class="absolute left-1/2 -translate-x-1/2 mt-3 text-amber-600 cursor-pointer z-10 hidden group-hover:block"
      v-if="config.page === 'camera'"
      @click="config.page = 'setting'"
      key="config"
    />
    <camera-one
      theme="filled"
      size="24"
      class="absolute left-1/2 -translate-x-1/2 mt-3 text-amber-600 cursor-pointer z-10"
      v-if="config.page === 'setting'"
      @click="config.page = 'camera'"
      key="camera"
    />
    <magic-wand
      theme="filled"
      v-if="config.page === 'camera'"
      size="24"
      class="absolute left-1/2 -translate-x-1/2 bottom-0 mb-3 text-amber-600 cursor-pointer z-10 hidden group-hover:block"
      key="magic"
      @click="config.rounded = !config.rounded"
    />
    <camera v-if="config.page === 'camera'"></camera>
    <setting v-else></setting>
  </main>
</template>

<style lang="scss"></style>
