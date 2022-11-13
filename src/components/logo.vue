<template>
  <router-link class="flex items-center h-14" to="/">
    <img v-if="src" :alt="title" :src="src" />
    <span
      v-else
      class="font-semibold text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
      >{{ title }}</span
    >
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  src?: string
}>()
</script>
