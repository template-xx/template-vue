<template>
  <div class="flex items-center justify-center" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({ height: String })
</script>
