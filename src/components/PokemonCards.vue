<script setup>
import PokemonCard from './PokemonCard.vue'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { onMounted, watch } from 'vue'

const pokemonStore = usePokemonStore() // Obtener el store
const { allPokemons } = storeToRefs(pokemonStore) // Desestructurar la propiedad que contiene los Pokémon

// Llamar a la función del store para obtener los Pokémon al montar el componente
onMounted(() => {
  pokemonStore.defaultPokemons() // Aquí es donde llamas a la función
})

watch(
  allPokemons,
  (newValue) => {
    console.log(newValue) // Esto se ejecutará cuando allPokemons cambie
  },
  { immediate: true }
)
</script>

<template>
  <section>
    <PokemonCard v-for="pokemon in allPokemons" :key="pokemon.name" :pokemon="pokemon" />
  </section>
</template>

<style lang="scss" scoped></style>
