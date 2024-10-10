import { defineStore } from "pinia";
import { ref, computed } from "vue";

const typeColors = {
    bug: "#A8B400",
    dark: "#4F3C3C",
    dragon: "#776EED",
    electric: "#F4D023",
    fairy: "#FFA4F0",
    fighting: "#D03A32",
    fire: "#FBA54C",
    flying: "#A891E1",
    ghost: "#4E4E89",
    grass: "#7CBB49",
    ground: "#D2B74C",
    ice: "#A5E4E0",
    normal: "#A6A8A4",
    poison: "#A84DA6",
    psychic: "#F25178",
    rock: "#C7B78C",
    steel: "#B8B8D0",
    water: "#4C9CDB",
};

export const usePokemonStore = defineStore('pokemon', () => {
    const filteredPokemon = ref([])
    const selectedPokemon = ref()
    const typePokemon = ref()
    const cardColor = ref(' ')
    const defaultPokemon = ref()
    const allPokemons = ref([]);


    async function defaultPokemons() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=8`);
            const data = await response.json();

            defaultPokemon.value = data.results

            for (const pokemon of defaultPokemon.value) {
                await showPokemon(pokemon.url);
            }

        } catch (error) {
            console.log(error.message);
        }
    }


    async function searchPokemon(searchItem) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            const data = await response.json();

            filteredPokemon.value = data.results.filter(pokemon =>
                pokemon.name.toLowerCase().startsWith(searchItem.toLowerCase())
            );


        } catch (error) {
            console.log(error.message);
        }
    }

    async function showPokemon(url) {
        const response = await fetch(url);
        const data = await response.json();

        // Crea una copia del objeto Pokémon
        const pokemonData = { ...data };

        typePokemon.value = data.types.map(type => type.type.name);
        cardColor.value = typeColors[typePokemon.value[0]] || '#ffffff';

        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        const descriptionEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
        );

        // Añadir la descripción al objeto Pokémon
        pokemonData.description = descriptionEntry ? descriptionEntry.flavor_text : "Descripción no disponible.";

        // Agregar el Pokémon a allPokemons solo si no está ya presente
        if (!allPokemons.value.some(p => p.pokemon.id === pokemonData.id)) {
            allPokemons.value.push({
                pokemon: pokemonData,
                type: typePokemon.value,
                cardColor: cardColor.value,
            });
        }

    }



    return { filteredPokemon, searchPokemon, showPokemon, selectedPokemon, cardColor, defaultPokemon, defaultPokemons, allPokemons };
});
