<template>
  <div>
    <NavbarProject />
    <div class="wrapper">
      <slot />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script lang="ts">

import NavbarProject from '@/shared/components/NavBarProject.vue';

export default {
  components: {
    NavbarProject,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 0 !important;
}
</style>
