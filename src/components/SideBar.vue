<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { ref, watch } from 'vue'
import { useCapitalize } from '../composables/useCapitalize'

const showSideBar = ref()

const pokemonStore = usePokemonStore()
const { filteredPokemon, selectedPokemon } = storeToRefs(pokemonStore) //Sacar variables
const { searchPokemon, showPokemon } = pokemonStore //Sacar funciones

const searchTerm = ref('')

watch(searchTerm, (newTerm) => {
  searchPokemon(newTerm) // Cada vez que cambia el input, hacemos la búsqueda
})

function thisPokemon(url) {
  showPokemon(url)
}
</script>

<template>
  <aside class="lateral-pokemon">
    <nav class="lateral-pokemon__nav">
      <button class="lateral-pokemon__button" @click="showSideBar = !showSideBar">
        Search for pokemons
      </button>

      <figure class="pokemon-card__icon">
        <figcaption class="pokemon-card__caption">
          <img class="lateral-pokemon__img" src="../assets/img/icono.png" alt="" />
        </figcaption>
      </figure>
    </nav>

    <!-- CUANDO NO BUSCO POKEMON -->
    <section
      v-if="!showSideBar"
      class="lateral-pokemon__section lateral-pokemon__section--inactive"
    >
      <section class="lateral-pokemon__section">
        <figure class="pokemon-card__icon">
          <span class="material-symbols-outlined"> </span>
          <figcaption class="pokemon-card__caption"></figcaption>
        </figure>
        <p class="lateral-pokemon__p"></p>
        <p class="lateral-pokemon__p"></p>
        <p class="lateral-pokemon__p"></p>
        <figure class="pokemon-card__icon">
          <span class="material-icons icon"></span>
          <figcaption class="pokemon-card__caption"></figcaption>
        </figure>
        <p class="lateral-pokemon__p"></p>
      </section>
    </section>

    <!-- CUANDO BUSCO POKEMON -->
    <section v-if="showSideBar" class="lateral-pokemon__section lateral-pokemon__section--active">
      <input
        v-model="searchTerm"
        class="lateral-pokemon__input"
        placeholder="Search Pokémon by name..."
      />

      <!-- Mostrar resultados de búsqueda -->
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
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: $background-color-secundary;
  background-image: $background-image-primary;
  text-align: center;
  color: $text-color-primary;
  height: 100vh;

  &__nav {
    display: flex;
    justify-content: space-between;
  }

  &__section {
    &--inactive {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    &--active {
      overflow-y: auto;
    }
  }

  &__button {
    background-color: $background-color-search;
    color: $text-color-primary;
    border: none;
    height: 3em;
    padding: 1em;
    border-radius: 1em;
    text-align: center;
    font-family: $font-family;
    font-size: 1.5em;
  }

  // Estilos para la barra lateral
  &__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: $background-color-secundary;
    transform: translateX(-250px);
    transition: transform 0.3s ease-in-out;

    &.show {
      transform: translateX(0);
    }
  }

  &__sidebar-content {
    padding: 1em;
  }

  &__input {
    width: 15em;
    height: 3em;
    font-size: 1em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 40px 0;
    text-align: center;
  }

  &__ul {
    list-style: none;
  }

  &__img {
    width: 5em;
    height: 5em;
  }
}
</style>
