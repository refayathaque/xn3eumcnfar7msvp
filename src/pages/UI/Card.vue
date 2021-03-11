<template>
  <div class="card border-primary bg-transparent mb-3">
    <div class="card-body text-primary">
      <h5 class="card-title" v-html="heading"></h5>
      <p class="card-text">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "body"],
};
</script>

<style></style>
