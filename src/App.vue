<template>
  <the-nav></the-nav>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer v-if="showFooter"></the-footer>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheNav, TheFooter },
  data() {
    return {
      showFooter: true,
    };
  },
};
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
}
.route-enter-active {
  transition: opacity 0.3s ease-out;
}
.route-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
