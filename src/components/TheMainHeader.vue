<template>
  <jumbotron
    :heading="heading"
    :primaryText="primaryText"
    :secondaryText="secondaryText"
  ></jumbotron>
</template>

<script>
import Jumbotron from "./Jumbotron.vue";
export default {
  components: { Jumbotron },
  data() {
    return {
      // heading: "Refayat Haque",
      // primaryText: "hello",
      // secondaryText: "world",
    };
  },
};
</script>

<style></style>
