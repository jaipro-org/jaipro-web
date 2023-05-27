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
            <b-form>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión">
                    <b-form-select
                      v-model="profession.value.value"
                      :state="
                        validateState(
                          profession.value.value,
                          profession.errorMessage.value
                        )
                      "
                      :options="professionOptions"
                      class="rounded-pill"
                    ></b-form-select>
                    <b-form-invalid-feedback>
                      {{ profession.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito">
                    <b-form-select
                      v-model="district.value.value"
                      :state="
                        validateState(
                          district.value.value,
                          district.errorMessage.value
                        )
                      "
                      :options="districtOptions"
                      class="rounded-pill"
                    ></b-form-select>
                    <b-form-invalid-feedback>
                      {{ district.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Describe tu proyecto" :beforeChange="Step2">
          <b-card class="mt-1 mb-2">
            <b-form>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" class="px-0">
                  <b-form-group label="Describe el servicio">
                    <b-form-textarea
                      v-model="description.value.value"
                      :state="
                        validateState(
                          description.value.value,
                          description.errorMessage.value
                        )
                      "
                      rows="5"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>
                      {{ description.errorMessage.value }}
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
                Suba una imagen como minimo
              </b-form-invalid-feedback>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Cuéntanos de ti" :beforeChange="Step3" v-if="loginON">
          <b-card class="mt-1 mb-2">
            <b-form>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres">
                    <b-form-input
                      v-model="name.value.value"
                      :state="
                        validateState(name.value.value, name.errorMessage.value)
                      "
                      placeholder="Ingrese su nombre"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ name.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos">
                    <b-form-input
                      v-model="lastname.value.value"
                      :state="
                        validateState(
                          lastname.value.value,
                          lastname.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su apellidos"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ lastname.errorMessage.value }}
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
                      v-model="email.value.value"
                      :state="
                        validateState(
                          email.value.value,
                          email.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su correo"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback>
                      {{ email.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña">
                    <b-form-input
                      v-model="password.value.value"
                      :state="
                        validateState(
                          password.value.value,
                          password.errorMessage.value
                        )
                      "
                      v-on:input="confirmPassword.validate()"
                      placeholder="Ingrese su contraseña"
                      type="password"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="password.errorMessage.value"
                    >
                      {{ password.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Confirmar contraseña">
                    <b-form-input
                      v-model="confirmPassword.value.value"
                      :state="
                        validateState(
                          confirmPassword.value.value,
                          confirmPassword.errorMessage.value
                        )
                      "
                      v-on:input="password.validate()"
                      placeholder="Confirme su contraseña"
                      class="rounded-pill"
                      type="password"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="confirmPassword.errorMessage.value"
                    >
                      {{ confirmPassword.errorMessage.value }}
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
                      v-model="profession.value.value"
                      :state="true"
                      :options="professionOptions"
                      class="rounded-pill"
                      disabled
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito">
                    <b-form-select
                      v-model="district.value.value"
                      :state="true"
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
                      v-model="description.value.value"
                      :state="true"
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
                  v-for="(image, index) in form.imagesList.filter(
                    (image) => image.url !== ''
                  )"
                >
                  <div
                    class="form-image__file mb-3 mt-3"
                    :class="!image.url ? 'form-image__file--aux' : ''"
                  >
                    <img :src="image.url" alt="image" />
                  </div>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="mb-4" v-if="loginON">
              <h6 class="mb-3">Cuéntanos de ti</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Nombres">
                    <b-form-input
                      v-model="name.value.value"
                      :state="true"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos">
                    <b-form-input
                      v-model="lastname.value.value"
                      :state="true"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Correo electrónico">
                    <b-form-input
                      v-model="email.value.value"
                      :state="true"
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
                  v-model="conditions.value.value"
                  name="checkbox-1"
                  class="cursor-pointer"
                  :style="
                    validateStateColor(
                      conditions.value.value,
                      conditions.errorMessage.value
                    )
                  "
                >
                </b-form-checkbox>
                <p
                  :style="
                    validateStateColor(
                      conditions.value.value,
                      conditions.errorMessage.value
                    )
                  "
                >
                  Acepto los
                  <span class="btn_conditions" @click="showConditions = true">
                    términos y condiciones</span
                  >
                </p>
              </div>
              <b-form-invalid-feedback
                :state="conditions.errorMessage.value"
                style="margin-top: -15px"
              >
                {{ conditions.errorMessage.value }}
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
          @click="(showConditions = false), (conditions.value.value = true)"
          >Aceptar</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "@/utils/SweetAlert";
import { useRouter } from "vue-router";
import axios from "axios";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import { ref, computed, onBeforeMount } from "vue";
import { validateState } from "@/validate/globalValidate";
import useNewProyect from "@/validate/NewProyectValidate";
const URL = process.env.VUE_APP_BACK_URL;
const router = useRouter();
const loginON = ref<boolean>()

onBeforeMount(() => {
  const authData: string = window.localStorage.getItem("@AUTH:security") || "";
  if (authData) loginON.value=false
  else loginON.value=true
})

const {
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
  validateSteps,
} = useNewProyect();

//Variables Reactivas
const imageSelected = ref(0);
const showConditions = ref(false);

// Datos para prueba
const professionOptions = ref([
  { text: "Seleccione", value: "" },
  { text: "Pintor", value: 1 },
  { text: "Carpintero", value: 2 },
  { text: "Albañil", value: 3 },
  { text: "Gasfitero", value: 4 },
]);
const districtOptions = ref([
  { text: "Seleccione", value: "" },
  { text: "Los Olivos", value: 1 },
  { text: "SMP", value: 2 },
  { text: "Breña", value: 3 },
  { text: "Independecia", value: 4 },
]);

// Datos para enviar
const form = ref({
  profession: 0,
  district: 0,
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

const validateStateColor = (value: any, error: any) => {
  if (value === undefined && error === undefined)
    return "border-color: #7e7e7e";
  else if (error) return "color: #dc3545; border-color: #dc3545;";
  return "color: #198754; border-color: #198754;";
};

// validadores para cada paso del formulario
const Step1 = async (): Promise<boolean> => {
  const fields = {
    profession: profession.value.value,
    district: district.value.value,
  };

  const isValid = await validateSteps.validateStep1(fields);

  if (!isValid) {
    validateInput.inputValidateStep1();
  }

  form.value = { ...form.value, ...fields };

  return isValid;
};

const Step2 = async (): Promise<boolean> => {
  const fields = {
    description: description.value.value,
  };

  const isValid = await validateSteps.validateStep2(fields);
  const isValidRequired = imagenRequired.value; // control personalizado imagen

  if (!isValid) {
    validateInput.inputValidateStep2();
  }

  form.value = { ...form.value, ...fields };

  return isValid && isValidRequired;
};

const Step3 = async (): Promise<boolean> => {
  const fields = {
    name: name.value.value,
    lastname: lastname.value.value,
    email: email.value.value,
    password: password.value.value,
    confirmPassword: confirmPassword.value.value,
  };

  const isValid = await validateSteps.validateStep3(fields);

  if (!isValid) {
    validateInput.inputValidateStep3();
  }

  form.value = { ...form.value, ...fields };

  return isValid;
};

const Step4 = async (): Promise<boolean> => {
  const fields = {
    conditions: conditions.value.value,
  };

  const isValid = await validateSteps.validateStep4(fields);

  if (!isValid) {
    validateInput.inputValidateStep4();
  }

  if (isValid) {
    form.value = { ...form.value, ...fields };
    const value = form.value;

    const sendData = {
      customer: {
        name: value.name,
        lastName: value.lastname,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword,
      },
      projectRequest: {
        type: "2",
        detail: value.description,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword,
        professionId: value.profession,
        districtId: value.district,
        serviceTypeId: "1",
      },
    };

    try {
      alertLoading();
      const { data } = await axios.post(
        URL + "/register/new-proyect",
        sendData
      );
      await axios.post(URL + "/register/new-proyect/photos", {
        projectId: data.id,
      });
      alertSuccessfully("Proyecto registrado correctamente.");
      setTimeout(function () {
        closeAlert();
        router.push({ name: "login" });
      }, 1500);
      // console.log(data);
    } catch (error) {
      alertError("Sucedió un error durante el registro del nuevo proyecto");
    }
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
