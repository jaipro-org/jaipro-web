<template>
  <div class="navbar_clasic">
    <nav
      id="navbar"
      :class="showScrollClass ? 'header-scrolled' : ''"
      class="navbar navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" alt="jaipro-logo" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
              <a class="nav-link" href="#how-it-works" v-smooth-scroll>
                <p class="nav-link-menu">Cómo funciona</p>
              </a>
            </li>
            <li class="nav-item hide-item">
              <a class="nav-link" href="#services" v-smooth-scroll>
                <p class="nav-link-menu">Servicios</p>
              </a>
            </li>
            <li class="nav-item hide-item primary-menu__list-item">
              <a class="nav-link" href="#">
                <p class="nav-link-menu">Especialistas</p>
              </a>
              <div class="pin-container">
                <span class="pin-icon" />
              </div>
              <div class="primary-menu__dropdown">
                <b-container>
                  <div class="primary-menu__dropdown-item-wrapper">
                    <div class="primary-menu__dropdown-item">
                      <router-link
                        :to="{ name: 'affiliation-page' }"
                        class="primary-menu__dropdown-item-link"
                      >
                        <h4>Como te afiliamos</h4>
                        <p>Conoce nuestro proceso de afiliación</p>
                      </router-link>
                    </div>
                    <div class="primary-menu__dropdown-item">
                      <router-link
                        :to="{ name: 'search-specialist' }"
                        class="primary-menu__dropdown-item-link"
                      >
                        <h4>Buscar especialistas</h4>
                        <p>
                          Encuentra miles de especialistas interesados en tu
                          proyecto
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
                <a
                  :href="href"
                  @click="navigate"
                  class="nav-link learn-more-btn"
                  >Soy especialista</a
                >
              </router-link>
            </li>
          </ul>

          <ul class="navbar-nav drop dropdown-menu-end">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-no-caret btn-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-bars"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <b-dropdown-item
                  @click="$router.push({ name: 'register-type' })"
                >
                  Regístrate
                </b-dropdown-item>
                <b-dropdown-item @click="$router.push({ name: 'login' })">
                  Iniciar sesión
                </b-dropdown-item>
              </ul>
            </li>
          </ul>
          <div class="sub_option">
            <hr />
            <a
              class="nav-link"
              @click="$router.push({ name: 'register-type' })"
            >
              Regístrate
            </a>
            <a class="nav-link" @click="$router.push({ name: 'login' })">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import logo from "@/assets/svg/logo.svg"

export default defineComponent({
  data() {
    return {
      step_login: 0,
      step_register: 0,
      showScrollClass: ref(false),
      currentScrollPosY: ref(window.scrollY),
      logo,
    }
  },
  computed: {
    setScrollClass() {
      console.log("OK", window.scrollY)
      if (window.scrollY > 20) return true
      else return false
    },
  },
  watch: {
    currentScrollPosY(val, oldVal) {
      if (val > 20) {
        this.showScrollClass = true
      } else {
        this.showScrollClass = false
      }
    },
  },
  created() {
    setInterval(() => {
      this.currentScrollPosY = window.scrollY
    }, 100)
  },
})
</script>

<style>
.navbar_clasic {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 900;
}
</style>
