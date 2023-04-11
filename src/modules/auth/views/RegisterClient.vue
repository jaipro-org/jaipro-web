<template>
  <div>
    <div class="register-container">
      <div class="register-user-container">
        <register-title title="Registro de cliente"></register-title>
        <div class="register-user-form-section">
          <b-form @submit.prevent="registerClient">
            <b-form-group label="Nombres" label-for="txtName_r">
              <b-form-input
                v-model="name.value.value"
                id="txtName_r"
                placeholder="Ingrese sus nombres"
                class="rounded-pill"
                :state="
                  validateState(name.value.value, name.errorMessage.value)
                "
              >
              </b-form-input>
              <b-form-invalid-feedback :state="name.errorMessage.value">
                {{ name.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Apellidos" label-for="txtLastname_r">
              <b-form-input
                v-model="lastName.value.value"
                placeholder="Ingrese sus apellidos"
                id="txtLastname_r"
                class="rounded-pill"
                :state="
                  validateState(
                    lastName.value.value,
                    lastName.errorMessage.value
                  )
                "
              >
              </b-form-input>
              <b-form-invalid-feedback :state="lastName.errorMessage.value">
                {{ lastName.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Correo electrónico" label-for="txtEmail_r">
              <b-form-input
                v-model="email.value.value"
                placeholder="Ingrese su correo"
                id="txtEmail_r"
                class="rounded-pill"
                :state="
                  validateState(email.value.value, email.errorMessage.value)
                "
              >
              </b-form-input>
              <b-form-invalid-feedback :state="email.errorMessage.value">
                {{ email.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Contraseña" label-for="txtPassword_r">
              <b-form-input
                v-model="password.value.value"
                @input="confirmPassword.validate()"
                type="password"
                placeholder="Ingrese su contraseña"
                id="txtPassword_r"
                class="rounded-pill"
                :state="
                  validateState(
                    password.value.value,
                    password.errorMessage.value
                  )
                "
              >
              </b-form-input>
              <b-form-invalid-feedback :state="password.errorMessage.value">
                {{ password.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              label="Confirmar contraseña"
              label-for="txtConfirmPassword_r"
            >
              <b-form-input
                v-model="confirmPassword.value.value"
                @input="password.validate()"
                type="password"
                placeholder="Confirme su contraseña"
                id="txtConfirmPassword_r"
                class="rounded-pill"
                :state="
                  validateState(
                    confirmPassword.value.value,
                    confirmPassword.errorMessage.value
                  )
                "
              >
              </b-form-input>
              <b-form-invalid-feedback
                :state="confirmPassword.errorMessage.value"
              >
                {{ confirmPassword.errorMessage.value }}
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
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

//veeValidate + yup
import useRegisterClientValidate from "@/validate/registerClientValidate";
import { validateState } from "@/validate/globalValidate";

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
    const { name, lastName, email, password, confirmPassword, validate } =
      useRegisterClientValidate();

    const registerClient = async () => {
      const fields = {
        name: name.value.value,
        lastName: lastName.value.value,
        email: email.value.value,
        password: password.value.value,
        confirmPassword: confirmPassword.value.value,
      };

      const isValid = await validate(fields);

      if (!isValid) {
        name.validate();
        lastName.validate();
        email.validate();
        password.validate();
        confirmPassword.validate();
      }

      if (isValid) {
        try {
          alertLoading("Registrando al usuario cliente.");
          await authServices.createClient(fields);

          alertLoading("Iniciando sesión del usuario.");
          await store.dispatch("authModule/loginUser", {
            email: email.value.value,
            password: password.value.value,
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
      name,
      lastName,
      email,
      password,
      confirmPassword,
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
