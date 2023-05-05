<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <register-title title="Registro de Especialista"></register-title>
    </b-col>
    <b-col cols="12" md="8" class="mx-auto mt-4 px-0">
      <form-wizard
        shape="circle"
        color="#3a88ec"
        ref="formWizard"
        title=""
        subtitle=""
        class="px-4 px-lg-0"
        :class="{ 'wizard-small-title': !isWeb }"
        :stepSize="isWeb ? 'md' : 'sm'"
      >
        <template v-slot:finish>
          <b-button
            variant="primary"
            class="step__button"
            @click="registerSpecialist"
            >Finalizar</b-button
          >
        </template>
        <template v-slot:next>
          <b-button variant="primary" class="step__button">Siguiente</b-button>
        </template>
        <template v-slot:prev>
          <b-button variant="primary" class="step__button">Atras</b-button>
        </template>
        <tab-content title="Datos personales" :beforeChange="Step1">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm">
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres" label-for="input-33">
                    <b-form-input
                      id="input-33"
                      v-model="name.value.value"
                      :state="
                        validateState(name.value.value, name.errorMessage.value)
                      "
                      placeholder="Ingrese su nombre"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="name.errorMessage.value">
                      {{ name.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos" label-for="input-44">
                    <b-form-input
                      id="input-44"
                      v-model="lastName.value.value"
                      :state="
                        validateState(
                          lastName.value.value,
                          lastName.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su apellido"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="lastName.errorMessage.value"
                    >
                      {{ lastName.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Celular" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="phone.value.value"
                      :state="
                        validateState(
                          phone.value.value,
                          phone.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su teléfono"
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="phone.errorMessage.value">
                      {{ phone.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Documento o cédula de identidad"
                    label-for="input-55"
                  >
                    <b-form-input
                      id="input-55"
                      v-model="document.value.value"
                      :state="
                        validateState(
                          document.value.value,
                          document.errorMessage.value
                        )
                      "
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      type="text"
                      placeholder="Ingrese su n° de documento"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="document.errorMessage.value"
                    >
                      {{ document.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Dirección" label-for="input-66">
                    <b-form-input
                      id="input-66"
                      v-model="address.value.value"
                      :state="
                        validateState(
                          address.value.value,
                          address.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su dirección"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="address.errorMessage.value"
                    >
                      {{ address.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <button ref="dataButton" class="form-step-button" type="submit">
                go
              </button>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Datos de cuenta" :beforeChange="Step2">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="acountForm">
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Correo electrónico"
                    label-for="input-acount-1"
                  >
                    <b-form-input
                      id="input-acount-1"
                      v-model="email.value.value"
                      :state="
                        validateState(
                          email.value.value,
                          email.errorMessage.value
                        )
                      "
                      placeholder="Ingrese su Correo"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="email.errorMessage.value">
                      {{ email.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña" label-for="input-acount-222">
                    <b-form-input
                      id="input-acount-222"
                      v-model="password.value.value"
                      :state="
                        validateState(
                          password.value.value,
                          password.errorMessage.value
                        )
                      "
                      @input="confirmPassword.validate()"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="password.errorMessage.value"
                    >
                      {{ password.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <!-- Balancea la posicion de columnas -->
                <b-col cols="12" lg="5" class="mb-3 px-0"> </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Confirmar Contraseña"
                    label-for="input-acount-2"
                  >
                    <b-form-input
                      id="input-acount-2"
                      v-model="confirmPassword.value.value"
                      :state="
                        validateState(
                          confirmPassword.value.value,
                          confirmPassword.errorMessage.value
                        )
                      "
                      @input="password.validate()"
                      type="password"
                      placeholder="Ingrese su contraseña nuevamente"
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="confirmPassword.errorMessage.value"
                    >
                      {{ confirmPassword.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <button ref="acountButton" class="form-step-button" type="submit">
                go
              </button>
            </b-form>
          </b-card>
        </tab-content>
        <tab-content title="Datos de trabajo" :beforeChange="Step3">
          <b-card class="mt-1 mb-2">
            <b-row class="mx-0 justify-content-between">
              <b-col cols="12" lg="5" class="px-0">
                <h5>Profesiones</h5>
                <b-form-group class="ps-3">
                  <b-form-checkbox-group
                    v-model="listProfession.value.value"
                    name="flavour-1"
                    stacked
                    class="mt-2"
                    :options="workOptions"
                  >
                  </b-form-checkbox-group>
                  <b-form-invalid-feedback
                    :state="listProfession.errorMessage.value"
                  >
                    {{ listProfession.errorMessage.value }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="px-0 d-none d-lg-block">
                <h5>Locaciones de trabajo</h5>
                <v-select
                  multiple
                  v-model="location.value.value"
                  :options="locationOptions"
                  :reduce="(option:locationType) => option.value"
                  placeholder="Seleccione"
                />
                <b-form-invalid-feedback :state="location.errorMessage.value">
                  {{ location.errorMessage.value }}
                </b-form-invalid-feedback>
              </b-col>
              <b-col cols="12" class="mx-auto mt-4 mb-1">
                <div v-if="workExperience.length <= 0">
                  <!-- <h5>Experiencia en el rubro</h5>
                  <span class="ps-3 info-.errorMessage.value"
                    >No hay profesiones seleccionadas</span
                  > -->
                </div>
                <div v-else>
                  <h5>Experiencia en el rubro</h5>
                  <b-row
                    v-for="(work, index) in workExperience"
                    :key="index"
                    class="mx-0 justify-content-between align-items-center mb-4 pt-4"
                  >
                    <b-col cols="12" lg="3" class="mb-4 mb-lg-0 work__name">{{
                      work.name
                    }}</b-col>
                    <b-col cols="12" lg="9" class="mb-5 mb-lg-0 work__temp">
                      <TimeComponent
                        title="Años"
                        v-model="workExperience[index].years"
                        class="mx-0 me-lg-5"
                      ></TimeComponent>
                      <TimeComponent
                        class="mx-0 ms-lg-5"
                        title="Meses"
                        v-model="workExperience[index].months"
                      ></TimeComponent>
                    </b-col>
                    <b-form-invalid-feedback :state="countExperience(index)">
                      minimo 1 mes de experiencia
                    </b-form-invalid-feedback>
                  </b-row>
                </div>
              </b-col>
              <b-col cols="12" lg="5" class="px-0 d-block d-lg-none">
                <h5>Locaciones de trabajo</h5>

                <v-select
                  multiple
                  v-model="locationSelected"
                  :options="locationOptions"
                  :reduce="(option:any) => option.value"
                />
              </b-col>
            </b-row>
          </b-card>
        </tab-content>
        <tab-content title="Resumen" :beforeChange="Step4">
          <template v-if="isStepResumenValid">
            <b-card class="mb-4">
              <h6 class="mb-3">Datos Personales</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Nombres" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      v-model="name.value.value"
                      :state="true"
                      placeholder="Ingrese su nombre"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      v-model="lastName.value.value"
                      :state="true"
                      placeholder="Ingrese su apellido"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Telefono" label-for="input-22">
                    <b-form-input
                      id="input-22"
                      v-model="phone.value.value"
                      :state="true"
                      placeholder="Ingrese su teléfono"
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
                      v-model="document.value.value"
                      :state="true"
                      placeholder="Ingrese su n° de documento"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Dirección" label-for="input-6">
                    <b-form-input
                      id="input-6"
                      v-model="address.value.value"
                      :state="true"
                      placeholder="Ingrese su dirección"
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
                  <b-form-group class="ps-3">
                    <b-form-checkbox-group
                      v-model="workList.workSelected"
                      name="flavour-1"
                      stacked
                      class="mt-2"
                      :options="workOptionsResume"
                    >
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="d-none d-lg-block">
                  <h5>Locaciones de trabajo</h5>
                  <v-select
                    multiple
                    v-model="locationSelected"
                    :options="locationOptions"
                    :reduce="(option:any) => option.value"
                    disabled
                  />
                </b-col>
                <b-col cols="12" class="mx-auto mt-4">
                  <h5>Experiencia en el rubro</h5>
                  <div v-if="workExperience.length <= 0">
                    <span class="ps-3">No hay profesiones seleccionadas</span>
                  </div>
                  <div v-else>
                    <b-row
                      v-for="(work, index) in workExperience"
                      :key="index"
                      class="mx-0 justify-content-between align-items-center mb-4 pt-4"
                    >
                      <b-col cols="12" lg="3" class="mb-4 mb-lg-0 work__name">{{
                        work.name
                      }}</b-col>
                      <b-col
                        cols="12"
                        lg="9"
                        class="mb-5 mb-lg-0 work__temp work__temp--resumen"
                      >
                        <TimeComponent
                          title="Años"
                          v-model="workExperience[index].years"
                          class="me-3 me-lg-5"
                          :haveActions="false"
                          disabled
                        ></TimeComponent>
                        <TimeComponent
                          class="ms-3 ms-lg-5"
                          title="Meses"
                          v-model="workExperience[index].months"
                          :haveActions="false"
                          disabled
                        ></TimeComponent>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col cols="12" lg="5" class="d-block d-lg-none">
                  <h5>Locaciones de trabajo</h5>
                  <v-select
                    multiple
                    v-model="locationSelected"
                    :options="locationOptions"
                    :reduce="(option:any) => option.value"
                    disabled
                  />
                </b-col>
              </b-row>
            </b-card>
            <b-card class="mb-4">
              <h6 class="mb-3">Datos de cuenta</h6>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group
                    label="Correo electrónico"
                    label-for="input-acount-11"
                  >
                    <b-form-input
                      id="input-acount-11"
                      v-model="email.value.value"
                      :state="true"
                      placeholder="Ingrese su usuario"
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Contraseña" label-for="input-acount-22">
                    <b-input-group>
                      <b-form-input
                        id="input-acount-22"
                        v-model="password.value.value"
                        :type="typePassword"
                        :state="true"
                        placeholder="Ingrese su contraseña"
                        disabled
                        class="rounded-pill input-password"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button
                          text="Button"
                          variant="secondary"
                          @click="changeTypePassword"
                        >
                          <i
                            class="fa-regular fa-eye"
                            v-if="typePassword == 'text'"
                          ></i>
                          <i class="fa-solid fa-eye-slash" v-else></i
                        ></b-button>
                      </b-input-group-append>
                    </b-input-group>
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
          </template>
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
  computed,
  ref,
  reactive,
  watch,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  nextTick,
} from "vue";

import { useRouter } from "vue-router";

// COMPONENTS
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import TimeComponent from "./components/TimeComponent.vue";
import RegisterTitle from "./components/RegisterTitle.vue";

// FUNCTIONS
import {
  alertError,
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "../../../utils/SweetAlert";

//VEE-VALIDATE + YUP
import { validateState, validateStateColor } from "@/validate/globalValidate";
import useRegisterSpecialistValidate from "@/validate/registerSpecialistValidate";

// SERVICES
import { GeneralServices } from "../../../services/api/generalServices";
import { AuthServices } from "@/services/api/authServices";
import { useLoginStore } from "@/store";

const generalServices = new GeneralServices();
const authServices = new AuthServices();
const {
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
} = useRegisterSpecialistValidate();

const router = useRouter();
let windowWidth = ref(window.innerWidth); // Obtener el tamaño de la ventana
let typePassword: any = ref("password"); // Type password
const showConditions = ref(false); //
const isStepResumenValid = ref(false); // activa resumen

var form = reactive({
  name: "",
  lastName: "",
  phone: "",
  document: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: false,
});

//#region FUNCIONES PARA OBTENER EL TAMAÑO DE LA PANTALLA
onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};
//#endregion

//#region OTRAS FUNCIONES
const isWeb = computed(() => {
  return windowWidth.value > 950 ? true : false;
});

const changeTypePassword = () => {
  typePassword.value = typePassword.value == "password" ? "text" : "password";
};
//#endregion

//START - REGISTER SPECIALIST
type work = { text: string; value: number; disabled?: boolean }; //estructura profesiones
type workExperience = {
  years: number;
  months: number;
  id: number;
  name: string;
};
type locationType = { label: string; value: number };
const workList: {
  workSelected: Array<number>;
} = reactive({
  workSelected: [],
});
const workOptions: Array<work> = reactive([]);
const workOptionsResume: Array<work> = reactive([]);
const workExperience: Array<workExperience> = reactive([]);

const locationSelected = ref([] as Array<number>);
const locationOptions: Array<locationType> = reactive([]);

watch(
  () => workList.workSelected,
  (newValue: Array<number>, lastValue: Array<number>) => {
    // ELIMINAR UN TRABAJO
    if (lastValue.length > newValue.length) {
      newValue.forEach((value: number) => {
        const index = lastValue.indexOf(value);
        lastValue.splice(index, 1);
      });

      const lastIndex = workExperience.findIndex(
        (work) => work.id == lastValue[0]
      );
      workExperience.splice(lastIndex, 1);
    }
    // AGREGAR UN TRABAJO
    else {
      const list = [...newValue];
      lastValue.forEach((value: any) => {
        const index = list.indexOf(value);
        list.splice(index, 1);
      });
      const workFind = workOptions.find((work) => work.value == list[0]);
      if (workFind) {
        const work = {
          id: list[0],
          name: workFind.text,
          years: 0,
          months: 0,
        };
        workExperience.push(work);
      }
    }
  }
);
watch(listProfession.value, () => {
  workList.workSelected = listProfession.value.value;
});
watch(location.value, () => {
  locationSelected.value = location.value.value;
});

type profession = {
  createdBy: string;
  creationDate: string;
  modifiedBy: null;
  modifiedDate: null;
  id: number;
  name: string;
};
type district = {
  createdBy: string;
  creationDate: string;
  modifiedBy: null;
  modifiedDate: null;
  id: number;
  name: string;
  zone: number;
  numericCode: string;
  countryId: string;
};
let professionalList: Array<profession> = [];
let districtList: Array<district> = [];

onBeforeMount(async () => {
  try {
    districtList = await generalServices.getDistrictList();
    professionalList = await generalServices.getProfessionList();

    professionalList.forEach((profesional: profession) => {
      workOptions.push({
        text: profesional.name,
        value: profesional.id,
      });

      workOptionsResume.push({
        text: profesional.name,
        value: profesional.id,
        disabled: true,
      });
    });
    districtList.forEach((district: district) => {
      locationOptions.push({
        value: district.id,
        label: district.name,
      });
    });
  } catch (error) {
    alertError("Sucedió un problema durante el proceso.");
  }
});

//#region VALIDATION STEPS
const dataButton = ref();
const dataForm = ref();
const acountButton = ref();
const acountForm = ref();
//#endregion

//#region Pasos para el BeforeChange
const Step1 = async () => {
  const fields = {
    name: name.value.value,
    lastName: lastName.value.value,
    phone: phone.value.value,
    document: document.value.value,
    address: address.value.value,
  };

  const isValid = await validateStep1(fields);

  if (!isValid) {
    name.validate();
    lastName.validate();
    phone.validate();
    document.validate();
    address.validate();
  }

  form = { ...form, ...fields };

  return isValid;
};

const Step2 = async () => {
  const fields = {
    email: email.value.value,
    password: password.value.value,
    confirmPassword: confirmPassword.value.value,
  };

  const isValid = await validateStep2(fields);

  if (!isValid) {
    email.validate();
    password.validate();
    confirmPassword.validate();
  }

  form = { ...form, ...fields };

  return isValid;
};

const Step3 = async () => {
  const cantWork = workExperience; // lista de experiencias
  var validateExperience = false;

  const fields = {
    location: location.value.value,
    listProfession: listProfession.value.value,
  };

  const isValid = await validateStep3(fields);

  if (!isValid) {
    location.validate();
    listProfession.validate();
  }

  //Verifica minimo experiencia 1 mes
  if (cantWork.length !== 0) {
    validateExperience = cantWork?.every((x) => x.years > 0 || x.months > 0);
  }

  if (validateExperience && isValid) {
    isStepResumenValid.value = true;
    return true;
  } else {
    return false;
  }
};

const Step4 = async () => {
  const fields = {
    conditions: conditions.value.value,
  };

  const isValid = await validateStep4(fields);

  if (!isValid) {
    conditions.validate();
  }

  form = { ...form, ...fields };

  return isValid;
};

//validadores experiencia
const countExperience = (index: any) => {
  const expWork = workExperience;
  if (expWork[index].months === 0 && expWork[index].years === 0) return false;
  else return true;
};
//#endregion

//#region REGISTER SPECIALIST
const useLogin = useLoginStore();
const structureDataRegister = () => {
  const specialistSpecializations: Array<any> = [];
  const experienceTimes: Array<any> = [];
  const workLocations: Array<any> = [];

  professionalList.forEach((profession: profession) => {
    if (workList.workSelected.includes(profession.id)) {
      specialistSpecializations.push({
        specializationId: profession.id,
        professionId: profession.id,
      });

      const experience = workExperience.find(
        (workExp) => workExp.id == profession.id
      );

      if (experience) {
        experienceTimes.push({
          professionId: profession.id,
          professionName: profession.name,
          time: experience?.years * 12 + experience?.months,
        });
      }
    }
  });
  districtList.forEach((district: district) => {
    if (locationSelected.value.includes(district.id)) {
      workLocations.push({
        districtId: district.id,
        countryId: district.countryId,
      });
    }
  });

  return { specialistSpecializations, experienceTimes, workLocations };
};
const registerSpecialist = async () => {
  try {
    if (!conditions.value.value) {
      alertError("Debe aceptar los términos y condiciones.");
      return;
    }
    alertLoading("Registrando al usuario especialista.");

    const { specialistSpecializations, experienceTimes, workLocations } =
      structureDataRegister();

    await authServices.createSpecialist({
      name: form.name,
      lastName: form.lastName,
      phone: form.phone,
      address: form.address,
      document: form.document,
      email: form.email,
      password: form.password,
      specialistSpecializations,
      workLocations,
      specialistCv: {
        experienceTimes,
      },
    });

    alertLoading("Iniciando sesión del usuario.");
    await useLogin.loginUser({
      email: form.email,
      password: form.password,
    });

    alertSuccessfully("Especialista registrado exitosamente!!");
    setTimeout(function () {
      router.push({ name: "specialist-profile" });
      closeAlert();
    }, 2500);
  } catch (error) {
    alertError("Sucedió un error durante el proceso.");
  }
};
//#endregion
</script>

<style>
.wizard-small-title .wizard-navigation .wizard-nav li a {
  font-size: 13px !important;
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
  padding: 0 28px;
  display: flex;
  flex-wrap: nowrap;
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

.input-password {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.btn_conditions {
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 950px) {
  .work__temp {
    /* padding: 0 10px; */
    flex-wrap: wrap;
  }

  .work__temp--resumen {
    flex-wrap: nowrap;
  }

  .wizard-progress-with-circle {
    top: calc(50px / 2 + 5px) !important;
  }
}
</style>
