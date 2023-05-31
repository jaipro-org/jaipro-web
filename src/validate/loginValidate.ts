import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useLoginFormValidate() {
  // Define validación con Yup
  const emailSchema = yup
    .string()
    .email("Escriba un correo valido")
    .required("Campo requerido");
  const passwordSchema = yup
    .string()
    .min(8, "Se requiere 8 caracteres como minimo")
    .required("Campo requerido");

  // Define los campos de formulario validados
  const email = useField<string>("email", emailSchema);
  const password = useField<string>("password", passwordSchema);

  // Define la función de validación
  async function validate(data: any) {
    const valideSchema = yup.object({
      email: emailSchema,
      password: passwordSchema,
    });
    const isValid = await valideSchema.isValid(data);
    return isValid
  }

  return {
    email,
    password,
    validate,
  };
}