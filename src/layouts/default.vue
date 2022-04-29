<template>
  <default-header></default-header>
  <div class="max-w-4xl mx-auto">
    <slot></slot>
  </div>
  <default-footer></default-footer>
</template>

<script setup>
import DefaultHeader from '../components/header.vue'
import DefaultFooter from '../components/footer.vue'
</script>
