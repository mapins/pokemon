<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { useCapitalize } from '../composables/useCapitalize'

const pokemonStore = usePokemonStore()
const { filteredPokemon } = storeToRefs(pokemonStore)
const { showPokemon } = pokemonStore
</script>

<template>
  <ul v-if="filteredPokemon.length > 0 && searchTerm.length > 0" class="lateral-pokemon__ul">
    <li v-for="pokemon in filteredPokemon" :key="pokemon.name">
      <a
        href="#"
        @click="showPokemon(pokemon.url)"
        :aria-label="`Link to see the card of ${pokemon.name}`"
        >{{ useCapitalize(pokemon.name) }}</a
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
