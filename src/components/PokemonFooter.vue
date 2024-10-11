<script setup></script>

<template>
  <footer class="pokemon-footer">
    <section class="pokemon-foooter__section">
      <p class="pokemon-footer__p">© 2024 Pokémon App. All rights reserved.</p>
    </section>
    <section class="footer-pokemon__section">
      <a href="#" class="pokemon-footer__a" aria-label="Link to our Twitter">
        <img src="@/assets/img/twitter.png" alt="" class="pokemon-footer__img" />
      </a>
      <a href="#" class="pokemon-footer__a" aria-label="Link to our Facebook">
        <img src="@/assets/img/facebook.png" alt="" class="pokemon-footer__img" />
      </a>
      <a href="#" class="pokemon-footer__a" aria-label="Link to our Instagram">
        <img src="@/assets/img/instagram.png" alt="" class="pokemon-footer__img" />
      </a>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/scss/variables.scss';

.pokemon-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  color: $text-color-secundary;
  text-align: center;

  &__section {
    flex: 1;
  }

  &__p {
    font-size: 0.9em;
  }

  &__ {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  &__a {
    display: inline-block;
    text-decoration: none;
  }

  &__img {
    width: 2em;
    height: 2em;
  }
}

@media screen and (max-width: 768px) {
  .pokemon-footer {
    flex-direction: column;
    gap: 1em;
    &__img {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>
