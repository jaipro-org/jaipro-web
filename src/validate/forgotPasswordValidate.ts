import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useForgotPasswordValidate() {
  // Define validación con Yup
  const emailSchema = yup
    .string()
    .email("Escriba un correo valido")
    .required("Campo requerido")

  // Define los campos de formulario validados
  const email = useField<string>("email", emailSchema);

  // Define la función de validación
  async function validate(data: object) {
    const valideSchema = yup.object({
      email: emailSchema,
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  return {
    email,
    validate,
  };
}