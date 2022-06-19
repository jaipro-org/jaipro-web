<template>
  <div>
    <nav
      id="navbar"
      class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" href="#">
            <img src="@/assets/img/logo.png" width="155px" />
          </a>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- <div class="collapse navbar-collapse justify-content-around" id="navbarNav"> -->
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav menu-navbar-nav">
            <li class="nav-item only-m">
              <a class="nav-link" href="#">
                <p class="nav-link-menu">Buscar especialistas</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link learn-more-btn" href="#"
                >Cotizar Directamente</a
              >
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
                <b-dropdown-item
                  v-b-modal.modal-register
                  @click="step_register = 0"
                  >Registrate</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-login @click="step_login = 0"
                  >Iniciar Sesión</b-dropdown-item
                >
              </b-dropdown>
            </li>
          </ul>
          <div class="sub_option">
            <hr />
            <a
              class="nav-link"
              v-b-modal.modal-register
              @click="step_register = 0"
              >Registrate</a
            >
            <a class="nav-link" v-b-modal.modal-login @click="step_login = 0"
              >Iniciar Sesión</a
            >
          </div>
        </b-collapse>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step_login: 0,
      step_register: 0,
    };
  },
  mounted() {
    this.navChangeColor();
  },
  methods: {
    navChangeColor() {
      let navbar = document.querySelector("#navbar");
      window.onscroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add("header-scrolled");
        } else {
          navbar.classList.remove("header-scrolled");
        }
      };
    },
    showModalRegister() {
      this.$bvModal.hide("modal-login");
      this.$bvModal.show("modal-register");
    },
  },
};
</script>
