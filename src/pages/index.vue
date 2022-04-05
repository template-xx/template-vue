<template>
  <div>
    <Pokemon :data="items" />
  </div>
</template>

<script setup>
  import head from '../plugins/head'
  import axios from '../plugins/axios'
  import Pokemon from '../components/pokemon/index.vue'
  import { computed, onBeforeMount, onMounted } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const items = computed(() => store.state.pokemon.data)

  onBeforeMount(() => {
    head.title('Pokemon')
  })

  onMounted(() => {
    axios.get('/pokemon').then(({ data }) => {
      store.commit('pokemon/getData', data)
    })
  })
</script>
