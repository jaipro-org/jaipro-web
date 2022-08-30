<template>
  <div>
    <NavbarProject />
    <div class="wrapper">
      <slot />
      <BasicFooter />
    </div>
  </div>
</template>

<script lang="ts">
import NavbarProject from "@/shared/components/NavBarProject.vue";
import BasicFooter from "@/shared/components/BasicFooter.vue";

export default {
  components: {
    NavbarProject,
    BasicFooter
  },
};
</script>
<style lang="scss" scoped>
// .wrapper {
//   padding-top: 0 !important;
// }
</style>
