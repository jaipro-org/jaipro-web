<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <h1 class="text-center title">Nuevo proyecto</h1>
    </b-col>
    <b-col cols="12" md="8" class="mx-auto mt-4 px-0">
      <form-wizard
        color="#3a88ec"
        ref="formWizard"
        class="px-lg-0"
        next-button-text="Siguiente"
        back-button-text="Atras"
        finish-button-text="Registrar proyecto"
      >
        <tab-content title="Describe el servicio" :beforeChange="Step1">
          <b-card class="mt-1 mb-2">
            <b-form validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión">
                    <b-form-select
                      v-model="professionValue"
                      :options="professionOptions"
                      class="rounded-pill"
                      required
                    ></b-form-select>
                    <b-form-invalid-feedback>
                      {{ professionError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito">
                    <b-form-select
                      v-model="districtValue"
                      :options="districtOptions"
                      class="rounded-pill"
                      required
                    ></b-form-select>
                    <b-form-invalid-feedback>
                      {{ districtError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Describe tu proyecto" :beforeChange="Step2">
          <b-card class="mt-1 mb-2">
            <b-form validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" class="px-0">
                  <b-form-group label="Describe el servicio">
                    <b-form-textarea
                      v-model="descriptionValue"
                      rows="5"
                      required
                    ></b-form-textarea>
                    <b-form-invalid-feedback>
                      {{ descriptionError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <br />
              <label for="">Fotos de referencia</label>
              <b-row class="mx-0 justify-content-around">
                <b-col
                  cols="6"
                  md="5"
                  lg="4"
                  v-for="(image, index) in form.imagesList"
                  :key="index"
                >
                  <div
                    class="form-image__file mb-3 mt-3"
                    :class="!image.url ? 'form-image__file--aux' : ''"
                    :style="
                      !image.url
                        ? 'border: #dc3545 1px solid'
                        : 'border: #198754 1px solid'
                    "
                  >
                    <img
                      @click="uploadImage(index)"
                      :src="
                        !image.url
                          ? require('@/assets/img-delete/fileimage-up.png')
                          : image.url
                      "
                      alt="image"
                    />
                    <div
                      v-if="image.url"
                      class="form-image__delete"
                      @click="deleteImage(index)"
                    >
                      <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                  </div>
                  <input
                    type="file"
                    style="display: none"
                    :ref="`portadaFile${index}`"
                    :id="`portadaFile${index}`"
                    accept="image/png, image/jpeg"
                    hidden
                    @change="changeFileCover"
                  />
                </b-col>
              </b-row>
              <b-form-invalid-feedback :state="imagenRequired">
                Suba una imagen como minimo para la referencia
              </b-form-invalid-feedback>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Cuéntanos de ti" :beforeChange="Step3">
          <b-card class="mt-1 mb-2">
            <b-form validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres">
                    <b-form-input
                      v-model="nameValue"
                      placeholder="Ingrese su nombre"
                      class="rounded-pill"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ nameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos">
                    <b-form-input
                      v-model="lastnameValue"
                      placeholder="Ingrese su apellidos"
                      class="rounded-pill"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ lastnameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <br />
              <h6 for="">Mi cuenta</h6>
              <hr />
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Correo electrónico">
                    <b-form-input
                      v-model="emailValue"
                      placeholder="Ingrese su correo"
                      class="rounded-pill"
                      type="email"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ emailError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña">
                    <b-form-input
                      v-model="passwordValue"
                      v-on:input="confirmPasswordValidate()"
                      placeholder="Ingrese su contraseña"
                      type="password"
                      class="rounded-pill"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback :state="passwordError">
                      {{ passwordError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Confirmar contraseña">
                    <b-form-input
                      v-model="confirmPasswordValue"
                      v-on:input="passwordValidate()"
                      placeholder="Confirme su contraseña"
                      class="rounded-pill"
                      type="password"
                      required
                    ></b-form-input>
                    <b-form-invalid-feedback :state="confirmPasswordError">
                      {{ confirmPasswordError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Resumen" :beforeChange="Step4">
          <b-form validated>
            <b-card class="mb-4">
              <h6 class="mb-3">Describe el servicio</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión">
                    <b-form-select
                      v-model="professionValue"
                      :options="professionOptions"
                      class="rounded-pill"
                      disabled
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito">
                    <b-form-select
                      v-model="districtValue"
                      :options="districtOptions"
                      class="rounded-pill"
                      disabled
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="mb-4">
              <h6 class="mb-3">Describe tu proyecto</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" class="px-0">
                  <b-form-group label="Describe el servicio">
                    <b-form-textarea
                      v-model="descriptionValue"
                      disabled
                      no-resize
                      rows="5"
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <br />
              <label for="">Fotos de referencia</label>
              <b-row class="mx-0 justify-content-around">
                <b-col
                  cols="6"
                  md="5"
                  lg="4"
                  v-for="(image, index) in form.imagesList"
                  :key="index"
                >
                  <div
                    class="form-image__file mb-3 mt-3"
                    :class="!image.url ? 'form-image__file--aux' : ''"
                  >
                    <img
                      :src="
                        !image.url
                          ? require('@/assets/img-delete/fileimage-up.png')
                          : image.url
                      "
                      alt="image"
                    />
                  </div>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="mb-4">
              <h6 class="mb-3">Cuéntanos de ti</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Nombres">
                    <b-form-input
                      v-model="nameValue"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos">
                    <b-form-input
                      v-model="lastnameValue"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Correo electrónico">
                    <b-form-input
                      v-model="emailValue"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card>
            <div class="mb-4">
              <div class="d-flex">
                <b-form-checkbox
                  v-model="conditionsValue"
                  name="checkbox-1"
                  class="cursor-pointer"
                  required
                >
                </b-form-checkbox>
                <p
                  :style="conditionsValue ? 'color: #198754' : 'color: #dc3545'"
                >
                  Acepto los
                  <span class="btn_conditions" @click="showConditions = true">
                    términos y condiciones</span
                  >
                </p>
              </div>
              <b-form-invalid-feedback
                :state="conditionsError"
                style="margin-top: -15px"
              >
                {{ conditionsError }}
              </b-form-invalid-feedback>
            </div>
          </b-form>
        </tab-content>
      </form-wizard>
    </b-col>
  </b-row>
  <b-modal v-model="showConditions" title="Términos y condiciones">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint
      assumenda quod obcaecati tempore voluptate recusandae magnam temporibus
      enim. Recusandae earum ullam itaque saepe hic ut facilis asperiores
      inventore, maiores quo atque perspiciatis, officia laudantium? Dolorum
      ipsa nobis voluptatem eius recusandae natus reiciendis. Provident optio
      laboriosam qui voluptatibus eos? Excepturi!
    </div>
    <template v-slot:footer>
      <div>
        <b-button
          variant="primary"
          @click="(showConditions = false), (conditionsValue = true)"
          >Aceptar</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import * as yup from "yup";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import { ref, computed } from "vue";

//Variables Reactivas
const imageSelected = ref(0);
const showConditions = ref(false);

// Datos para prueba
const professionOptions = ref([
  { text: "Seleccione", value: "" },
  { text: "Pintor", value: 0 },
  { text: "Carpintero", value: 1 },
  { text: "Albañil", value: 2 },
  { text: "Gasfitero", value: 3 },
]);
const districtOptions = ref([
  { text: "Seleccione", value: "" },
  { text: "Los Olivos", value: 0 },
  { text: "SMP", value: 1 },
  { text: "Breña", value: 2 },
  { text: "Independecia", value: 3 },
]);

// Datos para enviar
const form = ref({
  profession: "",
  district: "",
  description: "",
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: false,
  imageSelected: 0,
  imagesList: [
    {
      id: 0,
      url: "",
      file: null,
    },
    {
      id: 1,
      url: "",
      file: null,
    },
    {
      id: 2,
      url: "",
      file: null,
    },
  ],
});

// Esquema de datos con YUP
const schema = {
  profession: yup.string().required("Campo requerido"),
  district: yup.string().required("Campo requerido"),
  description: yup.string().required("Campo requerido"),
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
      if (value === confirmPasswordValue.value) return true;
      else return false;
    }),
  confirmPassword: yup
    .string()
    .min(8, "Se requiere 8 caracteres como minimo")
    .required("Confirme su contraseña")
    .test("a", "Las contraseñas no coinciden", (value) => {
      if (value === passwordValue.value) return true;
      else return false;
    }),
  conditions: yup
    .boolean()
    .oneOf([true], "Acepte los terminos y condiciones")
    .required("Acepte los terminos y condiciones"),
};

// Validaciones INPUT with UseField
const {
  value: professionValue,
  errorMessage: professionError,
  validate: professionValidate,
} = useField("profession", schema.profession);
const {
  value: districtValue,
  errorMessage: districtError,
  validate: districtValidate,
} = useField("district", schema.district);
const {
  value: descriptionValue,
  errorMessage: descriptionError,
  validate: descriptionValidate,
} = useField("description", schema.description);
const {
  value: nameValue,
  errorMessage: nameError,
  validate: nameValidate,
} = useField("name", schema.name);
const {
  value: lastnameValue,
  errorMessage: lastnameError,
  validate: lastnameValidate,
} = useField("lastname", schema.lastname);
const {
  value: emailValue,
  errorMessage: emailError,
  validate: emailValidate,
} = useField("email", schema.email);
const {
  value: passwordValue,
  errorMessage: passwordError,
  validate: passwordValidate,
} = useField("password", schema.password);
const {
  value: confirmPasswordValue,
  errorMessage: confirmPasswordError,
  validate: confirmPasswordValidate,
} = useField("confirmPassword", schema.confirmPassword);
const {
  value: conditionsValue,
  errorMessage: conditionsError,
  validate: conditionsValidate,
} = useField("conditions", schema.conditions);

// validadores para cada paso del formulario
// beforeChange
const Step1 = async () => {
  const fields = {
    profession: professionValue.value,
    district: districtValue.value,
  };

  const valideSchema = yup.object({
    profession: schema.profession,
    district: schema.district,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    professionValidate();
    districtValidate();
  }

  form.value = { ...form.value, ...fields };

  return isValid;
};
const Step2 = async () => {
  const fields = {
    description: descriptionValue.value,
  };

  const valideSchema = yup.object({
    description: schema.description,
  });

  const isValid = await valideSchema.isValid(fields);
  const isValidRequired = imagenRequired.value; // control personalizado imagen

  if (!isValid) {
    descriptionValidate();
  }

  form.value = { ...form.value, ...fields };

  return isValid && isValidRequired;
};
const Step3 = async () => {
  const fields = {
    name: nameValue.value,
    lastname: lastnameValue.value,
    email: emailValue.value,
    password: passwordValue.value,
    confirmPassword: confirmPasswordValue.value,
  };

  const valideSchema = yup.object({
    name: schema.name,
    lastname: schema.lastname,
    email: schema.email,
    password: schema.password,
    confirmPassword: schema.confirmPassword,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    nameValidate();
    lastnameValidate();
    emailValidate();
    passwordValidate();
    confirmPasswordValidate();
  }

  form.value = { ...form.value, ...fields };

  return isValid;
};
const Step4 = async () => {
  const fields = {
    conditions: conditionsValue.value,
  };

  const valideSchema = yup.object({
    conditions: schema.conditions,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    conditionsValidate();
  }

  if (isValid) {
    form.value = { ...form.value, ...fields };
    const value = form.value;
    console.log(value);
  }
  return isValid;
};

// subiendo imagen especifico al index
function uploadImage(index: any) {
  imageSelected.value = index;
  const btnFile: any = document.getElementById(`portadaFile${index}`);
  btnFile.click();
}

// cambia el cover por la imagen subida
function changeFileCover(event: any) {
  const index = imageSelected.value;
  const file = event.target.files[0];
  if (!file) {
    form.value.imagesList[index].url = "";
    form.value.imagesList[index].file = null;
    return;
  }
  // if (file.size > 2 * 1024 * 1024) {
  //   alert("El archivo debe ser menor a 2 MB");
  //   return;
  // }
  // const fileType = file.type;
  // if (fileType !== "image/png" && fileType !== "image/jpeg") {
  //   alert("El archivo debe ser de tipo .jpg o .png");
  //   return;
  // }
  form.value.imagesList[index].file = file;
  const fr = new FileReader();
  fr.onload = () => (form.value.imagesList[index].url = String(fr.result));
  fr.readAsDataURL(file);
  event.target.value = ""; // Restablecer valor del input
}

// borrando una imagen
function deleteImage(index: any) {
  form.value.imagesList[index].url = "";
  form.value.imagesList[index].file = null;
}

// activa el mensaje indicando que se requiere minimo una imagen
const imagenRequired = computed(() => {
  if (!form.value.imagesList.some((x) => x.url !== "")) {
    return false;
  } else {
    return true;
  }
});

// otros revisar para quitar
const formDataButton = ref<HTMLButtonElement>();
const dataForm = ref<HTMLFormElement>();
</script>

<style>
.wizard-tab-content {
  padding: 30px 0px 10px !important;
}
.btn_conditions {
  text-decoration: underline;
  cursor: pointer;
}
.title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 45px;
  line-height: 1;
  color: #303669;
  margin-bottom: 0;
}
.wizard-btn {
  border-radius: 50px !important;
}
.wizard-icon {
  font-style: normal;
}
.info-error {
  color: #e74343;
}
.cursor-pointer > * {
  cursor: pointer;
}
.step__button {
  border-radius: 4px;
  /* padding: 9px 16px !important; */
  border-radius: 25px;
  padding: 12px 20px !important;
  font-size: 1rem;
}
.work__name {
  font-size: 1.05rem;
  font-weight: 500;
}
.work__temp {
  position: relative;
  padding: 0 30px;
}
.work__date {
  position: absolute;
  top: -25px;
}
.work__buttons {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  background-color: rgb(145, 145, 145);
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.work__buttons:hover {
  background-color: #347bd8;
}

.work__buttons--left {
  left: -25px;
}
.work__buttons--right {
  right: -25px;
}
.form-step-button {
  display: none;
}

.form-image__file {
  border: 1px solid rgba(66, 66, 66, 0.473);
  border-radius: 10px;
  height: 200px;
  cursor: pointer;
}

.form-image__file--aux {
  padding: 20px 5px;
}

.form-image__file img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 10px;
}

.form-image__delete {
  position: relative;
  width: fit-content;
  top: -190px;
  right: -196px;
  font-size: 1.2rem;
  color: rgb(241, 46, 46);
  z-index: 10;
  cursor: pointer;
}
.wizard-nav-pills {
  font-size: calc(0.5vw + 11px);
}
.wizard-icon-circle {
  width: calc(2vw + 35px) !important;
  height: calc(2vw + 35px) !important;
  font-size: calc(0.5vw + 24px) !important;
}
.wizard-progress-with-circle {
  top: calc(1vw + 25px) !important;
}
@media (max-width: 1400px) {
  .form-image__delete {
    right: -159px;
  }
}
@media (max-width: 1200px) {
  .form-image__delete {
    right: calc(6vw - 120%);
  }
}
@media (max-width: 991px) {
  .form-image__delete {
    right: calc(6vw - 117%);
  }
}
@media (max-width: 768px) {
  .form-image__delete {
    right: calc(12vw - 122%);
  }
}
@media (max-width: 510px) {
  .form-image__delete {
    right: calc(13vw - 112%);
  }
  .row {
    flex-direction: column;
    align-items: center;
  }
  .col-6 {
    width: 85%;
  }
  .wizard-btn {
    min-width: 110px !important;
  }
}
</style>
