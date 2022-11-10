<template>
  <router-link class="flex items-center h-14" to="/">
    <img v-if="src" :src="src" :alt="title" />
    <span v-else class="font-medium text-slate-900 px-2">{{ title }}</span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  src?: string
}>()
</script>
