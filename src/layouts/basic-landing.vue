<template>
  <div>
    <NavbarProject />
    <div class="basic-landing__content">
      <slot></slot>
    </div>
    <BasicFooter />
  </div>
</template>

<script lang="ts">
import NavbarProject from "@/shared/components/NavBarProject.vue"
import BasicFooter from "@/shared/components/BasicFooter.vue"

export default {
  components: {
    NavbarProject,
    BasicFooter,
  },
}
</script>
<style lang="scss" scoped>
.basic-landing__content {
  min-height: calc(100vh - 152px);
}

@media (max-width: 597px) {
  .basic-landing__content {
    min-height: calc(100vh - 129px);
  }
}
</style>
