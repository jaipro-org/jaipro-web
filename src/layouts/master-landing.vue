<script>
import Nav from '@/components/global/navbar/index';
import Footer from "@/components/global/footer/index";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<template>
  <div>
    <Nav />
    <div class="wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</template>
