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
            <b-button
              class="w-100"
              variant="primary"
              type="submit"
              @click="email.validate()"
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
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { validateState } from "@/validate/globalValidate";
import useForgotPasswordValidate from "@/validate/forgotPasswordValidate";

export default defineComponent({
  name: "ForgotPassword",
  setup() {
    const { email, validate } = useForgotPasswordValidate();
    const router = useRouter();

    const forgot = async () => {
      const fields = {
        email: email.value.value,
      };

      const isValid = await validate(fields);

      if (!isValid) {
        email.validate();
      } else {
        console.log(email.value);
        console.log("forgot here!");
      }
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
      email,
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
