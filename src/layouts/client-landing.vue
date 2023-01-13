<template>
  <div>
    <NavBarClient />
    <div class="client-landing__conten">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBarClient from "@/shared/components/NavBarClient.vue"
import Footer from "@/shared/components/FooterComponent.vue"

export default {
  components: {
    NavBarClient,
    Footer,
  },
}
</script>
<style lang="scss" scoped>
.client-landing__conten {
  min-height: calc(100vh - 152px);
}

@media (max-width: 597px) {
  .client-landing__conten {
    min-height: calc(100vh - 129px);
  }
}
</style>
