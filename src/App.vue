<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
import { mapActions } from "vuex";
const default_layout = "landing";

export default {
  name: "App",
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || "master-" + default_layout;
    },
  },

  created() {
    this.onScroll();
  },
  methods: {
    ...mapActions(["setScroll"]),
    onScroll() {
      window.onscroll = () => {
        const scrollY = window.scrollY;
        this.setScroll(scrollY);
      };
    },
  },
};
</script>
<style lang="scss">
@import "assets/sass/styles";
</style>
