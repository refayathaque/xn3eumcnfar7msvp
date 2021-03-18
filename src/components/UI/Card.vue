<template>
  <div class="card bg-transparent mb-3" :class="borderColor">
    <div class="card-body" :class="textColor">
      <h5 class="card-title" v-html="heading"></h5>
      <div v-if="links" class="d-flex flex-column">
        <a
          v-for="(line, idx) in lines"
          :key="line"
          class="card-text"
          :class="{ 'mt-2': idx !== 0 }"
          :href="line.link"
          >{{ line.linkTitle }}</a
        >
      </div>
      <div v-else>
        <p
          v-for="(line, idx) in lines"
          :key="line"
          class="card-text"
          :class="{ 'mt-2': idx !== 0 }"
        >
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    lines: Array,
    color: String,
    links: Boolean,
  },
  computed: {
    borderColor() {
      return `border-${this.color}`;
    },
    textColor() {
      return `text-${this.color}`;
    },
  },
};
</script>

<style></style>
