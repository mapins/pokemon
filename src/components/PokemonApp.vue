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
.layout {
  @include flex(column);
  min-height: 100vh;
  &__sidebar {
    width: 25em;
  }

  &__page {
    display: flex;
    width: 100%;
  }

  &__content {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: $background-color;
    background-image: $background-image-primary;
  }

  &__footer {
    width: 100%;
    padding: 1em 0;
    text-align: center;
    background-color: $background-color-secundary;
    background-image: $background-image-primary;
    margin-top: auto;
  }
}

@media screen and (max-width: 48em) {
  .layout {
    flex-direction: column;

    &__page {
      flex-direction: column;
      flex-grow: 1;
    }

    &__sidebar {
      width: 100%;
    }

    &__content {
      padding: 0.5em;
    }

    &__footer {
      margin-top: auto;
    }
  }
}
</style>
