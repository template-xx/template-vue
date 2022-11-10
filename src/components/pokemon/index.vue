<template>
  <div class="mx-auto max-w-2xl lg:max-w-7xl p-6 xl:py-8">
    <div
      class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <template v-for="page in pages">
        <Card v-for="card in page" :key="card.id" :data="card" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './card.vue'
defineProps<{ pages: any[] }>()
</script>
