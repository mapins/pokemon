import { defineStore } from 'pinia'
import { ref } from 'vue'
import { typeColors } from "@/constants/typeColors.ts";

export const usePokemonStore = defineStore('pokemon', () => {
  const filteredPokemon = ref([])
  const selectedPokemon = ref()
  const typePokemon = ref()
  const cardColor = ref(' ')
  const isLoading = ref()
  const pokemonDescription = ref()

  async function searchPokemon(searchItem) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      const data = await response.json()

      filteredPokemon.value = data.results.filter((pokemon) =>
        pokemon.name.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .startsWith(searchItem.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
          ));


    } catch (error) {
      console.log(error.message)
    }
  }

  async function showPokemon(url) {
    isLoading.value = true
    try {
      const response = await fetch(url)
      const data = await response.json()

      selectedPokemon.value = data

      typePokemon.value = data.types.map((type) => type.type.name)
      cardColor.value = typeColors[typePokemon.value[0]]

      const speciesResponse = await fetch(data.species.url) //Aqui lo qu esta haciendo es que hago un fetch a la url de dentro de la especie del pokemon
      const speciesData = await speciesResponse.json()

      pokemonDescription.value = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === 'en'
      ) //Y ahora lo que hago es que guardo la descripcion que quiero que este en ingles
    } catch (error) {
      console.log(error.message)
    } finally {
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  }

  return {
    filteredPokemon,
    searchPokemon,
    showPokemon,
    selectedPokemon,
    cardColor,
    isLoading,
    pokemonDescription
  }
})
