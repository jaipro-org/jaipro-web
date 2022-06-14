<template>
  <div>
    <div class="access-container">
      <div class="login-container">
        <div class="login-title-section">
          <h2 class="login-title">Iniciar sesión</h2>
        </div>
        <div class="login-form-section">
          <b-form @submit.prevent="login">
            <b-form-group label="Correo electrónico" label-for="txtEmail_l">
              <b-form-input
                v-model="email"
                placeholder="Ingrese su correo"
                type="email"
                id="txtEmail_l"
                class="rounded-pill"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_l">
              <b-form-input
                v-model="password"
                placeholder="Ingrese su contraseña"
                type="password"
                id="txtPassword_l"
                class="rounded-pill"
                required
              ></b-form-input>
            </b-form-group>
            <div class="text-right mb-4">
              <b-link @click="forgotPassword()">Olvide mi contraseña</b-link>
            </div>
            <b-button block variant="primary" type="submit">Ingresar</b-button>
            <p class="text-right mt-4">
              ¿No tienes una cuenta?
              <b-link 
                @click="$router.push({ name: 'register-type' })"
              >
                Regístrate
              </b-link>
            </p>
          </b-form>
        </div>
      </div>
    </div>
  </div>

  <!-- <hr /> -->
  <!-- <b-button block variant="primary" class="btn-facebook"
          >Continuar con Facebook<span class="btn-icon-right"
            ><i class="fa fa-facebook"></i></span
        ></b-button>
        <b-button block variant="primary" class="btn-google"
          >Continuar con Google<span class="btn-icon-right"
            ><i class="fa fa-google"></i></span
        ></b-button>
        <b-button block variant="primary" class="btn-google-plus"
          >Continuar con Microsoft<span class="btn-icon-right"
            ><i class="fa fa-windows"></i></span
        ></b-button> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  email = "";
  password = "";

  login() {
    console.log("login here!");
  }

  forgotPassword() {
    console.log("forgotPassword here!");
  }

  registerUser() {
    console.log("registerUser here!");
  }
}
</script>

<style scoped>

.access-container {
  padding: 40px 15px 25px 15px;
  min-height: calc(100vh - 85px);
}

.login-title-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;
}

.login-title {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 45px;
    line-height: 1;
    color: #303669;
    margin-bottom: 0;
}

.login-form-section {
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
}
</style>