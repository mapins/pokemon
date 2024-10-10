<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { useCapitalize } from '../composables/useCapitalize'

const pokemonStore = usePokemonStore()
const { selectedPokemon, cardColor } = storeToRefs(pokemonStore) //Sacar variables

defineProps({
  pokemon: Object
})
</script>

<template>
  <!-- CUANDO SELECCIONAN UN POKEMON -->
  <section v-if="selectedPokemon" :style="{ backgroundColor: cardColor }" class="pokemon-card">
    <header class="pokemon-card__header">
      <h1 class="pokemon-card__h1">{{ useCapitalize(selectedPokemon.forms[0].name) }}</h1>
      <ul>
        <li v-for="type in selectedPokemon.types" :key="type" class="pokemon-card__li">
          <p>{{ type.type.name }}</p>
        </li>
      </ul>
    </header>

    <main class="pokemon-card__main">
      <img
        v-if="selectedPokemon"
        :src="selectedPokemon.sprites.other.home.front_default"
        :alt="selectedPokemon.forms.name"
        class="pokemon-card__img"
      />
      <section class="pokemon-card__section--stats">
        <div v-for="(stat, index) in selectedPokemon.stats" :key="index">
          <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
        </div>
      </section>
      <section class="pokemon-card__section--description">
        <p>{{ selectedPokemon.description }}</p>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.pokemon-card {
  width: 40em;
  max-height: fit-content;
  border-radius: 2em;
  padding: 1em;
  text-align: center;
  border: 1.5em solid $color-card;
  overflow-y: auto;

  color: $text-color-secundary;

  &__header {
    background-color: $background-color-secundary;
    padding: 1em;
    border-radius: 1em 1em 0 0;
  }

  &__h1 {
    font-size: 1.5rem;
  }

  &__li {
    list-style: none;
  }
  &__img {
    width: 20em;
    height: 20em;
    margin: 1em;
  }
  &__span {
    font-size: 1rem;
  }

  &__section {
    &--stats {
      background-color: $background-color-secundary;
      padding: 1em;
      border-radius: 1em;
      margin-bottom: 1em;
      font-size: 0.9rem;

      p {
        margin: 0.2em 0;
      }
    }
  }
}
</style>
