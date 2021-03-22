<template>
  <jumbotron
    :heading="heading"
    :primaryTextA="primaryTextA"
    :primaryTextB="primaryTextB"
    :primaryTextC="primaryTextC"
    :secondaryTextA="secondaryTextA"
    :secondaryTextB="secondaryTextB"
  ></jumbotron>
</template>

<script>
import Jumbotron from "./Jumbotron.vue";
export default {
  components: { Jumbotron },
  data() {
    return {
      heading: "αutom84good",
      primaryTextA: "automate (verb): to use machines and computers instead of people to do a job or task",
      primaryTextB: "'84: Methyl isocyanate leak at a pesticide plant in Bhopal, India, kills around 10,000",
      primaryTextC: "good (noun): advancement of prosperity or well-being",
      secondaryTextA: "Goal: Providing consultancy and research to empower changemakers in maximizing their impact and potential",
      secondaryTextB: "Mission: Leveraging technology to fight climate change, with a focus on renewable energy and sustainability",
    };
  },
};
</script>

<style></style>
