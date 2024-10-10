<script setup>
import SideBar from './SideBar.vue'
import PokemonCard from './PokemonCard.vue'
import PokemonCards from './PokemonCards.vue'
</script>

<template>
  <main class="layout">
    <aside class="layout__sidebar">
      <SideBar />
    </aside>
    <section class="layout__content">
      <PokemonCards />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
}

.layout__sidebar {
  width: 30em;
}

.layout__content {
  flex-grow: 1; /* Ocupa el resto del espacio disponible, de lo que sobra de 15 em */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 1em;
}

.layout__content > * {
  /* Le meto a los elementos hijos Forecast y highlist para que se separen */
  margin-bottom: 1em;
}
</style>
