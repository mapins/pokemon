<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { useCapitalize } from '../composables/useCapitalize'

const pokemonStore = usePokemonStore()
const { selectedPokemon, cardColor, isLoading, pokemonDescription } = storeToRefs(pokemonStore) //Sacar variables
</script>

<template>
  <section v-if="!selectedPokemon && !isLoading" class="initial-pokemons">
    <img
      src="@/assets/img/initial.png"
      alt="Image of a group of pokemons"
      class="initial-pokemons__img"
    />
  </section>

  <section v-if="isLoading" class="is-loading">
    <img src="@/assets/gif/loading.gif" alt="Image of the page loading" class="is-loading__img" />
  </section>

  <!-- CUANDO SELECCIONAN UN POKEMON -->
  <section
    v-if="selectedPokemon && !isLoading"
    :style="{ backgroundColor: cardColor }"
    class="pokemon-card"
  >
    <header class="pokemon-card__header">
      <h1 class="pokemon-card__h1">{{ useCapitalize(selectedPokemon.forms[0].name) }}</h1>
      <ul>
        <li v-for="type in selectedPokemon.types" :key="type" class="pokemon-card__li">
          <p>{{ type.type.name }}</p>
        </li>
      </ul>
    </header>

    <main>
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
      <section>
        <p>{{ pokemonDescription.flavor_text }}</p>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.initial-pokemons {
  display: flex;
  align-items: center;
  &__img {
    width: 50em;
  }
}

.is-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__img {
    width: 20em;
    height: auto;
    margin-bottom: 1em;
  }
}

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

@media screen and (max-width: 768px) {
  .pokemon-card {
    width: 100%;
    padding: 0.5em;

    &__img {
      width: 10em;
      height: 10em;
    }
  }

  .is-loading__img {
    width: 10em;
  }

  .initial-pokemons__img {
    width: 100%;
  }
}
</style>
