<template>
  <div>
    <NavBar />
    <div class="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "@/shared/components/NavBar.vue";
import Footer from "@/shared/components/FooterComponent.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
