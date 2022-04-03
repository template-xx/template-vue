<template>
  <router-link class="group" :to="'/'">
    <div class="overflow-hidden rounded-lg bg-gray-200 w-full" :style="{ backgroundColor: item.color }">
      <img :class="['duration-700 ease-in-out object-cover group-hover:opacity-75', isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0']" alt="" :src="item.imageUrl" @load="setLoading(false)" />
    </div>
    <h3 class="font-medium text-lg text-gray-900">{{ item.name }}</h3>
    <p class="text-sm text-gray-700">{{ item.genus }}</p>
  </router-link>
</template>

<script setup>
  import { ref } from 'vue'
  defineProps({ item: Object })

  const isLoading = ref(true)
  const setLoading = (value) => isLoading.value = value
</script>
