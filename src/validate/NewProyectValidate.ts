import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useNewProyect() {
  // Define validación con Yup
  const schemaStep1 = {
    profession: yup.number().required("Campo requerido"),
    district: yup.number().required("Campo requerido")
  };
  const schemaStep2 = {
    description: yup.string().required("Campo requerido")
  };
  const schemaStep3 = {
    name: yup.string().required("Campo requerido"),
    lastname: yup.string().required("Campo requerido"),
    email: yup
      .string()
      .email("Escriba un correo valido")
      .required("Campo requerido"),
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
  const schemaStep4 = {
    conditions: yup
      .boolean()
      .oneOf([true], "Acepte los terminos y condiciones")
      .required("Acepte los terminos y condiciones")
  };

  // Define los campos de formulario validados
  const profession = useField<number>("profession", schemaStep1.profession);
  const district = useField<number>("district", schemaStep1.district);
  const description = useField<string>("description", schemaStep2.description);
  const name = useField<string>("name", schemaStep3.name);
  const lastname = useField<string>("lastname", schemaStep3.lastname);
  const email = useField<string>("email", schemaStep3.email);
  const password = useField<string>("password", schemaStep3.password);
  const confirmPassword = useField<string>("confirmPassword", schemaStep3.confirmPassword);
  const conditions = useField<boolean>("conditions", schemaStep4.conditions);

  // Define la función de validación
  async function validateStep1(data: object): Promise<boolean> {
    const isValid: boolean = await yup.object(schemaStep1).isValid(data);
    return isValid
  }
  async function validateStep2(data: object): Promise<boolean> {
    const isValid: boolean = await yup.object(schemaStep2).isValid(data);
    return isValid
  }
  async function validateStep3(data: object): Promise<boolean> {
    const isValid: boolean = await yup.object(schemaStep3).isValid(data);
    return isValid
  }
  async function validateStep4(data: object): Promise<boolean> {
    const isValid: boolean = await yup.object(schemaStep4).isValid(data);
    return isValid
  }

  function inputValidateStep1() {
    profession.validate();
    district.validate();
  }

  function inputValidateStep2() {
    description.validate();
  }

  function inputValidateStep3() {
    name.validate();
    lastname.validate();
    email.validate();
    password.validate();
    confirmPassword.validate();
  }

  function inputValidateStep4() {
    conditions.validate()
  }

  const validateInput = {
    inputValidateStep1,
    inputValidateStep2,
    inputValidateStep3,
    inputValidateStep4
  }

  const validateSteps = {
    validateStep1,
    validateStep2,
    validateStep3,
    validateStep4
  }
  
  return {
    profession,
    district,
    description,
    name,
    lastname,
    email,
    password,
    confirmPassword,
    conditions,
    validateInput,
    validateSteps
  };
}