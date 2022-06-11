<template>
  <div>
    <NavBarClient />
    <div class="wrapper">
      <slot />
      <basic-footer/>
    </div>
  </div>
</template>

<script>
import NavBarClient from "@/shared/components/NavBarClient.vue";
import BasicFooter from "@/shared/components/BasicFooter.vue";

export default {
  components: {
    NavBarClient,
    BasicFooter,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
