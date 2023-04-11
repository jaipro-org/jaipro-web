import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useRegisterClientValidate() {
  // Define validación con Yup
  const nameSchema = yup
    .string()
    .min(2, "El nombre debe tener como minimno 2 caracteres")
    .max(36, "El nombre debe tener como maximo 36 caracteres")
    .required("Campo requerido")
  const lastNameSchema = yup
    .string()
    .min(2, "El apellido debe tener como minimno 2 caracteres")
    .max(36, "El apellido debe tener como maximo 36 caracteres")
    .required("Campo requerido")
  const emailSchema = yup
    .string()
    .email("Escriba un correo valido")
    .required("Campo requerido")
  const passwordSchema = yup
    .string()
    .min(8, "Se requiere 8 caracteres como minimo")
    .required("Escriba su contraseña")
    .test("a", "Las contraseñas no coinciden", (value) => {
      if (value === confirmPassword.value.value) return true;
      else return false;
    })
  const confirmPasswordSchema = yup
    .string()
    .min(8, "Se requiere 8 caracteres como minimo")
    .required("Confirme su contraseña")
    .test("a", "Las contraseñas no coinciden", (value) => {
      if (value === password.value.value) return true;
      else return false;
    })

  // Define los campos de formulario validados
  const name = useField("firstname", nameSchema);
  const lastName = useField("lastname", lastNameSchema);
  const email = useField("email", emailSchema);
  const password = useField("password", passwordSchema);
  const confirmPassword = useField("confirmPassword", confirmPasswordSchema);

  // Define la función de validación
  async function validate(data: any) {
    const valideSchema = yup.object({
      name: nameSchema,
      lastName: lastNameSchema,
      email: emailSchema,
      password: passwordSchema,
      confirmPassword: confirmPasswordSchema
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  return {
    name,
    lastName,
    email,
    password,
    confirmPassword,
    validate,
  };
}