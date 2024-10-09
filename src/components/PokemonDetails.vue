<script setup>
import PokemonDataCard from './PokemonDetailsCard.vue'
</script>

<template>
  <section class="pokemon-details">
    <h1>Today's pokemon-details</h1>
    <section class="pokemon-details__section">
      <PokemonDataCard />
      <PokemonDataCard />
      <PokemonDataCard />
      <PokemonDataCard />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.pokemon-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
  }

  &__section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    width: 100%;
    max-width: 50em;
  }
}
</style>
