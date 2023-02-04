<template>
  <div class="nav__container">
    <b-navbar
      id="navbar-client"
      :class="setScrollClass ? 'header-client-scrolled' : ''"
      toggleable="lg"
      type="dark"
      class="py-1 bg-white"
    >
      <b-container fluid="lg">
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" />
          </a>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
          <!-- Right aligned nav items -->
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
                <b-dropdown-item
                  @click="$router.push({ name: 'register-type' })"
                >
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
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/svg/logo.svg";

export default defineComponent({
  data() {
    return {
      step_login: 0,
      step_register: 0,
      logo
    };
  },
  computed: {
    setScrollClass() {
      if (window.scrollY > 20) return true;
      else return false;
    },
  },
});
</script>

<style lang="scss">
.nav__container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 4;

  .header-client-scrolled {
    width: 100%;
    height: 75px;
    background-color: #fff !important;
    box-shadow: 0 4px 6px 0 rgb(12 0 46 / 5%);
  }

  .navUser__box {
    .navUser__image {
      width: 60px;
      height: 60px;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }

    h1 {
      font-size: 1.2rem;
    }

    .dropdown__name {
      font-size: 0.95rem;
    }
  }

  .navItem {
    cursor: pointer;
    span {
      font-size: 0.9rem;
    }
  }

  .navItem:hover {
    color: #3a88ec;
  }

  .user__image {
    height: 40px;
    width: 40px;
    display: inline-flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
}

.collapse.show {
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.11);
}
</style>
