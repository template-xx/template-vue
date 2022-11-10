<template>
  <page-layout>
    <Center v-if="[].length === 0" class="h-32">
      <Loader class="text-cyan-700" />
    </Center>
    <div v-else ref="cards">
      <Pokemon :data="[]" />
    </div>
  </page-layout>
</template>

<script setup lang="ts">
import head from '../helpers/head'
import axios from '../helpers/axios'
import Center from '../components/center.vue'
import Loader from '../components/loader.vue'
import Pokemon from '../components/pokemon/index.vue'
import PageLayout from '../layouts/page.vue'
import { useQuery } from '@tanstack/vue-query'
import { computed, ref, onBeforeMount, onMounted, onUpdated } from 'vue'

const cards = ref(null)
// const store = useStore()
// const items = computed(() => store.state.pokemon.data)

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        // axios.get(`/pokemon?offset=${items.value.length}`).then(({ data }) => {
        //   if (data.length > 0) {
        //     store.commit('pokemon/loadMore', data)
        //   }
        // })
      }
    })
  },
  { threshold: 0 }
)

onBeforeMount(() => {
  head.title('Pokemon')
})

onMounted(() => {
  axios.get('/pokemon').then(({ data }) => {
    // store.commit('pokemon/setData', data)
  })
})

onUpdated(() => {
  const lastCard = cards.value.querySelector('a:last-child')

  if (lastCard) {
    observer.observe(lastCard)
  }
})
</script>
