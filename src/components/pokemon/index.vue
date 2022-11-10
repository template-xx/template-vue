<template>
  <div
    class="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-5"
  >
    <template v-for="page in pages">
      <Card v-for="card in page.cards" :key="card.id" :data="card" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Card from './card.vue'
defineProps<{ pages: any[] }>()
</script>
