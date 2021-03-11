<template>
  BlogPost.vue
  {{ id }}
  {{ body[2] }}
</template>

<script>
import blogPosts from "../data/blogPostMeta";
export default {
  props: ["id"],
  data() {
    return {
      title: null,
      date: null,
      author: null,
      keywords: null,
      body: null,
    };
  },
  created() {
    const selectedBlogPost = blogPosts.find(
      (blogPost) => blogPost.id === parseInt(this.id)
    );
    this.title = selectedBlogPost.title;
    this.date = selectedBlogPost.date;
    this.author = selectedBlogPost.author;
    this.keywords = selectedBlogPost.keywords;
    this.body = selectedBlogPost.body;
    console.log(this.body)
  },
};
</script>

<style></style>
