<template>
  <div>
    <NavBarClient />
    <div class="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBarClient from "@/shared/components/NavBarClient.vue";
import Footer from "@/shared/components/FooterComponent.vue";

export default {
  components: {
    NavBarClient,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
