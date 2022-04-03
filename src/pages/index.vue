<template>
  <div>
    <Pokemon :data="items" />
  </div>
</template>

<script setup>
  import Pokemon from '../components/pokemon/index.vue'
  import axios from '../plugins/axios'
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const items = computed(() => store.state.pokemon.data)

  axios.get('/pokemon/index.json').then(({ data }) => {
    store.commit('pokemon/getData', data)
  })
</script>
