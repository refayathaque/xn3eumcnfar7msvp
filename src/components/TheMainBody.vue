<template>
  <the-main-header></the-main-header>
  <the-collage></the-collage>
  <the-quotes-and-blogs v-if="showQuotesAndBlogs">
    <template #default>
      <p class="h2 mb-3">Our motivation:</p>
      <figure v-for="quote in quotes" :key="quote.author">
        <blockquote class="blockquote">
          <p>{{ quote.text }}</p>
        </blockquote>
        <figcaption class="blockquote-footer text-end text-primary">
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

<style></style>
