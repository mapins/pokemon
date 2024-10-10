<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { ref, watch } from 'vue'
import { useCapitalize } from '../composables/useCapitalize'

const showSideBar = ref()

const pokemonStore = usePokemonStore()
const { filteredPokemon } = storeToRefs(pokemonStore) //Sacar variables
const { searchPokemon, showPokemon } = pokemonStore //Sacar funciones

const searchTerm = ref('')

watch(searchTerm, (newTerm) => {
  searchPokemon(newTerm) // Cmbia el input y hacemos busqueda
})

/* function thisPokemon(url) {
  showPokemon(url)
} */
</script>

<template>
  <aside class="lateral-pokemon">
    <nav class="lateral-pokemon__nav">
      <button class="lateral-pokemon__button" @click="showSideBar = !showSideBar">
        <p class="lateral-pokemon__p">Search for pokemons</p>
      </button>

      <figure>
        <figcaption>
          <img class="lateral-pokemon__img" src="../assets/img/icono.png" alt="" />
        </figcaption>
      </figure>
    </nav>

    <!-- CUANDO BUSCO POKEMON -->
    <section v-if="showSideBar" class="lateral-pokemon__section lateral-pokemon__section--active">
      <input
        v-model="searchTerm"
        class="lateral-pokemon__input"
        placeholder="Search Pokémon by name..."
      />

      <!-- RESULTADO BUSQUEDA -->
      <ul v-if="filteredPokemon.length > 0 && searchTerm.length > 0" class="lateral-pokemon__ul">
        <li v-for="pokemon in filteredPokemon" :key="pokemon.name">
          <a href="#" @click="showPokemon(pokemon.url)">{{ useCapitalize(pokemon.name) }}</a>
        </li>
      </ul>

      <p v-if="filteredPokemon.length === 0 && searchTerm.length > 0">No results found.</p>
    </section>
  </aside>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.lateral-pokemon {
  padding: 1em;
  background-color: $background-color-secundary;
  background-image: $background-image-primary;
  height: 100vh;
  text-align: center;

  &__nav {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    background-color: $background-color-search;
    border: none;
    border-radius: 1em;
  }

  &__p {
    font-size: 1em;
    margin: 1em;
    color: $text-color-primary;
  }

  &__img {
    width: 5em;
    height: 5em;
  }

  &__section {
    &--active {
      overflow-y: auto;
    }
  }

  &__input {
    width: 15em;
    height: 3em;
    font-size: 1em;
    padding: 0.5em;
    border: 0.2em solid #ccc;
    border-radius: 5em;
    margin: 4em 0;
    text-align: center;
  }

  &__ul {
    list-style: none;
  }
}
</style>
