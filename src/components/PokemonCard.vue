<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()
const { filteredPokemon, selectedPokemon } = storeToRefs(pokemonStore) //Sacar variables
const { searchPokemon, showPokemon } = pokemonStore //Sacar funciones
</script>

<template>
  <article class="pokemon-card">
    <header class="pokemon-card__header">
      <h1 class="pokemon-card__h1">{{ selectedPokemon }}</h1>
    </header>

    <main class="pokemon-card__main">
      <figure class="pokemon-card__icon">
        <span class="material-icons icon">cloud</span>
        <figcaption class="pokemon-card__caption"></figcaption>
      </figure>

      <section class="pokemon-card__section">
        <p class="pokemon-card__p">15°C</p>
      </section>
    </main>
  </article>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $background-color-secundary;
  text-align: center;
  color: $text-color-primary;
  width: 40em;
  height: 30em;
  &__header {
    margin: 1em;
  }

  &__section {
    margin: 1em;
  }
}
</style>
