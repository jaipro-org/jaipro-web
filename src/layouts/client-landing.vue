<template>
  <div>
    <NavBarClient />
    <div class="client-landing__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBarClient from "@/shared/components/NavBarClient.vue"
import Footer from "@/shared/components/FooterComponent.vue"
</script>
<style lang="scss" scoped>
.client-landing__content {
  min-height: calc(100vh - 151px);
}
</style>
