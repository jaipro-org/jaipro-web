<template>
  <div>
    <b-form @submit.prevent="registerClient">
      <b-form-group label="Nombres" label-for="txtName_r">
        <b-form-input
            v-model="name"
            id="txtName_r"
            type="text"
            placeholder="Ingrese sus nombres"
            required
            class="rounded-pill"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Apellidos" label-for="txtLastname_r">
        <b-form-input
            v-model="lastname"
            type="text"
            placeholder="Ingrese sus apellidos"
            id="txtLastname_r" 
            required
            class="rounded-pill"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Correo electrónico" label-for="txtEmail_r">
        <b-form-input
            v-model="email"
            type="email"
            placeholder="Ingrese su correo"
            id="txtEmail_r"
            required
            class="rounded-pill"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña" label-for="txtPassword_r">
        <b-form-input
            v-model="password"
            type="password"
            placeholder="Ingrese su contraseña"
            id="txtPassword_r"
            required
            class="rounded-pill"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Confirmar contraseña" label-for="txtConfirmPassword_r">
        <b-form-input
            v-model="confirmPassword"
            type="password" 
            placeholder="Confirme su contraseña"
            id="txtConfirmPassword_r" 
            required
            class="rounded-pill"
        >
        </b-form-input>
      </b-form-group>
      <b-button class="mt-5" block variant="primary" type="submit">
        Registrarse
      </b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class RegisterClient extends Vue {
    name = '';
    lastname = '';
    email = '';
    password = '';
    confirmPassword = '';

    registerClient(){
        console.log('registerClient here!', this.name);
    }
}

</script>

<style>
</style>