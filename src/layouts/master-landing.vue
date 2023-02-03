<template>
  <div>
    <NavBar />
    <div className="wrapper pt-0">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/shared/components/NavBar.vue"
import Footer from "@/shared/components/FooterComponent.vue"
import { defineComponent } from "vue"

export default defineComponent({
  name: "MasterLandingComponent",
  components: {
    NavBar,
    Footer,
  },
})
</script>
