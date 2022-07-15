<template>
  <div class="min-h-screen">
    <default-header></default-header>
    <main class="max-w-4xl mx-auto">
      <slot></slot>
    </main>
    <default-footer></default-footer>
  </div>
</template>

<script setup>
import DefaultHeader from '../components/header.vue'
import DefaultFooter from '../components/footer.vue'
</script>
