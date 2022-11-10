<template>
  <page-layout>
    <div ref="cards">
      <template v-if="data">
        <Pokemon :pages="data.pages" />
      </template>
    </div>
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
import { ref, watch, nextTick, onBeforeMount } from 'vue'

const cards = ref(null)
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        fetchNextPage()
      }
    })
  },
  { threshold: 0 }
)

const { isLoading, data, fetchNextPage } = useInfiniteQuery({
  queryFn: listCards,
  queryKey: ['cards'],
  getNextPageParam: (lastPage) => lastPage.nextCursor
})

async function listCards({ pageParam = 0 }) {
  const { data: cards } = await axios.get(`/pokemon?offset=${pageParam}`)
  const nextCursor = cards[cards.length - 1]?.id
  return { cards, nextCursor }
}

watch(data, () => {
  nextTick(() => {
    const lastCard = cards.value?.querySelector('a:last-child')
    if (lastCard) {
      observer.observe(lastCard)
    }
  })
})

onBeforeMount(() => {
  head.title('Pokemon')
})
</script>
