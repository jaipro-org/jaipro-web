<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
const default_layout = "default";

export default {
  name: "App",

  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
};
</script>
<style lang="scss">
@import "assets/sass/styles";
</style>