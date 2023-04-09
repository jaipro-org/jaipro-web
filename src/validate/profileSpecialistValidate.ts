import { useField, configure } from "vee-validate";
import * as yup from "yup";
import { BankAccountSpecialistValidate } from "@/interfaces/BankAccountSpecialist.interfaces"
import { ProfileSpecialist } from "@/interfaces/ProfileSpecialist.interfaces";

// Configura VeeValidate
configure({
  validateOnInput: true,
  validateOnChange: true,
});

//INTERFACE

export default function useProfileSpecialistValidate() {
  //Define validación con Yup
  //SCHEMA PERFIL
  const profilePhotoSchema = yup
    .object()
    .shape({
      url: yup.mixed().required("Imagen requerida"),
      file: yup.mixed().required("Imagen requerida"),
    })
    .strict(true)
    .required("Imagen requerida")
  const nameSchema = yup.string().required("Campo requerido")
  const lastNameSchema = yup.string().required("Campo requerido")
  const aboutSchema = yup.string().required("Campo requerido")
  const directionSchema = yup.string().required("Campo requerido")
  const phoneSchema = yup
    .string()
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido")
  const secondPhoneSchema = yup
    .string()
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido")

  //SCHEMA IMAGE-LIST
  const imagesListSchema = yup
    .array()
    .of(
      yup.object({
        id: yup.number(),
        url: yup.string(),
        file: yup.mixed(),
      })
    )
    .test("", "Suba una imagen como minimo", (values: any) => {
      return values.some((value: any) => value.url !== "");
    })
    .required("Suba una imagen como minimo")

  //SCHEMA WORK-LOCATION
  const zonaSelectedSchema = yup
    .number()
    .required("Campo requerido")
  const groupLocationSchema = yup.object().shape({
    objetosAAgregar: yup.array().of(yup.object()),
    objetosAEliminar: yup.array().of(yup.object()),
  }).test(
    'al-menos-uno',
    'Marque o desmarque algun nuevo distrito',
    function (value: any) {
      const { objetosAAgregar = [], objetosAEliminar = [] } = value || {};
      return objetosAAgregar.length > 0 || objetosAEliminar.length > 0;
    }
  );

  //SCHEMA ACCOUNT
  const bankIdSchema = yup
    .number()
    .required("Campo requerido")
  const accountNumberSchema = yup
    .string()
    .min(12, "Minimo 12 digitos")
    .max(24, "Maximo 24 digitos")
    .required("Campo requerido")
  const cciSchema = yup
    .string()
    .min(12, "Minimo 12 digitos")
    .max(30, "Maximo 30 digitos")
    .required("Campo requerido")

  //Define los campos de formulario validados
  //CAMPOS PERFIL
  const profilePhoto = useField("profilePhoto", profilePhotoSchema);
  const name = useField("name", nameSchema);
  const lastName = useField("lastName", lastNameSchema);
  const about = useField("about", aboutSchema);
  const direction = useField("direction", directionSchema);
  const phone = useField("phone", phoneSchema);
  const secondPhone = useField("secondPhone", secondPhoneSchema);

  //CAMPO IMAGE-LIST
  const imagesList = useField("imagesList", imagesListSchema);

  //CAMPO WORK-LOCATION
  const zona = useField("zona", zonaSelectedSchema);
  const groupLocation = useField("groupLocation", groupLocationSchema);

  //CAMPOS ACCOUNT
  const bankId = useField("bankId", bankIdSchema);
  const accountNumber = useField("accountNumber", accountNumberSchema);
  const cci = useField("cci", cciSchema);

  //Define la función de validación
  //VALIDATE PROFILE
  async function validateProfile(data: ProfileSpecialist) {
    const valideSchema = yup.object({
      profilePhoto: profilePhotoSchema,
      name: nameSchema,
      lastName: lastNameSchema,
      about: aboutSchema,
      direction: directionSchema,
      phone: phoneSchema,
      secondPhone: secondPhoneSchema,
    });
    const isValid = await valideSchema.isValid(data);
    return isValid
  }
  //VALIDATE GALLERY
  async function validateGallery(data: object) {
    const valideSchema = yup.object({
      imagesList: imagesListSchema,
    });
    const isValid = await valideSchema.isValid(data);
    return isValid
  }
  //VALIDATE WORK-LOCATION
  async function validateWorkLocation(data: object) {
    const valideSchema = yup.object({
      zona: zonaSelectedSchema,
      groupLocation: groupLocationSchema
    });
    const isValid = await valideSchema.isValid(data);
    return isValid
  }
  //VALIDATE BANK-ACCOUNT
  async function validateAccount(data: BankAccountSpecialistValidate) {
    const valideSchema = yup.object({
      bankId: bankIdSchema,
      accountNumber: accountNumberSchema,
      cci: cciSchema,
    });
    const isValid = await valideSchema.isValid(data);
    return isValid
  }

  function inputReset() {
    profilePhoto.resetField();
    name.resetField()
    lastName.resetField()
    about.resetField()
    direction.resetField()
    phone.resetField()
    secondPhone.resetField()
    zona.resetField();
    groupLocation.resetField();
    bankId.resetField();
    accountNumber.resetField();
    cci.resetField()
  }

  function inputValidate() {
    profilePhoto.validate();
    name.validate();
    lastName.validate();
    about.validate();
    direction.validate();
    phone.validate();
    secondPhone.validate();
    zona.validate();
    groupLocation.validate();
    bankId.validate();
    accountNumber.validate();
    cci.validate();
  }

  return {
    profilePhoto,
    name,
    lastName,
    about,
    direction,
    phone,
    secondPhone,
    imagesList,
    zona,
    groupLocation,
    bankId,
    accountNumber,
    cci,
    validateProfile,
    validateGallery,
    validateWorkLocation,
    validateAccount,
    inputValidate,
    inputReset,
  };
}