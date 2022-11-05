<template>
  <div>
    <nav
      id="navbar"
      :class="showScrollClass ? 'header-scrolled' : ''"
      class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" alt="jaipro-logo" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { store } from "@/store/modules/general";
import { defineComponent, ref } from "vue";
import logo from "@/assets/svg/logo.svg";

export default defineComponent({
  data() {
    return {
      step_login: 0,
      step_register: 0,
      showScrollClass: ref(false),
      currentScrollPosY: ref(window.scrollY),
      logo
    };
  },
  // computed: {
  //   setScrollClass() {
  //     if (store.state.scrollY > 20) return true;
  //     else return false;
  //   },
  // },
  computed: {
    setScrollClass() {
      console.log("OK", window.scrollY);
      if (window.scrollY > 20) return true;
      else return false;
    },
  },
  watch: {
    currentScrollPosY(val, oldVal) {
      if (val > 20) {
        this.showScrollClass = true;
      } else {
        this.showScrollClass = false;
      }
    },
  },
  created() {
    setInterval(() => {
      this.currentScrollPosY = window.scrollY;
    }, 100);
  },
});
</script>

<style></style>