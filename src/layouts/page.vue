<template>
  <div class="min-h-screen">
    <default-header></default-header>
    <main>
      <slot></slot>
    </main>
    <default-footer></default-footer>
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from '../components/header.vue'
import DefaultFooter from '../components/footer.vue'
</script>
