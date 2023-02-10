<template>
  <div>
    <div class="register-container">
      <div class="register-user-container">
        <register-title title="Registro de cliente"></register-title>
        <div class="register-user-form-section">
          <b-form @submit.prevent="registerClient">
            <b-form-group label="Nombres" label-for="txtName_r">
              <b-form-input
                v-model="firstname"
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
            <b-form-group
              label="Confirmar contraseña"
              label-for="txtConfirmPassword_r"
            >
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
            <b-button class="mt-5 w-100" variant="primary" type="submit">
              Registrarse
            </b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"

// COMPONENTS
import RegisterTitle from "./components/RegisterTitle.vue"

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
  name: "RegisterComponent",
  components: {
    RegisterTitle,
  },
  setup() {
    const router = useRouter()

    const firstname = ref("")
    const lastname = ref("")
    const password = ref("")
    const confirmPassword = ref("")
    const email = ref("")

    const registerClient = async () => {
      try {
        if (password.value != confirmPassword.value) {
          alertError("Las contraseñas no coinciden")
          return
        }
        alertLoading()
        await authServices.createClient({
          name: firstname.value,
          lastName: lastname.value,
          password: password.value,
          email: email.value,
        })

        alertSuccessfully("Cliente registrado exitosamente!!")
        setTimeout(function () {
          router.push({ name: "login" })
          closeAlert()
        }, 2500)
      } catch (error) {
        console.log(error)
        alertError()
      }
    }

    return {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      registerClient,
    }
  },
})
</script>

<style scoped>
.register-container {
  padding: 20px 15px 40px 15px;
}

.register-user-title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
}

.register-user-title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 45px;
  line-height: 1;
  color: #303669;
  margin-bottom: 0;
}

.register-user-form-section {
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
}
</style>
