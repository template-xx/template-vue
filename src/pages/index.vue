<template>
  <page-layout>
    <div class="max-w-6xl mx-auto">
      <div class="p-6 pt-2" ref="cards">
        <template v-if="data">
          <Pokemon :pages="data.pages" />
        </template>
      </div>
    </div>
    <Center v-if="isLoading || isFetchingNextPage" class="h-32">
      <Loader />
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
import { ref, watch, nextTick, onBeforeMount, onMounted } from 'vue'

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

const { isLoading, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
  {
    queryFn: listCards,
    queryKey: ['cards'],
    getNextPageParam: (lastPage) => lastPage.nextCursor
  }
)

async function listCards({ pageParam = 0 }) {
  const { data: cards } = await axios.get(
    `/pokemon?offset=${pageParam}&limit=60`
  )
  const nextCursor = cards[cards.length - 1]?.id
  return { cards, nextCursor }
}

function queryLastCard() {
  return cards.value?.querySelector('.group:last-child')
}

watch(data, () => {
  nextTick(() => {
    const card = queryLastCard()
    card && observer.observe(card)
  })
})

onBeforeMount(() => {
  head.title('Pokémon')
})

onMounted(() => {
  const card = queryLastCard()
  card && observer.observe(card)
})
</script>
