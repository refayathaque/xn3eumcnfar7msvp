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
    <div v-else-if="bodyObject.hasOwnProperty('sideBySideImages')">
      <div class="row">
        <div class="col-sm">
          <img
            class="img-fluid"
            :src="bodyObject.sideBySideImages[0].link"
            :alt="bodyObject.sideBySideImages[0].alt"
          />
        </div>
        <div class="col-sm">
          <img
            class="img-fluid"
            :src="bodyObject.sideBySideImages[1].link"
            :alt="bodyObject.sideBySideImages[1].alt"
          />
        </div>
      </div>
    </div>
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
