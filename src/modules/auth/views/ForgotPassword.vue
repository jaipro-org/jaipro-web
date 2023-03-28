<template>
  <div>
    <div class="forgot-container">
      <div class="forgot-container">
        <div class="forgot-title-section">
          <h2 class="forgot-title">Recuperar Contraseña</h2>
        </div>
        <div class="forgot-form-section">
          <b-form @submit.prevent="forgot">
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
            <b-button
                class="w-100"
                variant="primary"
                type="submit"
                @click="emailValidate()"
            >Recuperar</b-button
            >
            <b-button
                class="w-100 mt-2"
                variant="secondary"
                type="button"
                @click="cancel"
            >Cancelar</b-button
            >
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import * as yup from "yup";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ForgotPassword",
  setup() {
    const schema = {
      email: yup
          .string()
          .email("Escriba un correo valido")
          .required("Campo requerido"),
    };
    const {
      value: emailValue,
      errorMessage: emailError,
      validate: emailValidate,
    } = useField("email", schema.email);

    const router = useRouter();

    const validateState = (value: any, error: any) => {
      if (value === undefined && error === undefined) return null;
      else if (error) return false;
      return true;
    };

    const forgot = () => {
      console.log("forgot here!");
    };

    const forgotPassword = () => {
      console.log("forgotPassword here!");
    };

    const registerUser = () => {
      console.log("registerUser here!");
    };

    const cancel = () => {
      router.push({ name: "login" });
    };

    return {
      emailValue,
      emailError,
      emailValidate,
      forgot,
      forgotPassword,
      registerUser,
      cancel,
      validateState,
    };
  },
});
</script>

<style scoped lang="scss">
.forgot-container {
  padding: 40px 15px 25px 15px;

.forgot-title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;

.forgot-title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 45px;
  line-height: 1;
  color: #303669;
  margin-bottom: 0;
}
}

.forgot-form-section {
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
}
}
</style>