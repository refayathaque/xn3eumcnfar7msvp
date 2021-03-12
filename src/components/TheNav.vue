<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <p class="navbar-brand">α84g</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div
              class="nav-link"
              :class="{ disabled: isHomePage }"
              aria-current="page"
            >
              <router-link to="/home">Home</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isHomePage() {
      if (this.$route.path === "/home") {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #6c757d;
  /* bootstrap `text-muted` color */
}
a.router-link-active {
  color: #198754;
  /* bootstrap `navbar-brand` color */
}
</style>
