<template>
  <div v-if="html" v-html="html"></div>
  <Loading v-else />
</template>

<script>
export default {
  name: "Gist",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      html: "",
    };
  },
  mounted() {
    window[`gist_callback_${this.id}`] = (gist) => {
      const link = document.createElement("link");
      link.href = gist.stylesheet;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      this.html = gist.div;
    };
    const script = document.createElement("script");
    script.src = `https://gist.github.com/refayathaque/${this.id}.json?callback=gist_callback_${this.id}`;
    document.head.appendChild(script);
  },
};
// https://github.com/search?o=desc&q=%3Cscript+src%3D%22https%3A%2F%2Fgist.github.com+extension%3A.vue&s=&type=Code
// https://github.com/gobase/docs/blob/fcdc0fc8a4826b6f3141ef2cd0ea63c3c336d98d/src/components/Gist.vue
</script>

<style>
.gist table td {
  border-bottom: none;
}
</style>
