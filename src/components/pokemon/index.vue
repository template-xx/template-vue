<template>
  <div class="mx-auto max-w-2xl lg:max-w-6xl px-6 pt-2 pb-6 xl:pb-8">
    <div
      class="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8"
    >
      <template v-for="page in pages">
        <Card v-for="card in page.cards" :key="card.id" :data="card" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './card.vue'
defineProps<{ pages: any[] }>()
</script>
