<template>
  <router-link class="group" :to="'/'">
    <div
      class="overflow-hidden rounded bg-zinc-100 aspect-square w-full mb-2"
      :style="{ backgroundColor: data.color }"
    >
      <img
        :class="[
          'duration-700 ease-in-out shadow-inner object-cover group-hover:opacity-70',
          isLoading
            ? 'scale-110 blur-lg grayscale'
            : 'scale-100 blur-0 grayscale-0'
        ]"
        :alt="data.name"
        :src="data.imageUrl"
        @load="setLoading(false)"
      />
    </div>
    <h3 class="font-medium text-zinc-700 mb-1">{{ data.name }}</h3>
    <p class="font-mono text-sm text-zinc-500">{{ data.genus }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ data: any }>()

const isLoading = ref(true)
const setLoading = (value: boolean) => (isLoading.value = value)
</script>
