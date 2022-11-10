<template>
  <div class="min-h-screen">
    <default-header></default-header>
    <main class="max-w-4xl mx-auto">
      <slot></slot>
    </main>
    <default-footer></default-footer>
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from '../components/header.vue'
import DefaultFooter from '../components/footer.vue'
</script>
