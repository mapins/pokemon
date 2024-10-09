import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore('pokemon', () => {
    const filteredPokemon = ref([])
    const selectedPokemon = ref()

    async function searchPokemon(searchItem) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await response.json();

            filteredPokemon.value = data.results.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchItem.toLowerCase())
            );

            console.log(filteredPokemon.value);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function showPokemon(url) {
        const response = await fetch(url);
        const data = await response.json();

        selectedPokemon.value = data

        console.log(selectedPokemon);

    }


    return { filteredPokemon, searchPokemon, showPokemon, selectedPokemon };
});
