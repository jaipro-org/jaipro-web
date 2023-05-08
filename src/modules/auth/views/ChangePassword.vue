<template>
  <div>
    <div class="forgot-container">
      <div class="forgot-container">
        <div class="forgot-title-section">
          <h2 class="forgot-title">Cambiar Contraseña</h2>
        </div>
        <div class="forgot-form-section">
          <b-form @submit.prevent="change">
            <b-form-group label="Nueva contraseña" label-for="txtEmail_l">
              <b-form-input
                v-model="password.value.value"
                class="rounded-pill"
                @input="confirmPassword.validate()"
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

            <b-form-group
              label="Confirmar nueva contraseña"
              label-for="txtEmail_l"
            >
              <b-form-input
                v-model="confirmPassword.value.value"
                class="rounded-pill"
                @input="password.validate()"
                :state="
                  validateState(
                    confirmPassword.value.value,
                    confirmPassword.errorMessage.value
                  )
                "
              ></b-form-input>
              <b-form-invalid-feedback
                :state="confirmPassword.errorMessage.value"
              >
                {{ confirmPassword.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-button class="w-100" variant="primary" type="submit"
              >Actualizar</b-button
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
import useChangePasswordValidate from "@/validate/changePasswordValidate";
import { AuthServices } from "@/services/api/authServices";

const authServices = new AuthServices();

export default defineComponent({
  name: "ForgotPassword",
  setup() {
    const {
      password,
      confirmPassword,
      validateChangePassword,
      inputReset,
      inputValidate,
    } = useChangePasswordValidate();
    const router = useRouter();

    const change = async () => {
      const fields = {
        password: password.value.value,
        confirmPassword: confirmPassword.value.value,
      };

      const isValid = await validateChangePassword(fields);

      if (isValid) {
        try {
          var newdata = {
            userRecoverId: "e856f137-b605-4a7c-823d-3da3bb5eedfc",
            userId: "4fbe22ad-f876-4893-816b-42011d10c770",
            nwPassword: fields.password,
            repeatNwPassword: fields.confirmPassword,
          };
          const data = await authServices.forgotPasswordChange(newdata);
          console.log(data);
        } catch (error) {
          throw error;
        }
      } else {
        inputValidate();
      }
    };

    return {
      password,
      confirmPassword,
      change,
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
