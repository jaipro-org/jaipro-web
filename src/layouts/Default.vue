<script>
import Nav from '@/components/global/Navbar';
import Footer from "@/components/global/Footer";

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
