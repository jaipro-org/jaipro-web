<template>
  <div>
    <div class="access-box">
      <b-row>
        <b-col>
          <b-form @submit.prevent="login">
            <b-form-group label="Correo electrónico" label-for="txtEmail_l">
              <b-form-input
                v-model="loginForm.email"
                placeholder="Ingrese su correo"
                type="email"
                id="txtEmail_l"
                class="rounded-pill"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_l">
              <b-form-input
                v-model="loginForm.password"
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
              <b-link @click="registerUser()">Regístrate</b-link>
            </p>
          </b-form>
        </b-col>
      </b-row>
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

<script>
export default {
  data(){
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log("login here!");
    },
    forgotPassword() {
      console.log("forgotPassword here!");
    },
    registerUser() {
      console.log("registerUser here!");
    },
  },
};
</script>

<style>
.box-common {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border: 1px solid #d6d6d6;
}

.access-box {
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
}

.access-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}
</style>