<script setup>
import { socialLinks } from '@/constants/socialLinks.ts'
</script>
<template>
  <article class="pokemon-footer">
    <section class="pokemon-footer__section">
      <p class="pokemon-footer__p">© 2024 Pokémon App. All rights reserved.</p>
    </section>
    <section class="footer-pokemon__section">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        class="pokemon-footer__a"
        :aria-label="link.label"
      >
        <img :src="link.img" alt="" class="pokemon-footer__img" />
      </a>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.pokemon-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  /*   color: $text-color-secundary;
 */
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

@media screen and (max-width: 48em) {
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
