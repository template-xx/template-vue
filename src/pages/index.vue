<template>
  <page-layout>
    <template v-if="data" ref="cards">
      <Pokemon :pages="data.pages" />
    </template>
    <Center v-if="isLoading" class="h-32">
      <Loader class="text-cyan-700" />
    </Center>
  </page-layout>
</template>

<script setup lang="ts">
import head from '../helpers/head'
import axios from '../helpers/axios'
import Loader from '../components/loader.vue'
import Center from '../components/center.vue'
import Pokemon from '../components/pokemon/index.vue'
import PageLayout from '../layouts/page.vue'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { computed, ref, onBeforeMount, onMounted, onUpdated } from 'vue'

async function listCards({ pageParam = 0 }) {
  const { data } = await axios.get(`/pokemon?offset=${pageParam}`)
  return data
}

const { isLoading, data, fetchNextPage } = useInfiniteQuery({
  queryKey: ['cards'],
  queryFn: listCards,
  getNextPageParam: (lastPage) => lastPage?.id
})

const cards = ref(null)
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0 }
)

onBeforeMount(() => {
  head.title('Pokemon')
})

onUpdated(() => {
  const lastCard = cards.value.querySelector('a:last-child')

  if (lastCard) {
    observer.observe(lastCard)
  }
})
</script>
