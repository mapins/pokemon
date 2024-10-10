import { defineStore } from "pinia";
import { ref } from "vue";

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

        selectedPokemon.value = data

        typePokemon.value = data.types.map(type => type.type.name)
        cardColor.value = typeColors[typePokemon.value[0]] || '#ffffff';

        console.log(cardColor.value);

        const speciesResponse = await fetch(data.species.url); //Aqui lo qu esta haciendo es que hago un fetch a la url de dentro de la especie del pokemon
        const speciesData = await speciesResponse.json();

        console.log(speciesData.value);
        console.log(selectedPokemon.value);

        const descriptionEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
        ); //Y ahora lo que hago es que guardo la descripcion que quiero que este en ingles

        selectedPokemon.value.description = descriptionEntry ? descriptionEntry.flavor_text : "Descripción no disponible."; //Y la guardo dentro de selectedPokemon.



    }


    return { filteredPokemon, searchPokemon, showPokemon, selectedPokemon, cardColor, defaultPokemon, defaultPokemons };
});
