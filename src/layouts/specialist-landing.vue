<template>
  <div>
    <NavBarSpecialist />
    <div class="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBarSpecialist from "@/shared/components/NavBarSpecialist.vue";
import Footer from "@/shared/components/FooterComponent.vue";
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
