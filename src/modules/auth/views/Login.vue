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
            <div class="text-end mb-4">
              <b-link @click="forgotPassword">Olvide mi contraseña</b-link>
            </div>
            <b-button class="w-100" variant="primary" type="submit"
              >Ingresar</b-button
            >
            <p class="text-end mt-4">
              ¿No tienes una cuenta?
              <b-link @click="$router.push({ name: 'register-type' })">
                Regístrate
              </b-link>
            </p>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"

// FUNCTIONS
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "../../../utils/SweetAlert"

// SERVICES
import { AuthServices } from "@/services/api/authServices"
const authServices = new AuthServices()

export default defineComponent({
  name: "LoginComponent",
  setup() {
    const email = ref("")
    const password = ref("")
    const router = useRouter()

    const login = async () => {
      try {
        alertLoading()
        await authServices.login({
          email: email.value,
          password: password.value,
        })

        alertSuccessfully("Usuario inicio sesión exitosamente!!")
        setTimeout(function () {
          router.push({ name: "home" })
          closeAlert()
        }, 1500)
      } catch (error) {
        console.log(error)
        alertError()
      }
    }

    const forgotPassword = () => {
      router.push({ name: "forgot-password" })
    }

    const registerUser = () => {
      console.log("registerUser here!")
    }

    return {
      email,
      password,
      login,
      forgotPassword,
      registerUser,
    }
  },
})
</script>

<style scoped>
.access-container {
  padding: 40px 15px 25px 15px;
  /* min-height: calc(100vh - 85px); */
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
