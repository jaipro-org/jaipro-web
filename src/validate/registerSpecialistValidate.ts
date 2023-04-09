import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useRegisterSpecialistValidate() {
  // Define validación con Yup
  const nameSchema = yup.string().required("Campo requerido")
  const lastNameSchema = yup.string().required("Campo requerido")
  const phoneSchema = yup
    .string()
    .min(9, "9 caracteres como minimo")
    .max(15, "15 caracteres como maximo")
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido")
  const documentSchema = yup
    .string()
    .min(8, "8 caracteres como minimo")
    .max(12, "12 caracteres como maximo")
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido")
  const addressSchema = yup.string().required("Campo requerido")
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
  const locationSchema = yup
    .array()
    .min(1, "Marque 1 como minimo")
    .max(3, "Marque 3 como maximo")
    .required("Campo requerido")
  const listProfessionSchema = yup
    .array()
    .min(1, "Marque 1 como minimo")
    .required("Campo requerido")
  const conditionsSchema = yup
    .boolean()
    .oneOf([true], "Acepte los terminos y condiciones")
    .required("Acepte los terminos y condiciones")

  // Define los campos de formulario validados
  const name = useField("name", nameSchema);
  const lastName = useField("lastName", lastNameSchema);
  const phone = useField("phone", phoneSchema);
  const document = useField("document", documentSchema);
  const address = useField("address", addressSchema);
  const email = useField("email", emailSchema);
  const password = useField("password", passwordSchema);
  const confirmPassword = useField("confirmPassword", confirmPasswordSchema);
  const location = useField("location", locationSchema);
  const listProfession = useField("listProfession", listProfessionSchema);
  const conditions = useField("conditions", conditionsSchema);

  // Define la función de validación
  async function validateStep1(data: object) {
    const valideSchema = yup.object({
      name: nameSchema,
      lastName: lastNameSchema,
      phone: phoneSchema,
      document: documentSchema,
      address: addressSchema
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  async function validateStep2(data: object) {
    const valideSchema = yup.object({
      email: emailSchema,
      password: passwordSchema,
      confirmPassword: confirmPasswordSchema,
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  async function validateStep3(data: object) {
    const valideSchema = yup.object({
      location: locationSchema,
      listProfession: listProfessionSchema,
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  async function validateStep4(data: object) {
    const valideSchema = yup.object({
      conditions: conditionsSchema,
    });

    const isValid = await valideSchema.isValid(data);

    return isValid
  }

  return {
    name,
    lastName,
    phone,
    document,
    address,
    email,
    password,
    confirmPassword,
    location,
    listProfession,
    conditions,
    validateStep1,
    validateStep2,
    validateStep3,
    validateStep4,
  };
}