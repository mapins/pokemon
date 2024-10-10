<script setup>
import SideBar from './SideBar.vue'
import PokemonCard from './PokemonCard.vue'
</script>

<template>
  <main class="layout">
    <aside class="layout__sidebar">
      <SideBar />
    </aside>
    <section class="layout__content">
      <PokemonCard />
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
  padding: 1em;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.layout__content > * {
  /* Le meto a los elementos hijos Forecast y highlist para que se separen */
  margin-bottom: 1em;
}
</style>
