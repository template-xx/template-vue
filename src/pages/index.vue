<template>
  <div ref="cards">
    <Pokemon :data="items" />
  </div>
</template>

<script setup>
import head from '../plugins/head'
import axios from '../plugins/axios'
import Pokemon from '../components/pokemon/index.vue'
import { computed, ref, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useStore } from 'vuex'

const cards = ref(null)
const store = useStore()
const items = computed(() => store.state.pokemon.data)

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        axios.get(`/pokemon?offset=${items.value.length}`).then(({ data }) => {
          if (data.length > 0) {
            store.commit('pokemon/loadMore', data)
          }
        })
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
    store.commit('pokemon/setData', data)
  })
})

onUpdated(() => {
  const lastCard = cards.value.querySelector('a:last-child')

  if (lastCard) {
    observer.observe(lastCard)
  }
})
</script>
