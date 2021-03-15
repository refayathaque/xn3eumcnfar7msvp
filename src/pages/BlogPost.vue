<template>
  <div class="bg-light">
    <section class="py-5 ">
      <div class="row py-lg-4">
        <div class="col-lg-6 col-md-8 mx-auto">
          <p class="display-2 text-success">{{ title }}</p>
          <hr class="my-4" />
          <p class="lh-base text-success">
            {{ author }}
          </p>
          <p class="lh-base">
            {{ date }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <card heading="Potential problem" body="blah blah"></card>
          </div>
          <div class="col-sm">
            <card
              heading="Solution <abbr title='Too long; did not read'> (TL;DR)</abbr>"
              body="blah blah"
            ></card>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <card heading="Assumptions" body="blah blah"></card>
          </div>
          <div class="col-sm">
            <card heading="Related links" body="blah blah"></card>
          </div>
        </div>
        <blog-post-body :body="body"></blog-post-body>
      </div>
    </section>
  </div>
</template>

<script>
import blogPosts from "../data/blogPostMeta";
import BlogPostBody from "../components/UI/BlogPostBody.vue";
import Card from "../components/UI/Card.vue";
export default {
  components: { Card, BlogPostBody },
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
  },
};
</script>

<style></style>
