<template>
  <div class="mt-4" v-for="bodyObject in body" :key="bodyObject.id">
    <div class="fs-4" v-if="bodyObject.hasOwnProperty('heading')">
      {{ bodyObject.heading }}
    </div>
    <img
      v-else-if="bodyObject.hasOwnProperty('image')"
      class="img-fluid"
      :src="bodyObject.image"
      :alt="bodyObject.alt"
    />
    <div
      v-else-if="bodyObject.hasOwnProperty('text')"
      v-html="bodyObject.text"
    ></div>
    <div v-else>
      <gist :id="bodyObject.gistId"></gist>
    </div>
  </div>
</template>

<script>
import Gist from "./Gist.vue";
export default {
  components: { Gist },
  props: ["body"],
};
</script>

<style></style>
