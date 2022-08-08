<template>
  <div>
    <nav
      id="navbar"
      :class="showScrollClass ? 'header-scrolled' : ''"
      class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container d-none d-sm-flex">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" alt="jaipro-logo" />
          </a>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- <div class="collapse navbar-collapse justify-content-around" id="navbarNav"> -->
        <ul class="navbar-nav menu-navbar-nav">
          <li class="nav-item show-item">
            <router-link
              to="/cliente/nuevo-proyecto"
              custom
              v-slot="{ navigate, href }"
            >
              <a
                :href="href"
                @click="navigate"
                class="nav-link learn-more-btn btn-invert"
                >Cotizar proyecto</a
              >
            </router-link>
          </li>

          <li class="nav-item hide-item">
            <a class="nav-link" href="#services" v-smooth-scroll>
              <p class="nav-link-menu">Servicios</p>
            </a>
          </li>
          <li class="nav-item hide-item primary-menu__list-item">
            <a class="nav-link" href="#afiliacion" v-smooth-scroll>
              <p class="nav-link-menu">Especialistas</p>
            </a>
            <div class="pin-container">
              <span class="pin-icon" />
            </div>
            <div class="primary-menu__dropdown">
              <b-container>
                <div class="primary-menu__dropdown-item-wrapper">
                  <div class="primary-menu__dropdown-item">
                    <a
                      href="#afiliacion"
                      v-smooth-scroll
                      class="primary-menu__dropdown-item-link"
                    >
                      <h4>Como afiliamos a los especialistas</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                    </a>
                  </div>
                  <div class="primary-menu__dropdown-item">
                    <router-link
                      :to="{ name: 'search-specialist' }"
                      class="primary-menu__dropdown-item-link"
                    >
                      <h4>Buscar especialistas</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                    </router-link>
                  </div>
                </div>
              </b-container>
            </div>
          </li>
          <li class="nav-item only-m">
            <router-link class="nav-link" :to="{ name: 'login' }">
              <p class="nav-link-menu">Buscar especialistas</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/auth/registro-especialista"
              custom
              v-slot="{ navigate, href }"
            >
              <a :href="href" @click="navigate" class="nav-link learn-more-btn"
                >Soy especialista</a
              >
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav drop">
          <li class="nav-item">
            <b-dropdown
              size="lg"
              right
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <i class="fa fa-bars"></i>
              </template>
              <b-dropdown-item @click="$router.push({ name: 'register-type' })">
                Regístrate
              </b-dropdown-item>
              <b-dropdown-item @click="$router.push({ name: 'login' })">
                Iniciar sesión
              </b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
        <div class="sub_option">
          <hr />
          <a class="nav-link" @click="$router.push({ name: 'register-type' })">
            Regístrate
          </a>
          <a class="nav-link" @click="$router.push({ name: 'login' })">
            Iniciar sesión
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
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
