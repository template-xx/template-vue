<template>
  <default-layout>
    <div class="p-4">
      <div class="flex flex-col">
        <p class="leading-loose">{{ $t('page.not_found') }}</p>
      </div>
    </div>
  </default-layout>
</template>

<script>
import head from '../plugins/head'
import DefaultLayout from '../layouts/default.vue'

export default {
  components: {
    DefaultLayout,
  },
  beforeCreate() {
    head.title(this.$i18n.t('page.not_found'))
  }
}
</script>
