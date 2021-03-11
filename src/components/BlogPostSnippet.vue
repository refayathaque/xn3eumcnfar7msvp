<template>
  <div class="col">
    <div class="card border-primary mb-3">
      <img
        src="../images/christoffer-engstrom-wc9avd2RaN0-unsplash.jpg"
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <div class="card-header bg-transparent border-primary h4">
          {{ keywords }}
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ title }}</h2>
          <p class="card-text text-primary">
            {{ author }}
          </p>
          <p class="card-text">
            {{ date }}
          </p>
        </div>
        <div class="card-footer bg-transparent border-primary">
          <!-- <a href="#" class="btn btn-primary">Read</a> -->
          <router-link :to="computedLink">Read</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "author", "keywords", "id"],
  computed: {
    computedLink() {
      return `/blog/${this.id}`;
    },
  },
};
</script>

<style scoped>
img {
  opacity: 0.4;
}
</style>
