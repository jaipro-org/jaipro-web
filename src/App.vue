<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
const default_layout = "landing";

export default {
  name: "App",

  computed: {
    layout() {
      return (this.$route.meta.layout || "master-" + default_layout);
    }
  },
};
</script>
<style lang="scss">
@import "assets/sass/styles";
</style>