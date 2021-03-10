<template>
  <jumbotron
    :heading="heading"
    :primaryTextA="primaryTextA"
    :primaryTextB="primaryTextB"
    :primaryTextC="primaryTextC"
    :secondaryText="secondaryText"
  ></jumbotron>
</template>

<script>
import Jumbotron from "./Jumbotron.vue";
export default {
  components: { Jumbotron },
  data() {
    return {
      heading: "autom84good",
      primaryTextA: "automate (verb): to use machines and computers instead of people to do a job or task",
      primaryTextB: "'84: cosmonaut Svetlana Savitskaya becomes the first woman to perform a space walk",
      primaryTextC: "good (noun): advancement of prosperity or well-being",
      secondaryText: "Leveraging technology to address climate change, sustainability, food security, and women's empowerment",
    };
  },
};
</script>

<style></style>
