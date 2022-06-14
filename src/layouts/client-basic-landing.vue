<template>
  <div>
    <NavBarBasic />
    <div class="wrapper">
      <slot />
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarBasic from "@/shared/components/NavBarBasic.vue";
import Footer from "@/shared/components/FooterComponent.vue";

export default {
  components: {
    NavBarBasic,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
