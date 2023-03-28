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
                  v-model="emailValue"
                  placeholder="Ingrese su correo"
                  id="txtEmail_l"
                  class="rounded-pill"
                  :state="validateState(emailValue, emailError)"
              ></b-form-input>
              <b-form-invalid-feedback :state="emailError">
                {{ emailError }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_l">
              <b-form-input
                  v-model="passwordValue"
                  placeholder="Ingrese su contraseña"
                  type="password"
                  id="txtPassword_l"
                  class="rounded-pill"
                  :state="validateState(passwordValue, passwordError)"
              ></b-form-input>
              <b-form-invalid-feedback :state="passwordError">
                {{ passwordError }}
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useField } from "vee-validate";
import * as yup from "yup";

// FUNCTIONS
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "../../../utils/SweetAlert";

// SERVICES
import { AuthServices } from "@/services/api/authServices";

export default defineComponent({
  name: "LoginComponent",
  setup() {
    const router = useRouter();
    const store = useStore();

    const validateState = (value: any, error: any) => {
      if (value === undefined && error === undefined) return null;
      else if (error) return false;
      return true;
    };

    const schema = {
      email: yup
          .string()
          .email("Escriba un correo valido")
          .required("Campo requerido"),
      password: yup
          .string()
          .min(8, "Se requiere 8 caracteres como minimo")
          .required("Campo requerido"),
    };
    const {
      value: emailValue,
      errorMessage: emailError,
      validate: emailValidate,
    } = useField("email", schema.email);
    const {
      value: passwordValue,
      errorMessage: passwordError,
      validate: passwordValidate,
    } = useField("password", schema.password);

    function verificar() {
      emailValidate();
      passwordValidate();
    }

    const login = async () => {
      const fields = {
        email: emailValue.value,
        password: passwordValue.value,
      };

      const valideSchema = yup.object({
        email: schema.email,
        password: schema.password,
      });

      const isValid = await valideSchema.isValid(fields);

      if (!isValid) {
        emailValidate();
        passwordValidate();
      }

      if (isValid) {
        try {
          alertLoading();
          await store.dispatch("authModule/loginUser", {
            email: emailValue.value,
            password: passwordValue.value,
          });

          alertSuccessfully("Usuario inicio sesión exitosamente!!");
          setTimeout(function () {
            router.push({ name: "home" });
            closeAlert();
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
      emailValue,
      emailError,
      passwordValue,
      passwordError,
      verificar,
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