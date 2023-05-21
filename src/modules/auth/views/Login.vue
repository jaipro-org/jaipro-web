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
                v-model="email.value.value"
                placeholder="Ingrese su correo"
                id="txtEmail_l"
                class="rounded-pill"
                :state="
                  validateState(email.value.value, email.errorMessage.value)
                "
              ></b-form-input>
              <b-form-invalid-feedback :state="email.errorMessage.value">
                {{ email.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_l">
              <b-form-input
                v-model="password.value.value"
                placeholder="Ingrese su contraseña"
                type="password"
                id="txtPassword_l"
                class="rounded-pill"
                :state="
                  validateState(
                    password.value.value,
                    password.errorMessage.value
                  )
                "
              ></b-form-input>
              <b-form-invalid-feedback :state="password.errorMessage.value">
                {{ password.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="text-end mb-4">
              <b-link @click="forgotPassword">Olvide mi contraseña</b-link>
            </div>
            <b-button class="w-100" variant="primary" type="submit"
              >Ingresar</b-button
            >
            <p class="text-end mt-4">
              ¿No tienes una cuenta?
              <b-link @click="register()"> Regístrate </b-link>
            </p>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLoginStore } from "@/store";
import { useRouter } from "vue-router";
import { validateState } from "@/validate/globalValidate";
import useLoginFormValidate from "@/validate/loginValidate";

const loginStore = useLoginStore();

// FUNCTIONS
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "@/utils/SweetAlert";

export default defineComponent({
  name: "LoginComponent",
  metaInfo: {
    meta: [
      {
        httpEquiv: "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
  },
  setup() {
    const { email, password, validate } = useLoginFormValidate();
    const router = useRouter();

    const login = async () => {
      const data = {
        email: email.value.value,
        password: password.value.value,
      };

      const isValid = await validate(data);

      if (!isValid) {
        email.validate();
        password.validate();
      }

      if (isValid) {
        try {
          alertLoading();
          await loginStore.loginUser(data);
          alertSuccessfully("Usuario inicio sesión exitosamente!!");
          setTimeout(function () {
            closeAlert();
            let myType = loginStore.$state.security.profileName;
            if (myType === "CUSTOMER") {
              router.push({ path: "/cliente/perfil" });
            }
            if (myType === "SPECIALIST") {
              router.push({ path: "/especialista/perfil" });
            }
          }, 1500);
        } catch (error) {
          alertError("Sucedió un error durante el inicio de sesión.");
        }
      }
    };

    function forgotPassword() {
      setTimeout(() => {
        router.push({ name: "forgot-password" });
      }, 10);
    }
    function register() {
      setTimeout(() => {
        router.push({ name: "register-type" });
      }, 10);
    }

    return {
      email,
      password,
      login,
      register,
      forgotPassword,
      validateState,
    };
  },
});
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
