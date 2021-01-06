<template>
  <default-layout>
    <div class="p-4">
      <div class="flex flex-col">
        <p class="leading-loose">抱歉，没有找到对应的页面</p>
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
    head.title('抱歉，没有找到对应的页面')
  }
}
</script>
