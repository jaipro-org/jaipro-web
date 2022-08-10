<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <h1 class="text-center">Nuevo proyecto</h1>
    </b-col>
    <b-col cols="12" md="8" class="mx-auto mt-4 px-0">
      <form-wizard shape color="#3a88ec" ref="formWizard" title="" subtitle="" class="px-4 px-lg-0">
        <template slot="finish">
          <b-button
            variant="primary"
            class="step__button"
            @click="registerSpecialist"
            >Registrar proyecto</b-button
          >
        </template>
        <template slot="next">
          <b-button
            variant="primary"
            class="step__button"
            >Siguiente</b-button
          >
        </template>
        <template slot="prev">
          <b-button
            variant="primary"
            class="step__button"
            >Anterior</b-button
          >
        </template>
        <tab-content title="Describe el servicio" :beforeChange="validateDataForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm" validated>
              <b-row class="mx-0 justify-content-between ">
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
                ref="form-data-button"
                class="form-step-button"
                type="submit"
              >
                go
              </button>
            </b-form>
          </b-card>
          
        </tab-content>
        <tab-content title="Describe tu proyecto">
          <b-card class="mt-1 mb-2">
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
                    no-resize
                    rows="5"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <br>
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
                    class="form-image__file mb-3"
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
                  <b-form-file
                    style="display: none"
                    :ref="`portadaFile${index}`"
                    hidden
                    @change="changeFileCover"
                  ></b-form-file>
              </b-col>
            </b-row>
          </b-card>
        </tab-content>
        <tab-content title="Cuéntanos de ti">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="acountForm" validated>
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
              <br>
              <h6 for="">Mi cuenta</h6>
              <hr>
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
                      v-model="form.confirmPassowrd"
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
        <tab-content title="Resumen">
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
                    no-resize
                    rows="5"
                    disabled
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <br>
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
                    class="form-image__file mb-3"
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
                  <b-form-file
                    style="display: none"
                    :ref="`portadaFile${index}`"
                    hidden
                    @change="changeFileCover"
                  ></b-form-file>
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
                      class="rounded-pill"
                      disabled
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
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Correo electrónico" label-for="txtEmail_r">
                  <b-form-input
                    id="txtEmail_r"
                    v-model="form.email"
                    type="email"
                    placeholder="Ingrese su usuario"
                    required
                    class="rounded-pill"
                    disabled
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
            >
              Acepto los términos y condiciones
            </b-form-checkbox>
          </div>
        </tab-content>
      </form-wizard>
    </b-col>
  </b-row>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      form: {
        profession: null,
        district: null,
        description: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
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
          }
        ],
      },
      workSelected: "",
      valid: "false",
      workExperience: [],
      selected: [],
      professionOptions: [
        { text: '-- Seleccione --', value: null },
        { text: "Pintor", value: 0 },
        { text: "Carpintero", value: 1 },
        { text: "Albañil", value: 2 },
        { text: "Gasfitero", value: 3 },
      ],
      districtOptions: [
        { text: '-- Seleccione --', value: null },
        { text: "Los Olivos", value: 0 },
        { text: "SMP", value: 1 },
        { text: "Breña", value: 2 },
        { text: "Independecia", value: 3 },
      ],
    };
  },
  methods: {
    validateDataForm() {
      this.$refs["form-data-button"].click();
      return this.$refs["dataForm"].checkValidity();
    },
    validateWorkForm() {
      return this.workExperience.length > 0;
    },
    validateAcountForm() {
      this.$refs["form-acount-button"].click();
      return this.$refs["acountForm"].checkValidity();
    },
    addYear(index) {
      this.workExperience[index].years++;
    },
    substractYear(index) {
      if (this.workExperience[index].years > 0) {
        this.workExperience[index].years--;
      }
    },
    addMonth(index) {
      this.workExperience[index].months++;
    },
    substractMonth(index) {
      if (this.workExperience[index].months > 0) {
        this.workExperience[index].months--;
      }
    },
    registerSpecialist() {
      console.log("Se registrará un expediente");
    },
    uploadImage(index) {
      this.imageSelected = index;
      const btnFile = this.$refs[`portadaFile${index}`][0].$el.children[0];
      btnFile.click();
    },
    changeFileCover(event) {
      const index = this.imageSelected;
      const file = event.target.files[0];
      if (!file) {
        this.form.imagesList[index].url = null;
        this.form.imagesList[index].file = null;
        return;
      }

      this.form.imagesList[index].file = file;
      const fr = new FileReader();
      fr.onload = () => (this.form.imagesList[index].url = fr.result);
      fr.readAsDataURL(file);
    },
    deleteImage(index) {
      this.form.imagesList[index].url = null;
      this.form.imagesList[index].file = null;
    },
  },
};
</script>

<style>
  .wizard-icon{
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
    position: absolute;
    top: 5px;
    right: 25px;
    font-size: 1.2rem;
    color: rgb(241, 46, 46);
    z-index: 10;
    cursor: pointer;
  }
</style>