<template>
  <router-link class="group" :to="'/'">
    <div
      class="overflow-hidden rounded-lg bg-gray-200 aspect-square w-full mb-2"
      :style="{ backgroundColor: item.color }"
    >
      <img
        :class="[
          'duration-700 ease-in-out object-cover group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        ]"
        :alt="item.name"
        :src="item.imageUrl"
        @load="setLoading(false)"
      />
    </div>
    <h3 class="font-medium text-lg text-zinc-700">{{ item.name }}</h3>
    <p class="text-sm text-zinc-500">{{ item.genus }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  item: any
}>()

const isLoading = ref(true)
const setLoading = (value: boolean) => (isLoading.value = value)
</script>
