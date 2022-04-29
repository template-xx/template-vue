<template>
  <default-layout>
    <div class="p-4">
      <div class="flex flex-col">
        <p class="leading-loose">{{ $t('page.not_found') }}</p>
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import head from '../plugins/head'
import DefaultLayout from '../layouts/default.vue'
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

onBeforeMount(() => {
  head.title(i18n.t('page.not_found'))
})
</script>
