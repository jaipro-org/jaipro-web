import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useChangePasswordValidate() {
  // Define validación con Yup
  const schemaChangePassword = {
    password: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Escriba su contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === confirmPassword.value.value) return true;
        else return false;
      }),
    confirmPassword: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Confirme su contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === password.value.value) return true;
        else return false;
      })
  };

  // Define los campos de formulario validados
  const password = useField("password", schemaChangePassword.password);
  const confirmPassword = useField("confirmPassword", schemaChangePassword.confirmPassword);

  // Define la función de validación
  async function validateChangePassword(data: any) {
    const isValid = await yup.object(schemaChangePassword).isValid(data);
    return isValid
  }

  function inputReset() {
    password.resetField();
    confirmPassword.resetField();
  }

  function inputValidate() {
    password.validate();
    confirmPassword.validate();
  }

  return {
    password,
    confirmPassword,
    validateChangePassword,
    inputReset,
    inputValidate,
  };
}