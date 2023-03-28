<template>
  <div>
    <div class="register-container">
      <div class="register-user-container">
        <register-title title="Registro de cliente"></register-title>
        <div class="register-user-form-section">
          <b-form @submit.prevent="registerClient">
            <b-form-group label="Nombres" label-for="txtName_r">
              <b-form-input
                  v-model="firstnameValue"
                  id="txtName_r"
                  placeholder="Ingrese sus nombres"
                  class="rounded-pill"
                  :state="validateState(firstnameValue, firstnameError)"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="firstnameError">
                {{ firstnameError }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Apellidos" label-for="txtLastname_r">
              <b-form-input
                  v-model="lastnameValue"
                  placeholder="Ingrese sus apellidos"
                  id="txtLastname_r"
                  class="rounded-pill"
                  :state="validateState(lastnameValue, lastnameError)"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="lastnameError">
                {{ lastnameError }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Correo electrónico" label-for="txtEmail_r">
              <b-form-input
                  v-model="emailValue"
                  placeholder="Ingrese su correo"
                  id="txtEmail_r"
                  class="rounded-pill"
                  :state="validateState(emailValue, emailError)"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="emailError">
                {{ emailError }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_r">
              <b-form-input
                  v-model="passwordValue"
                  @input="confirmPasswordValidate()"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  id="txtPassword_r"
                  class="rounded-pill"
                  :state="validateState(passwordValue, passwordError)"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="passwordError">
                {{ passwordError }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                label="Confirmar contraseña"
                label-for="txtConfirmPassword_r"
            >
              <b-form-input
                  v-model="confirmPasswordValue"
                  @input="passwordValidate()"
                  type="password"
                  placeholder="Confirme su contraseña"
                  id="txtConfirmPassword_r"
                  class="rounded-pill"
                  :state="
                  validateState(confirmPasswordValue, confirmPasswordError)
                "
              >
              </b-form-input>
              <b-form-invalid-feedback :state="confirmPasswordError">
                {{ confirmPasswordError }}
              </b-form-invalid-feedback>
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

//veeValidate + yup
import { useField } from "vee-validate";
import * as yup from "yup";

// COMPONENTS
import RegisterTitle from "./components/RegisterTitle.vue";

// FUNCTIONS
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "../../../utils/SweetAlert";

// SERVICES
import { AuthServices } from "@/services/api/authServices";
import { useStore } from "vuex";

const authServices = new AuthServices();

export default defineComponent({
  name: "RegisterComponent",
  components: {
    RegisterTitle,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const validateState = (value: any, error: any) => {
      if (value === undefined && error === undefined) return null;
      else if (error) return false;
      return true;
    };

    //esquema yup
    const schema = {
      firstname: yup
          .string()
          .min(2, "El nombre debe tener como minimno 2 caracteres")
          .max(36, "El nombre debe tener como maximo 36 caracteres")
          .required("Campo requerido"),
      lastname: yup
          .string()
          .min(2, "El apellido debe tener como minimno 2 caracteres")
          .max(36, "El apellido debe tener como maximo 36 caracteres")
          .required("Campo requerido"),
      email: yup
          .string()
          .email("Escriba un correo valido")
          .required("Campo requerido"),
      password: yup
          .string()
          .min(8, "Se requiere 8 caracteres como minimo")
          .required("Escriba su contraseña")
          .test("a", "Las contraseñas no coinciden", (value) => {
            if (value === confirmPasswordValue.value) return true;
            else return false;
          }),
      confirmPassword: yup
          .string()
          .min(8, "Se requiere 8 caracteres como minimo")
          .required("Confirme su contraseña")
          .test("a", "Las contraseñas no coinciden", (value) => {
            if (value === passwordValue.value) return true;
            else return false;
          }),
    };

    // validadores Vee-Validate
    const {
      value: firstnameValue,
      errorMessage: firstnameError,
      validate: firstnameValidate,
    } = useField("firstname", schema.firstname);
    const {
      value: lastnameValue,
      errorMessage: lastnameError,
      validate: lastnameValidate,
    } = useField("lastname", schema.lastname);
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
    const {
      value: confirmPasswordValue,
      errorMessage: confirmPasswordError,
      validate: confirmPasswordValidate,
    } = useField("confirmPassword", schema.confirmPassword);

    const registerClient = async () => {
      const fields = {
        name: firstnameValue.value,
        lastName: lastnameValue.value,
        email: emailValue.value,
        password: passwordValue.value,
      };

      const valideSchema = yup.object({
        name: schema.firstname,
        lastName: schema.lastname,
        email: schema.email,
        password: schema.password,
      });

      const isValid = await valideSchema.isValid(fields);

      if (!isValid) {
        firstnameValidate();
        lastnameValidate();
        emailValidate();
        passwordValidate();
        confirmPasswordValidate();
      }

      if (isValid) {
        try {
          alertLoading("Registrando al usuario cliente.");
          await authServices.createClient(fields);

          alertLoading("Iniciando sesión del usuario.");
          await store.dispatch("authModule/loginUser", {
            email: emailValue.value,
            password: passwordValue.value,
          });

          alertSuccessfully("Cliente registrado exitosamente!!");
          setTimeout(function () {
            router.push({ name: "client-profile" });
            closeAlert();
          }, 2500);
        } catch (error) {
          console.log(error);
          alertError();
        }
      }
    };

    return {
      firstnameValue,
      firstnameError,
      lastnameValue,
      lastnameError,
      emailValue,
      emailError,
      passwordValue,
      passwordError,
      passwordValidate,
      confirmPasswordValue,
      confirmPasswordError,
      confirmPasswordValidate,
      registerClient,
      validateState,
    };
  },
});
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