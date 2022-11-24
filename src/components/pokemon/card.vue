<template>
  <router-link class="group" :to="`/pokemon/${data.id}`">
    <div
      class="overflow-hidden rounded shadow-lg mb-2"
      :style="{ backgroundColor: data.color }"
    >
      <div class="rounded shadow-inner p-4">
        <img
          :class="[
            'duration-300 ease-out object-cover aspect-square group-hover:scale-110',
            isLoading ? '-translate-y-6 scale-90' : 'translate-y-0 scale-100'
          ]"
          :alt="data.name"
          :src="data.imageUrl"
          @load="setLoading(false)"
        />
      </div>
    </div>
    <h3 class="text-base text-neutral-700">{{ data.name }}</h3>
    <p class="text-sm text-neutral-400 truncate">{{ data.genus }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ data: any }>()

const isLoading = ref(true)
const setLoading = (value: boolean) => (isLoading.value = value)
</script>
