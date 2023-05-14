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
                type="password"
                placeholder="Ingrese contraseña"
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
                type="password"
                placeholder="Ingrese nueva contraseña"
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { validateState } from "@/validate/globalValidate";
import useChangePasswordValidate from "@/validate/changePasswordValidate";
import { AuthServices } from "@/services/api/authServices";
import {
  alertLoading,
  alertActionButton,
} from "@/utils/SweetAlert";

const authServices = new AuthServices();

export default defineComponent({
  name: "ForgotPassword",
  setup() {
    const {
      password,
      confirmPassword,
      validateChangePassword,
      inputValidate,
    } = useChangePasswordValidate();
    const router = useRouter();
    const internal = ref()

    const change = async () => {
      const fields = {
        password: password.value.value,
        confirmPassword: confirmPassword.value.value,
      };

      const isValid = await validateChangePassword(fields);

      if (isValid) {
        try {
          var newdata = {
            userRecoverId: internal.value.id,
            userId: internal.value.userId,
            nwPassword: fields.password,
            repeatNwPassword: fields.confirmPassword,
          };
          alertLoading();
          await authServices.forgotPasswordChange(newdata);
          await alertActionButton("","Contraseña cambiada correctamente");
          router.push({ name: "login" });
        } catch (error: any) {
          await alertActionButton("", error.response.data.message);
          router.push({ name: "login" });
          throw error;
        }
      } else {
        inputValidate();
      }
    };
    return {
      internal,
      password,
      confirmPassword,
      change,
      validateState,
    };
  },
  async mounted() {
    const internalParam: any = this.$route.query.internal;
    this.internal = JSON.parse(atob(internalParam));
    if (internalParam) {
      try {
        const response = await authServices.validateRecoverTicket(
          this.internal.id,
          this.internal.userId
        );
      } catch (error: any) {
        this.$router.push({ name: "home" });
      }
    }
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
