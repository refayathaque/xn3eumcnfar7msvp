<template>
  <div class="container-fluid pb-4" id="background-image">
    <div class="container">
      <slot></slot>
      <p class="h2 mt-5 mb-3 text-light">Our research:</p>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="blogPost in blogPosts" :key="blogPost.id">
          <blog-post-snippet
            :title="blogPost.title"
            :date="blogPost.date"
            :author="blogPost.author"
            :keywords="blogPost.keywords"
            :id="blogPost.id"
          ></blog-post-snippet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostSnippet from "./BlogPostSnippet.vue";
import blogPosts from "../data/blogPostMeta";
export default {
  components: { BlogPostSnippet },
  data() {
    return {
      blogPosts,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap");
#background-image {
  background-image: linear-gradient(
      to bottom,
      rgb(248, 249, 250, 1),
      rgba(13, 110, 253, 0),
      rgb(248, 249, 250, 1)
    ),
    url("../images/christoffer-engstrom-wc9avd2RaN0-unsplash.jpg");
  /* font-family: "Shippori Mincho B1", serif; */
}
</style>
