<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <h1 class="text-center">Registro de Especialista</h1>
    </b-col>
    <b-col cols="12" md="8" class="mx-auto mt-4 px-0">
      <form-wizard
        shape
        color="#3a88ec"
        ref="formWizard"
        title=""
        subtitle=""
        class="px-4 px-lg-0"
      >
        <template slot="finish">
          <b-button
            variant="primary"
            class="step__button"
            @click="registerSpecialist"
            >Finalizar Registro</b-button
          >
        </template>
        <template slot="next">
          <b-button variant="primary" class="step__button">Siguiente</b-button>
        </template>
        <template slot="prev">
          <b-button variant="primary" class="step__button">Anterior</b-button>
        </template>
        <tab-content title="Datos personales" :beforeChange="validateDataForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm" validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      v-model="form.name"
                      type="text"
                      placeholder="Ingrese su nombre"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      v-model="form.lastName"
                      type="text"
                      placeholder="Ingrese su apellido"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Telefono" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.phone"
                      type="text"
                      placeholder="Ingrese su teléfono"
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Documento o cédula de identidad"
                    label-for="input-5"
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.document"
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      type="text"
                      placeholder="Ingrese su n° de documento"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Dirección" label-for="input-6">
                    <b-form-input
                      id="input-6"
                      v-model="form.adress"
                      type="text"
                      placeholder="Ingrese su dirección"
                      required
                      class="rounded-pill"
                    ></b-form-input>
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
        <tab-content title="Datos de trabajo" :beforeChange="validateWorkForm">
          <b-card class="mt-1 mb-2">
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5" class="px-0">
                <h5>Profesiones</h5>
                <b-form-group class="pl-3">
                  <b-form-checkbox-group
                    v-model="selected"
                    name="flavour-1"
                    stacked
                    class="mt-2"
                  >
                    <b-form-checkbox
                      class="cursor-pointer"
                      :value="option.value"
                      v-for="(option, index) in options"
                      :key="index"
                      >{{ option.text }}</b-form-checkbox
                    >
                  </b-form-checkbox-group>
                </b-form-group>
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

                <v-select
                  multiple
                  v-model="optionSelected"
                  :options="selectOptions"
                  :reduce="(option) => option.value"
                />
              </b-col>
              <b-col cols="12" class="mx-auto mt-4 mb-1">
                <h5>Experiencia en el rubro</h5>
                <div v-if="workExperience.length <= 0">
                  <span class="pl-3 info-error"
                    >No hay profesiones seleccionadas</span
                  >
                </div>
                <div v-else>
                  <b-row
                    v-for="(work, index) in workExperience"
                    :key="index"
                    class="mx-0 justify-content-between align-items-center mb-4 pt-4"
                  >
                    <b-col cols="12" lg="2" class="mb-4 mb-lg-0 work__name">{{
                      work.name
                    }}</b-col>
                    <b-col cols="12" md="6" lg="5" class="mb-5 mb-md-0">
                      <b-col
                        cols="9"
                        md="6"
                        class="justify-content-center mx-auto work__temp"
                      >
                        <div class="text-center work__date">Años</div>
                        <div
                          class="work__buttons work__buttons--left"
                          @click="substractYear(index)"
                        >
                          -
                        </div>
                        <b-form-input
                          v-model="workExperience[index].years"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          oninput="this.value = value.replace(/[^0-9]/g, '')"
                        ></b-form-input>
                        <div
                          class="work__buttons work__buttons--right"
                          @click="addYear(index)"
                        >
                          +
                        </div>
                      </b-col>
                    </b-col>
                    <b-col cols="12" md="6" lg="5">
                      <b-col
                        cols="9"
                        md="6"
                        class="justify-content-center mx-auto work__temp"
                      >
                        <div class="text-center work__date">Meses</div>
                        <div
                          class="work__buttons work__buttons--left"
                          @click="substractMonth(index)"
                        >
                          -
                        </div>
                        <b-form-input
                          v-model="workExperience[index].months"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          oninput="this.value = value.replace(/[^0-9]/g, '')"
                        ></b-form-input>
                        <div
                          class="work__buttons work__buttons--right"
                          @click="addMonth(index)"
                        >
                          +
                        </div>
                      </b-col>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </tab-content>
        <tab-content title="Datos de cuenta" :beforeChange="validateAcountForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="acountForm" validated>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Correo electrónico"
                    label-for="input-acount-1"
                  >
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
                <b-form-group class="pl-3">
                  <b-form-checkbox-group
                    v-model="selected"
                    name="flavour-1"
                    stacked
                    class="mt-2"
                    :options="options"
                    disabled
                  >
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5">
                <h5>Locaciones de trabajo</h5>
                <!-- <b-form-select
                  v-model="optionSelected"
                  :options="selectOptions"
                  class="mt-3"
                  disabled
                ></b-form-select> -->
                <v-select
                  multiple
                  v-model="optionSelected"
                  :options="selectOptions"
                  :reduce="(option) => option.value"
                  disabled
                />
              </b-col>
              <b-col cols="12" class="mx-auto mt-4">
                <h5>Experiencia en el rubro</h5>
                <div v-if="workExperience.length <= 0">
                  <span class="pl-3">No hay profesiones seleccionadas</span>
                </div>
                <div v-else>
                  <b-row
                    v-for="(work, index) in workExperience"
                    :key="index"
                    class="mx-0 justify-content-between align-items-center mb-4 pt-4"
                  >
                    <b-col cols="12" lg="2" class="mb-4 mb-lg-0 work__name">{{
                      work.name
                    }}</b-col>
                    <b-col cols="12" md="6" lg="5" class="mb-5 mb-md-0">
                      <b-col
                        cols="9"
                        md="6"
                        class="justify-content-center mx-auto work__temp"
                      >
                        <div class="text-center work__date">Años</div>

                        <b-form-input
                          v-model="workExperience[index].years"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          disabled
                        ></b-form-input>
                      </b-col>
                    </b-col>
                    <b-col cols="12" md="6" lg="5">
                      <b-col
                        cols="9"
                        md="6"
                        class="justify-content-center mx-auto work__temp"
                      >
                        <div class="text-center work__date">Meses</div>

                        <b-form-input
                          v-model="workExperience[index].months"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          disabled
                        ></b-form-input>
                      </b-col>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-card>
          <b-card class="mb-4">
            <h6 class="mb-3">Datos de cuenta</h6>
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5" class="mb-3">
                <b-form-group
                  label="Correo electrónico"
                  label-for="input-acount-1"
                >
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
      options: [
        { text: "Pintor", value: 0 },
        { text: "Carpintero", value: 1 },
        { text: "Albañil", value: 2 },
        { text: "Gasfitero", value: 3 },
      ],
      selectOptions: [
        { value: 0, label: "Los Olivos" },
        { value: 1, label: "SMP" },
        { value: 3, label: "Puente Piedra" },
        { value: 4, label: "Chorrillos" },
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
  watch: {
    selected(value, lastValue) {
      if (lastValue.length > value.length) {
        value.forEach((value) => {
          const index = lastValue.indexOf(value);
          lastValue.splice(index, 1);
        });

        const lastIndex = this.workExperience.findIndex(
          (work) => work.id == lastValue[0]
        );
        this.workExperience.splice(lastIndex, 1);
      } else {
        const lastAdd = value.length - 1;
        if (lastAdd >= 0) {
          console.log(value[lastAdd]);
          const res = this.options.find(
            (option) => option.value == value[lastAdd]
          );
          const work = {
            id: value[lastAdd],
            name: res.text,
            years: "",
            months: "",
          };

          this.workExperience.push(work);
        }
      }
    },
  },
};
</script>

<style>
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
</style>
