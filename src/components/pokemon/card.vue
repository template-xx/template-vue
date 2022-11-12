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
    <h3 class="text-base text-neutral-700">
      <span
        class="duration-200 ease-in-out transition-[background-size] bg-gradient-to-r from-sky-300 to-lime-300 bg-left-bottom bg-no-repeat bg-[length:0px_3px] group-hover:bg-[length:100%_3px]"
        >{{ data.name }}</span
      >
    </h3>
    <p class="text-sm text-neutral-400 truncate">{{ data.genus }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ data: any }>()

const isLoading = ref(true)
const setLoading = (value: boolean) => (isLoading.value = value)
</script>
