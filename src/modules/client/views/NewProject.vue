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
            >Finalizar Registro</b-button
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
        <tab-content title="¿Qué servicio necesitas?" :beforeChange="validateDataForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm" validated>
              <b-row class="mx-0 justify-content-between ">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Profesión" label-for="input-3">
                    <b-form-select
                        id="input-3"
                        v-model="form.profession"
                        :options="professionOptions"
                        required
                        class="rounded-pill"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Distrito" label-for="input-6">
                    <b-form-select
                        id="input-6"
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
        <tab-content title="Describe tu proyecto" :beforeChange="validateWorkForm">
          <b-card class="mt-1 mb-2">
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5" class="px-0">
                <h5>Profesiones</h5>
              </b-col>
              <b-col cols="12" lg="5" class="px-0">
                <h5>Locaciones de trabajo</h5>
                <!-- <b-form-select
                  v-model="optionSelected"
                  :options="selectOptions"
                  class="mt-3"
                  multiple 
                ></b-form-select>
                -->

                <!-- <v-select
                  multiple
                  v-model="optionSelected"
                  :options="selectOptions"
                  :reduce="option => option.value"
                /> -->
              </b-col>
              <b-col cols="12" class="mx-auto mt-4 mb-1">
                <h5>Experiencia en el rubro</h5>
                
              </b-col>
            </b-row>
          </b-card>
        </tab-content>
        <tab-content title="Cuentanos de ti" :beforeChange="validateAcountForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="acountForm" validated>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Correo electrónico" label-for="input-acount-1">
                    <b-form-input
                      id="input-acount-1"
                      v-model="form.email"
                      type="email"
                      placeholder="Ingrese su usuario"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña" label-for="input-acount-2">
                    <b-form-input
                      id="input-acount-2"
                      v-model="form.password"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <!-- Balancea la posicion de columnas -->
                <b-col cols="12" lg="5" class="mb-3"> </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group
                    label="Confirmar Contraseña"
                    label-for="input-acount-2"
                  >
                    <b-form-input
                      id="input-acount-2"
                      v-model="form.confirmPassowrd"
                      type="password"
                      placeholder="Ingrese su contraseña nuevamente"
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
            <h6 class="mb-3">Datos Personales</h6>
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Nombres" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.name"
                    type="text"
                    placeholder="Ingrese su nombre"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Apellidos" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.lastName"
                    type="text"
                    placeholder="Ingrese su apellido"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Telefono" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.phone"
                    type="text"
                    placeholder="Ingrese su teléfono"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group
                  label="Documento o cédula de identidad"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    v-model="form.document"
                    type="text"
                    placeholder="Ingrese su n° de documento"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Dirección" label-for="input-6">
                  <b-form-input
                    id="input-6"
                    v-model="form.adress"
                    type="text"
                    placeholder="Ingrese su dirección"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
          <b-card class="mb-4">
            <h6 class="mb-3">Datos de trabajo</h6>
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5">
                <h5>Profesiones</h5>
              </b-col>
              <b-col cols="12" lg="5">
                <h5>Locaciones de trabajo</h5>
              </b-col>
              <b-col cols="12" class="mx-auto mt-4">
                <h5>Experiencia en el rubro</h5>
              </b-col>
            </b-row>
          </b-card>
          <b-card class="mb-4">
            <h6 class="mb-3">Datos de cuenta</h6>
            <b-row class="mx-0 justify-content-between ">
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Correo electrónico" label-for="input-acount-1">
                  <b-form-input
                    id="input-acount-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Ingrese su usuario"
                    required
                    class="rounded-pill"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group label="Contraseña" label-for="input-acount-2">
                  <b-form-input
                    id="input-acount-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    disabled
                    required
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
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
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
        phone: "",
        name: "",
        lastName: "",
        document: "",
        adress: "",
        email: "",
        password: "",
        confirmPassword: "",
        conditions: false,
      },
      workSelected: "",
      valid: "false",
      workExperience: [],
      selected: [],
      optionSelected: [1],
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
</style>