<template>
  <div>
    <nav
      id="navbar"
      :class="setScrollClass ? 'header-scrolled' : ''"
      class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img src="@/assets/img/logo.png" width="155px" />
          </a>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- <div class="collapse navbar-collapse justify-content-around" id="navbarNav"> -->
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav menu-navbar-nav">
            <!-- <li class="nav-item">
							<a class="nav-link" href="#top">
								<p class="nav-link-menu">Inicio</p>
							</a>
						</li> -->
            <li class="nav-item show-item">
              <router-link to="/cliente/nuevo-proyecto" custom v-slot="{ navigate, href }">
                <a :href="href" @click="navigate" class="nav-link learn-more-btn btn-invert">Cotizar proyecto</a>
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
                        <h4>Como te afiliamos</h4>
                        <p>
                          Conoce nuestro proceso de afiliación
                        </p>
                      </a>
                    </div>
                    <div class="primary-menu__dropdown-item">
                      <router-link
                        :to="{name: 'search-specialist'}"
                        class="primary-menu__dropdown-item-link"
                      >
                        <h4>Buscar especialistas</h4>
                        <p>
                          Encuentra miles de especialistas interesados en tu proyecto
                        </p>
                      </router-link>
                    </div>
                  </div>
                </b-container>
              </div>
            </li>
            <li class="nav-item only-m">
              <router-link class="nav-link" :to="{name: 'search-specialist'}">
                <p class="nav-link-menu">Buscar especialistas</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/auth/registro-especialista" custom v-slot="{ navigate, href }">
                <a :href="href" @click="navigate" class="nav-link learn-more-btn">Soy especialista</a>
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
            <a
              class="nav-link"
              @click="$router.push({ name: 'register-type' })"
            >
              Regístrate
            </a>
            <a 
              class="nav-link" 
              @click="$router.push({ name: 'login' })"
            >
              Iniciar sesión
            </a>
          </div>
        </b-collapse>
      </div>
    </nav>
    <b-modal
      id="modal-login"
      centered
      :title="step_login == 0 ? `Iniciar Sesión` : `Recuperar contraseña`"
      hide-footer
    >
      <template v-if="step_login == 1">
        <b-form-group label="Correo electrónico">
          <b-form-input type="email" required></b-form-input>
        </b-form-group>
        <b-button block variant="primary" @click="step_login = 2"
          >Recuperar contraseña</b-button
        >
      </template>
      <template v-if="step_login == 2">
        <p class="mb-5">
          Un correo de recuperacion de password le ha sido...Revise su bandeja
          de correo
        </p>
        <b-button block variant="primary" @click="step_login = 0"
          >Aceptar</b-button
        >
      </template>
    </b-modal>
    <b-modal
      id="modal-register"
      ref="modal-register"
      centered
      title="Registrate como"
      hide-footer
    >
      <template v-if="step_register == 0">
        <b-button block variant="primary" @click="toRegisterClient"
          >Cliente</b-button
        >
        <hr />
        <b-button block variant="primary" @click="toRegisterSpecialist"
          >Especialista</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import GeneralModule from '@/store/modules/general'
export default {
  data() {
    return {
      step_login: 0,
      step_register: 0,
    };
  },
  methods: {
    showModalRegister() {
      this.$bvModal.hide("modal-login");
      this.$bvModal.show("modal-register");
    },
    toRegisterSpecialist() {
      this.$router.push({ name: "register-specialist" });
      this.$bvModal.hide("modal-register");
    },
    toRegisterClient() {
      this.$router.push({ name: "register-client" });
      this.$bvModal.hide("modal-register");
    },
    registerClient() {
      console.log("se registrara un cliente");
    },
    login() {
      console.log("se iniciar session");
    },
  },
  computed: {
    setScrollClass() {
      if (GeneralModule.getScroll > 20) return true;
      else return false;
    },
  },
};
</script>

<style></style>
