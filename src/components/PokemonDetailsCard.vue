<script setup></script>

<template>
  <article class="pokemon-detail">
    <header class="pokemon-detail__header">
      <h1 class="pokemon-detail__h1">Wind status</h1>
    </header>

    <main class="pokemon-detail__main">
      <p class="pokemon-detail__p">7 mph</p>
    </main>
    <section class="pokemon-detail__section">
      <figure class="weather-card__icon">
        <span class="material-icons icon">cloud</span>
        <figcaption class="weather-card__caption"></figcaption>
      </figure>
      <p>WSW</p>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.pokemon-detail {
  background-color: $background-color-secundary;
  text-align: center;
  color: $text-color-primary;
  padding: 1em;
  width: 25em;

  &__section {
    display: flex;
    justify-content: center;
  }
}
</style>
