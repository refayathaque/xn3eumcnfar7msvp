<template>
  <the-nav></the-nav>
  <the-main-body></the-main-body>
  <the-footer v-if="showFooter"></the-footer>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheMainBody from "./components/TheMainBody.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheNav, TheMainBody, TheFooter },
  data() {
    return {
      showFooter: true
    }
  }
};
</script>

<style></style>
