<template>
  <div class="container-fluid pb-4" id="background-image">
    <div class="container">
      <slot></slot>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="blogPost in blogPosts" :key="blogPost.id">
          <blog-post-snippet
            :title="blogPost.title"
            :date="blogPost.date"
            :author="blogPost.author"
            :keywords="blogPost.keywords"
          ></blog-post-snippet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Smush32 } from "@thi.ng/random";
import BlogPostSnippet from "./BlogPostSnippet.vue";
export default {
  components: { BlogPostSnippet },
  data() {
    return {
      blogPosts: [
        {
          title: "lorem ipsum",
          date: "lorem ipsum",
          author: "lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
        {
          title: "lorem ipsum",
          date: "lorem ipsum lorem ipsum lorem ipsum",
          author: "lorem ipsum lorem ipsum lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
        {
          title: "lorem ipsum",
          date: "lorem ipsum",
          author: "lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
        {
          title: "lorem ipsum",
          date: "lorem ipsum",
          author: "lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
        {
          title: "lorem ipsum",
          date: "lorem ipsum",
          author: "lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
        {
          title: "lorem ipsum",
          date: "lorem ipsum",
          author: "lorem ipsum",
          keywords: "lorem ipsum",
          id: new Smush32(0xdecafbad).buffer,
        },
      ],
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
