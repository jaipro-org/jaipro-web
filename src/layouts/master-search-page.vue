<template>
  <div>
    <Nav />
    <div class="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "@/shared/components/SearchPage.vue";
import Footer from "@/shared/components/FooterComponent.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>
