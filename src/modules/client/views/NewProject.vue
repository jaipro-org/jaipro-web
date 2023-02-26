<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <h1 class="text-center title">Nuevo proyecto</h1>
    </b-col>
    <b-col cols="12" md="8" class="mx-auto mt-4 px-0">
      <form-wizard
        shape
        color="#3a88ec"
        ref="formWizard"
        title=""
        subtitle=""
        class="px-lg-0"
        next-button-text="Siguiente"
        back-button-text="Atras"
        finish-button-text="Registrar proyecto"
      >
        <tab-content
          title="Describe el servicio"
          :beforeChange="validateDataForm"
        >
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm" id="formMain" validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión" label-for="txtProfession">
                    <b-form-select
                      id="txtProfession"
                      v-model="form.profession"
                      :options="professionOptions"
                      required
                      class="rounded-pill"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito" label-for="txtDistrict">
                    <b-form-select
                      id="txtDistrict"
                      v-model="form.district"
                      :options="districtOptions"
                      required
                      class="rounded-pill"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <button
                ref="formDataButton"
                class="form-step-button"
                type="submit"
              >
                go
              </button>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content
          title="Describe tu proyecto"
          :beforeChange="validateDescribe"
        >
          <b-card class="mt-1 mb-2">
            <b-form
              @submit.prevent=""
              ref="dataDescribe"
              id="formDescribe"
              validated
            >
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" class="px-0">
                  <b-form-group
                    label="Describe el servicio"
                    label-for="txtDescription"
                    class="mb-0"
                  >
                    <b-form-textarea
                      id="txtDescription"
                      v-model="form.description"
                      placeholder="..."
                      rows="5"
                      required
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
                    hidden
                    @change="changeFileCover"
                  />
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Cuéntanos de ti" :beforeChange="validateAcountForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" id="acountForm" validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres" label-for="txtName">
                    <b-form-input
                      id="txtName"
                      v-model="form.name"
                      placeholder="Ingrese su nombre"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos" label-for="txtLastname">
                    <b-form-input
                      id="txtLastname"
                      v-model="form.lastname"
                      placeholder="Ingrese su apellidos"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <br />
              <h6 for="">Mi cuenta</h6>
              <hr />
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Correo electrónico" label-for="txtEmail">
                    <b-form-input
                      id="txtEmail"
                      v-model="form.email"
                      type="email"
                      placeholder="Ingrese su correo"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña" label-for="txtPassword">
                    <b-form-input
                      id="txtPassword"
                      v-model="form.password"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Confirmar contraseña"
                    label-for="txtConfirmPassword"
                  >
                    <b-form-input
                      id="txtConfirmPassword"
                      v-model="form.confirmPassword"
                      type="password"
                      placeholder="Confirme su contraseña"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <button
                ref="form-acount-button"
                class="form-step-button"
                type="submit"
              >
                go
              </button>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Resumen" :beforeChange="validateResume">
          <b-form validated id="formResumen">
            <b-card class="mb-4">
              <h6 class="mb-3">Describe el servicio</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión" label-for="txtProfession_r">
                    <b-form-select
                      id="txtProfession_r"
                      v-model="form.profession"
                      :options="professionOptions"
                      required
                      class="rounded-pill"
                      disabled
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito" label-for="txtDistrict_r">
                    <b-form-select
                      id="txtDistrict_r"
                      v-model="form.district"
                      :options="districtOptions"
                      required
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
                  <b-form-group
                    label="Describe el servicio"
                    label-for="txtDescription_r"
                    class="mb-0"
                  >
                    <b-form-textarea
                      id="txtDescription_r"
                      v-model="form.description"
                      placeholder="..."
                      required
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
                  <b-form-group label="Nombres" label-for="txtName_r">
                    <b-form-input
                      id="txtName_r"
                      v-model="form.name"
                      placeholder="Ingrese su nombre"
                      required
                      disabled
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos" label-for="txtLastname_r">
                    <b-form-input
                      id="txtLastname_r"
                      v-model="form.lastname"
                      placeholder="Ingrese su apellidos"
                      required
                      disabled
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group
                    label="Correo electrónico"
                    label-for="txtEmail_r"
                  >
                    <b-form-input
                      id="txtEmail_r"
                      v-model="form.email"
                      type="email"
                      placeholder="Ingrese su usuario"
                      required
                      disabled
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card>
            <div class="mb-4">
              <b-form-checkbox
                v-model="form.conditions"
                name="checkbox-1"
                class="cursor-pointer"
                required
              >
                Acepto los
                <span class="btn_conditions" @click="showConditions = true"
                  >términos y condiciones</span
                >
              </b-form-checkbox>
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
          @click="(showConditions = false), (form.conditions = true)"
          >Aceptar</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { alertError, alertSuccessButton } from "../../../utils/SweetAlert";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import { ref } from "vue";

const formDataButton = ref<HTMLButtonElement>();
const dataForm = ref<HTMLFormElement>();

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
const imageSelected = ref(0);
const showConditions = ref(false);
const professionOptions = ref([
  { text: "Pintor", value: 0 },
  { text: "Carpintero", value: 1 },
  { text: "Albañil", value: 2 },
  { text: "Gasfitero", value: 3 },
]);
const districtOptions = ref([
  { text: "Los Olivos", value: 0 },
  { text: "SMP", value: 1 },
  { text: "Breña", value: 2 },
  { text: "Independecia", value: 3 },
]);

function validateDataForm() {
  if (form.value.profession === "" || form.value.district === "") {
    alertError("Algunos campos estan vacios.");
    return;
  }
  formDataButton.value!.click();
  const form2 = document.getElementById("formMain") as HTMLFormElement;
  return form2.checkValidity();
}
function validateDescribe() {
  if (form.value.description === "") {
    alertError("Escriba la descripcion del servicio.");
    return;
  }
  if (!form.value.imagesList.some((x) => x.url !== "")) {
    alertError("Suba una foto de referencia como minimo.");
    return;
  }
  formDataButton.value!.click();
  const form2 = document.getElementById("formDescribe") as HTMLFormElement;
  return form2.checkValidity();
}
function validateAcountForm() {
  if (
    form.value.password === "" ||
    form.value.name === "" ||
    form.value.lastname === "" ||
    form.value.confirmPassword === "" ||
    form.value.email === ""
  ) {
    alertError("Algunos campos estan vacios");
    return;
  }
  if (form.value.password !== form.value.confirmPassword) {
    alertError("Las contraseñas deben ser iguales.");
    return;
  }
  formDataButton.value!.click();
  const form2 = document.getElementById("acountForm") as HTMLFormElement;
  return form2.checkValidity();
}
function validateResume() {
  if (!form.value.conditions) {
    alertError("Debe de aceptar los terminos y condiciones.");
  } else {
    formDataButton.value!.click();
    const form2 = document.getElementById("formResumen") as HTMLFormElement;
    alertSuccessButton("Proyecto registrado.");
    return form2.checkValidity();
  }
}
function registerSpecialist() {
  console.log("Se registrará un expediente");
}
function uploadImage(index: any) {
  imageSelected.value = index;
  // const btnFile = this.$refs[`portadaFile${index}`][0].$el.children[0];
  const btnFile: any = document.getElementById(`portadaFile${index}`);
  btnFile.click();
}
function changeFileCover(event: any) {
  const index = imageSelected.value;
  const file = event.target.files[0];
  if (!file) {
    form.value.imagesList[index].url = "";
    form.value.imagesList[index].file = null;
    return;
  }
  form.value.imagesList[index].file = file;
  const fr = new FileReader();
  fr.onload = () => (form.value.imagesList[index].url = String(fr.result));
  fr.readAsDataURL(file);
  event.target.value = ""; // Restablecer valor del input
}
function deleteImage(index: any) {
  form.value.imagesList[index].url = "";
  form.value.imagesList[index].file = null;
}
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
