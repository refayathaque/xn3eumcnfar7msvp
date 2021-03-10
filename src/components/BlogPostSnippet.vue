<template>
  <div class="col">
    <div class="card border-primary mb-3">
      <img
        src="../images/christoffer-engstrom-wc9avd2RaN0-unsplash.jpg"
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <div class="card-header bg-transparent border-primary">{{ title }}</div>
        <div class="card-body text-primary">
          <h2 class="card-title">{{ keywords }}</h2>
          <p class="card-text">
            {{ author }}
          </p>
          <p class="card-text">
            {{ date }}
          </p>
        </div>
        <div class="card-footer bg-transparent border-primary">
          <a href="#" class="btn btn-primary">Read</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "author", "keywords"],
};
</script>

<style scoped>
img {
  opacity: 0.5;
}
</style>
