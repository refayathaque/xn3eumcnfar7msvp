<template>
  <div class="m-4" v-for="bodyObject in body" :key="bodyObject.id">
    <div class="fs-4" v-if="bodyObject.hasOwnProperty('heading')">
      {{ bodyObject.heading }}
    </div>
    <img
      class="img-fluid"
      :src="bodyObject.image"
      :alt="bodyObject.alt"
      v-else-if="bodyObject.hasOwnProperty('image')"
    />
    <div v-else v-html="bodyObject.text"></div>
  </div>
</template>

<script>
export default {
  props: ["body"],
};
</script>

<style></style>
