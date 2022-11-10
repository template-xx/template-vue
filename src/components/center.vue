<template>
  <div class="flex items-center justify-center" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ height?: string }>()
</script>
