import { useField, configure } from "vee-validate";
import * as yup from "yup";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

export default function useProfileClientValidate() {
  //Define validación con Yup
  //SCHEMA PERFIL
  const schemaDatosPersonales = {
    name: yup.string().required("Campo requerido"),
    lastname: yup.string().required("Campo requerido"),
    email: yup
      .string()
      .email("Escriba un correo valido")
      .required("Campo requerido"),
    phone: yup
      .string()
      .min(9, "Minimo 9 caracteres")
      .max(15, "Maximo 15 caracteres")
      .matches(/^[0-9]+$/, "Campo requerido")
      .required("Campo requerido"),
  };

  //SCHEMA UBICACIÓN
  const schemaUbicacion = {
    ubication: yup.string().required("Campo requerido"),
    district: yup.string().required("Campo requerido"),
  };

  //SCHEMA PASSWORD
  const schemaPassword = {
    oldPassword: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Campo requerido"),
    password: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Escriba su nueva contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === confirmPassword.value.value) return true;
        else return false;
      }),
    confirmPassword: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Confirme su nueva contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === password.value.value) return true;
        else return false;
      }),
  };

  //Define los campos de formulario validados
  //CAMPOS DATOS PERSONALES
  const name = useField("name", schemaDatosPersonales.name);
  const lastname = useField("lastname", schemaDatosPersonales.lastname);
  const email = useField("email", schemaDatosPersonales.email);
  const phone = useField("phone", schemaDatosPersonales.phone);

  //CAMPOS UBICACION
  const ubication = useField("ubication", schemaUbicacion.ubication);
  const district = useField("district", schemaUbicacion.district);

  //CAMPOS PASSWORD
  const oldPassword = useField("oldPassword", schemaPassword.oldPassword);
  const password = useField("password", schemaPassword.password);
  const confirmPassword = useField("confirmPassword", schemaPassword.confirmPassword);

  //Define la función de validación
  //VALIDATE DATOS PERSONALES
  async function validatePersonalData(data: any) {
    const isValid = await yup.object(schemaDatosPersonales).isValid(data);
    return isValid
  }

  //VALIDATE UBICACION
  async function validateUbication(data: any) {
    const isValid = await yup.object(schemaUbicacion).isValid(data);
    return isValid
  }

  //VALIDATE PASSWORD
  async function validatePassword(data: any) {
    const isValid = await yup.object(schemaPassword).isValid(data);
    return isValid
  }

  function inputReset() {
    name.resetField();
    lastname.resetField();
    email.resetField();
    phone.resetField();
    ubication.resetField();
    district.resetField();
    oldPassword.resetField();
    password.resetField();
    confirmPassword.resetField();
  }

  function inputValidate() {
    name.validate();
    lastname.validate();
    email.validate();
    phone.validate();
    ubication.validate();
    district.validate();
    oldPassword.validate();
    password.validate();
    confirmPassword.validate();
  }

  return {
    name,
    lastname,
    email,
    phone,
    ubication,
    district,
    oldPassword,
    password,
    confirmPassword,
    validatePersonalData,
    validateUbication,
    validatePassword,
    inputReset,
    inputValidate,
  };
}