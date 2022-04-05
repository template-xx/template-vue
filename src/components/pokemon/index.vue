<template>
  <div class="mx-auto max-w-2xl lg:max-w-7xl">
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <Card v-for="item in data" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
  import Card from './card.vue'
  defineProps({ data: Object })
</script>
