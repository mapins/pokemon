<script setup>
import SideBar from './SideBar.vue'
import PokemonCard from './PokemonCard.vue'
import PokemonFooter from './PokemonFooter.vue'
</script>

<template>
  <main class="layout">
    <section class="layout__page">
      <aside class="layout__sidebar">
        <SideBar />
      </aside>
      <section class="layout__content">
        <PokemonCard />
      </section>
    </section>
    <footer class="layout__footer">
      <PokemonFooter />
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__sidebar {
    width: 30em;
  }

  &__page {
    display: flex;
    flex-grow: 1;
    height: 80vh;
  }

  &__content {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  &__footer {
    width: 100%;
    padding: 1em 0;
    text-align: center;
    background-color: $background-color-secundary;
    position: sticky;
    bottom: 0;
    margin-top: auto;
  }
}

@media screen and (max-width: 768px) {
  .layout {
    flex-direction: column;

    &__page {
      flex-direction: column;
    }

    &__sidebar {
      width: 100%;
    }

    &__content {
      padding: 0.5em;
    }
  }
}
</style>
