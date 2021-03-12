<template>
  <the-main-header></the-main-header>
  <the-collage></the-collage>
  <the-quotes-and-blogs v-if="showQuotesAndBlogs">
    <template #default>
      <p class="h2 mb-3">Our motivation:</p>
      <figure v-for="(quote, idx) in quotes" :key="quote.author">
        <blockquote
          class="blockquote"
          :class="{ opaqueBackground: idx === 3 || idx === 2 }"
        >
          <p>{{ quote.text }}</p>
        </blockquote>
        <figcaption
          class="blockquote-footer text-end text-primary"
          :class="{ opaqueBackground: idx === 3 || idx === 2 }"
        >
          {{ quote.author }}
        </figcaption>
      </figure>
    </template>
  </the-quotes-and-blogs>
</template>

<script>
import TheCollage from "./TheCollage.vue";
import TheMainHeader from "./TheMainHeader.vue";
import TheQuotesAndBlogs from "./TheQuotesAndBlogs.vue";
import quotes from "../data/quotes";
export default {
  components: { TheMainHeader, TheCollage, TheQuotesAndBlogs },
  data() {
    return {
      showQuotesAndBlogs: true,
      quotes,
    };
  },
};
</script>

<style scoped>
.opaqueBackground {
  background: rgba(248, 249, 250, 0.4);
  /* color above is bootstrap "light" https://getbootstrap.com/docs/5.0/utilities/colors/#variables */
  /* https://www.geeksforgeeks.org/set-the-opacity-only-to-background-color-not-on-the-text-in-css/ */
}
</style>

:class="{ 'text-light bg-dark': idx / 3 === 1 }"
