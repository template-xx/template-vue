<template>
  <div class="group antialiased">
    <div
      class="overflow-hidden rounded aspect-square shadow-lg w-full mb-2"
      :style="{ backgroundColor: data.color }"
    >
      <img
        :class="[
          'duration-200 ease-in-out rounded object-cover shadow-inner group-hover:scale-105',
          isLoading ? '-translate-y-6 scale-95' : 'translate-y-0 scale-100'
        ]"
        :alt="data.name"
        :src="data.imageUrl"
        @load="setLoading(false)"
      />
    </div>
    <h3 class="font-medium text-slate-700 mb-1 group-hover:underline">
      {{ data.name }}
    </h3>
    <p class="font-mono text-sm text-slate-500 truncate">{{ data.genus }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ data: any }>()

const isLoading = ref(true)
const setLoading = (value: boolean) => (isLoading.value = value)
</script>
