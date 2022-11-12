<template>
  <default-layout>
    <Center height="calc(100vh - 100px)">
      <div class="flex items-center divide-x divide-zinc-300">
        <h3 class="text-2xl text-zinc-600 pr-4">🙁</h3>
        <p class="text-zinc-600 pl-4 py-2">
          {{ $t('page.not_found') }}
        </p>
      </div>
    </Center>
  </default-layout>
</template>

<script setup lang="ts">
import head from '../helpers/head'
import Center from '../components/center.vue'
import DefaultLayout from '../layouts/default.vue'
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

onBeforeMount(() => {
  head.title(i18n.t('page.not_found'))
})
</script>
