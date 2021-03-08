<template>
  <div>
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile">
      <div class="navbar-container container">
				<!-- LOGO -->
				<div class="navbar-brand">
				<a class="navbar-brand-logo" href="#">
					<img src="@/assets/img/logo.png" width="155px">
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
							<a class="nav-link learn-more-btn btn-invert" href="#">Cotizar</a>
						</li>
						
						<li class="nav-item hide-item">
							<a class="nav-link" href="#services" v-smooth-scroll>
								<p class="nav-link-menu">Servicios</p>
							</a>
						</li>
						<li class="nav-item hide-item primary-menu__list-item">
							<a class="nav-link" href="#afiliacion" v-smooth-scroll>
								<p class="nav-link-menu">especialistas</p>
							</a>
              <div class="pin-container">
                <span class="pin-icon" />
              </div>
              <div class="primary-menu__dropdown">
                <b-container>
                  <div class="primary-menu__dropdown-item-wrapper">
                    <div class="primary-menu__dropdown-item">
                      <a href="#afiliacion" v-smooth-scroll class="primary-menu__dropdown-item-link">
                        <h4>Como afiliamos a los especialistas</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                      </a>
                    </div>
                    <div class="primary-menu__dropdown-item">
                      <router-link to="/search-page" class="primary-menu__dropdown-item-link">
                        <h4>Buscar profesionales</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                      </router-link>
                    </div>
                  </div>
                </b-container>
              </div>
						</li>
            <li class="nav-item only-m">
							<router-link class="nav-link" to="/search-page">
								<p class="nav-link-menu">Buscar profesionales</p>
							</router-link>
						</li>
						<li class="nav-item">
							<a class="nav-link learn-more-btn" href="#">Hazte especialista</a>
						</li>
					</ul>
					<ul class="navbar-nav drop">
						<li class="nav-item">
							<b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" no-caret>
								<template #button-content>
									<i class="fa fa-bars"></i>
								</template>
								<b-dropdown-item v-b-modal.modal-register @click="step_register=0">Registrate</b-dropdown-item>
								<b-dropdown-item v-b-modal.modal-login @click="step_login=0">Iniciar Sesión</b-dropdown-item>
							</b-dropdown>
						</li>
					</ul>
          <div class="sub_option">
            <hr />
            <a class="nav-link" v-b-modal.modal-register @click="step_register=0">Registrate</a>
						<a class="nav-link" v-b-modal.modal-login @click="step_login=0">Iniciar Sesión</a>
          </div>
				</b-collapse>
			</div>
    </nav>
    <b-modal id="modal-login" centered :title="step_login==0?`Iniciar Sesión`:`Recuperar contraseña`" hide-footer>
      <template v-if="step_login==0">
        <b-form-group
          label="Usuario o email"
        >
          <b-form-input placeholder="Usuario o email"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
        >
          <b-form-input placeholder="*********" type="password"></b-form-input>
        </b-form-group>
        <div class="text-right mb-4">
          <b-link @click="step_login = 1">Olvide mi contraseña</b-link>
        </div>
        <b-button block variant="primary">Iniciar Sesión</b-button>
        <hr />
        <b-button block  variant="primary" class="btn-facebook">Continuar con Facebook<span class="btn-icon-right"><i class="fa fa-facebook"></i></span></b-button>
        <b-button block  variant="primary" class="btn-google">Continuar con Google<span class="btn-icon-right"><i class="fa fa-google"></i></span></b-button>
        <b-button block  variant="primary" class="btn-google-plus">Continuar con Microsoft<span class="btn-icon-right"><i class="fa fa-windows"></i></span></b-button>
        <p class="text-right mt-4">No tienes Cuenta? <b-link @click="showModalRegister()">Registrate</b-link></p>
      </template>
      <template v-if="step_login==1">
        <b-form-group
          label="Usuario o email"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-button block variant="primary" @click="step_login = 2">Recuperar contraseña</b-button>
      </template>
      <template v-if="step_login==2">
        <p class="mb-5">Un correo de recuperacion de password le ha sido...Revise su bandeja de correo</p>
        <b-button block variant="primary" @click="step_login = 0">Aceptar</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-register" centered title="Iniciar Registro" hide-footer>
      <template v-if="step_register==0">
        <b-button block variant="primary" @click="step_register=1">Como Cliente</b-button>
        <hr />
        <b-button block variant="primary">Como especialista</b-button>
      </template>
      <template v-if="step_register==1">
        <b-form-group
          label="Nombre"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Apellido"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Correo"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
        >
          <b-form-input type="password"></b-form-input>
        </b-form-group>
        <b-button class="mt-5" block variant="primary">Registrarse</b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step_login: 0,
      step_register:0
    }
  },
  mounted() {
    this.navChangeColor();
  },
  methods: {
    navChangeColor() {
      let navbar = document.querySelector('#navbar');
      window.onscroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('header-scrolled');
        } else {
          navbar.classList.remove('header-scrolled');
        }
      };
    },
    showModalRegister() {
      this.$bvModal.hide('modal-login');
      this.$bvModal.show('modal-register');
    }

  }
}

</script>