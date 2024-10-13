<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { ref, watch } from 'vue'
import { useCapitalize } from '../composables/useCapitalize'

const pokemonStore = usePokemonStore()
const { filteredPokemon } = storeToRefs(pokemonStore)
const { searchPokemon, showPokemon } = pokemonStore

const searchTerm = ref('')

watch(searchTerm, (newTerm) => {
  searchPokemon(newTerm)
})
</script>

<template>
  <article class="lateral-pokemon">
    <nav class="lateral-pokemon__nav">
      <button class="lateral-pokemon__button">
        <p class="lateral-pokemon__p">Search for pokemons</p>
      </button>

      <figure>
        <figcaption>
          <img
            class="lateral-pokemon__img"
            src="@/assets/img/pokedex.png"
            alt="Image of a pokeball"
          />
        </figcaption>
      </figure>
    </nav>

    <section
      class="lateral-pokemon__section"
      :class="{ 'lateral-pokemon__section--active': searchTerm.length > 0 }"
    >
      <input
        v-model="searchTerm"
        class="lateral-pokemon__input"
        placeholder="Search Pokémon by name..."
      />

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

      <p v-if="filteredPokemon.length === 0 && searchTerm.length > 0">No results found.</p>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.lateral-pokemon {
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: $background-color-secundary;
  background-image: $background-image-primary;
  height: 80vh;
  text-align: center;

  &__nav {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    background-color: $background-color-search;
    border: none;
    border-radius: 1em;
    max-height: fit-content;
  }

  &__p {
    font-size: 1em;
    margin: 1em;
    color: $text-color-primary;
  }

  &__img {
    width: 3.4em;
    height: 3.4em;
    &--pokedex {
      width: 15em;
      height: 15em;
    }
  }

  &__section {
    margin: 1em 0 0 0;
    &--active {
      overflow-y: scroll;
      max-height: 60vh;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 1em;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      padding: 1em;
    }

    &--pokedex {
      display: flex;
      justify-content: center;
      margin: 6em 0 0 0;
    }
  }

  &__input {
    width: 15em;
    height: 3em;
    font-size: 1em;
    padding: 0.5em;
    border: 0.2em solid $border-color-input;
    border-radius: 5em;
    margin: 1.5em 0;
    text-align: center;
  }
}

@media screen and (max-width: 48em) {
  .lateral-pokemon {
    padding: 0.5em;
    height: auto;

    &__button {
      width: 100%;
      padding: 0.5em;
    }

    &__img {
      width: 2.5em;
      height: 2.5em;
    }

    &__input {
      width: 100%;
      height: 2.5em;
    }
  }
}
</style>
