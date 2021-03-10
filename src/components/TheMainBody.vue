<template>
  <the-main-header></the-main-header>
  <the-collage></the-collage>
  <the-quotes-and-blogs v-if="showQuotesAndBlogs">
    <template #default>
      <p>What motivates us:</p>
      <figure v-for="quote in quotes" :key="quote.author">
        <blockquote class="blockquote">
          <p>{{ quote.text }}</p>
        </blockquote>
        <figcaption class="blockquote-footer text-warning">
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
export default {
  components: { TheMainHeader, TheCollage, TheQuotesAndBlogs },
  data() {
    return {
      showQuotesAndBlogs: true,
      quotes: [
        { text: "hello", author: "john" },
        { text: "hellooo", author: "paul" },
        { text: "hellooooo", author: "harry" },
        { text: "helloooooo", author: "jeff" },
        { text: "helloooooooo", author: "sherry" },
        { text: "hellooooooooo", author: "carl" },
      ],
    };
  },
};
</script>

<style></style>
