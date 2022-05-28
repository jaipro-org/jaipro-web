<template>
  <b-form @submit.prevent="login">
    <b-form-group label="Correo electrónico" label-for="txtEmail_l">
      <b-form-input
        placeholder="Correo electrónico"
        type="email"
        id="txtEmail_l"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Contraseña" label-for="txtPassword_l">
      <b-form-input
        type="password"
        id="txtPassword_l"
        required
      ></b-form-input>
    </b-form-group>
    <div class="text-right mb-4">
      <b-link @click="forgotPassword()">Olvide mi contraseña</b-link>
    </div>
    <b-button block variant="primary" type="submit">Ingresar</b-button>
    <p class="text-right mt-4">
      No tienes Cuenta?
      <b-link @click="registerUser()">Regístrate</b-link>
    </p>
  </b-form>

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
    methods: {
        login(){
            console.log('login here!');
        },
        forgotPassword(){
            console.log('forgotPassword here!');
        },
        registerUser(){
            console.log('registerUser here!');
        }
    }
};
</script>

<style>
</style>