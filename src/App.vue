<template>
  <the-nav></the-nav>
  <the-main-body></the-main-body>
  <the-footer></the-footer>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheMainBody from "./components/TheMainBody.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheNav, TheMainBody, TheFooter },
};
</script>

<style>
.component-border-green,
.component-border-blue,
.component-border-red {
  border: 1px solid;
}
.component-border-green {
  border: green;
}
.component-border-blue {
  border: blue;
}
.component-border-red {
  border: red;
}
/* https://html-css-js.com/css/generator/border-outline/ */
</style>
