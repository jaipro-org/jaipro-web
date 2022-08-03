<template>
  <div>
    <NavBarBasic />
    <div className="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import NavBarBasic from "@/shared/components/NavBarBasic.vue";
import Footer from "@/shared/components/FooterComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
