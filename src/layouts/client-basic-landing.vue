<template>
  <div>
    <NavBarBasic />
    <div className="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBarBasic from "@/shared/components/NavBarBasic.vue";
import Footer from "@/shared/components/FooterComponent.vue";
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
