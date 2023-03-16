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
            <b-form @submit.prevent="" ref="dataForm" validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres" label-for="input-33">
                    <b-form-input
                      id="input-33"
                      v-model="nameValue"
                      type="text"
                      placeholder="Ingrese su nombre"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="nameError">
                      {{ nameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos" label-for="input-44">
                    <b-form-input
                      id="input-44"
                      v-model="lastNameValue"
                      type="text"
                      placeholder="Ingrese su apellido"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="lastNameError">
                      {{ lastNameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Telefono" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="phoneValue"
                      type="text"
                      placeholder="Ingrese su teléfono"
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="phoneError">
                      {{ phoneError }}
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
                      v-model="documentValue"
                      oninput="this.value = value.replace(/[^0-9]/g, '')"
                      type="text"
                      placeholder="Ingrese su n° de documento"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="documentError">
                      {{ documentError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Dirección" label-for="input-66">
                    <b-form-input
                      id="input-66"
                      v-model="addressValue"
                      type="text"
                      placeholder="Ingrese su dirección"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="addressError">
                      {{ addressError }}
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
            <b-form @submit.prevent="" ref="acountForm" validated>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group
                    label="Correo electrónico"
                    label-for="input-acount-1"
                  >
                    <b-form-input
                      id="input-acount-1"
                      v-model="emailValue"
                      type="email"
                      placeholder="Ingrese su usuario"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="emailError">
                      {{ emailError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Contraseña" label-for="input-acount-222">
                    <b-form-input
                      id="input-acount-222"
                      v-model="passwordValue"
                      @input="confirmPasswordValidate()"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="passwordError">
                      {{ passwordError }}
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
                      v-model="confirmPasswordValue"
                      @input="passwordValidate()"
                      type="password"
                      placeholder="Ingrese su contraseña nuevamente"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="confirmPasswordError">
                      {{ confirmPasswordError }}
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
                    v-model="workList.workSelected"
                    name="flavour-1"
                    stacked
                    class="mt-2"
                    :options="workOptions"
                  >
                  </b-form-checkbox-group>
                  <b-form-invalid-feedback :state="profesionRequired">
                    Seleccione 1 profesión como minimo
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="px-0 d-none d-lg-block">
                <h5>Locaciones de trabajo</h5>
                <v-select
                  multiple
                  v-model="locationSelected"
                  :options="locationOptions"
                  :reduce="(option:location) => option.value"
                />
                <b-form-invalid-feedback :state="locationRequired">
                  Seleccione 3 Locaciones como maximo
                </b-form-invalid-feedback>
              </b-col>
              <b-col cols="12" class="mx-auto mt-4 mb-1">
                <h5>Experiencia en el rubro</h5>
                <div v-if="workExperience.length <= 0">
                  <span class="ps-3 info-error"
                    >No hay profesiones seleccionadas</span
                  >
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
                      v-model="nameValue"
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
                      v-model="lastNameValue"
                      type="text"
                      placeholder="Ingrese su apellido"
                      required
                      class="rounded-pill"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Telefono" label-for="input-22">
                    <b-form-input
                      id="input-22"
                      v-model="phoneValue"
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
                      v-model="documentValue"
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
                      v-model="addressValue"
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
                      v-model="emailValue"
                      type="email"
                      placeholder="Ingrese su usuario"
                      required
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
                        v-model="passwordValue"
                        :type="typePassword"
                        placeholder="Ingrese su contraseña"
                        disabled
                        required
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
          @click="(showConditions = false), (conditionsValue = true)"
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
import { useField } from "vee-validate";
import * as yup from "yup";

// SERVICES
import { GeneralServices } from "../../../services/api/generalServices";
import { AuthServices } from "@/services/api/authServices";
import { useStore } from "vuex";

const generalServices = new GeneralServices();
const authServices = new AuthServices();

const router = useRouter();
let windowWidth = ref(window.innerWidth); // Obtener el tamaño de la ventana
let typePassword: any = ref("password"); // Type password
const showConditions = ref(false);
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

//#region ESQUEMA YUP
const schema = {
  name: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido"),
  document: yup
    .string()
    .matches(/^[0-9]+$/, "Campo requerido")
    .required("Campo requerido"),
  address: yup.string().required("Campo requerido"),
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
//#endregion

//#region VEE-VALIDATE USEFIELD
const {
  value: nameValue,
  errorMessage: nameError,
  validate: nameValidate,
} = useField("name", schema.name);
const {
  value: lastNameValue,
  errorMessage: lastNameError,
  validate: lastNameValidate,
} = useField("lastName", schema.lastName);
const {
  value: phoneValue,
  errorMessage: phoneError,
  validate: phoneValidate,
} = useField("phone", schema.phone);
const {
  value: documentValue,
  errorMessage: documentError,
  validate: documentValidate,
} = useField("document", schema.document);
const {
  value: addressValue,
  errorMessage: addressError,
  validate: addressValidate,
} = useField("address", schema.address);
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
//#endregion

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
type work = { text: string; value: number; disabled?: boolean };
type workExperience = {
  years: number;
  months: number;
  id: number;
  name: string;
};
type location = { label: string; value: number };
const workList: {
  workSelected: Array<number>;
} = reactive({
  workSelected: [],
});
const workOptions: Array<work> = reactive([]);
const workOptionsResume: Array<work> = reactive([]);
const workExperience: Array<workExperience> = reactive([]);

const locationSelected = ref([] as Array<number>);
const locationOptions: Array<location> = reactive([]);

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
function prueba() {
  return true;
}
const Step1 = async () => {
  const fields = {
    name: nameValue.value,
    lastName: lastNameValue.value,
    phone: phoneValue.value,
    document: documentValue.value,
    address: addressValue.value,
  };

  const valideSchema = yup.object({
    name: schema.name,
    lastName: schema.lastName,
    phone: schema.phone,
    document: schema.document,
    address: schema.address,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    nameValidate();
    lastNameValidate();
    phoneValidate();
    documentValidate();
    addressValidate();
  }

  form = { ...form, ...fields };

  return isValid;
};
const Step2 = async () => {
  const fields = {
    email: emailValue.value,
    password: passwordValue.value,
    confirmPassword: confirmPasswordValue.value,
  };

  const valideSchema = yup.object({
    email: schema.email,
    password: schema.password,
    confirmPassword: schema.confirmPassword,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    emailValidate();
    passwordValidate();
    confirmPasswordValidate();
  }

  form = { ...form, ...fields };

  return isValid;
};
const Step3 = () => {
  const validateProfesion = profesionRequired.value; //validar Profesion
  const validateLocation = locationRequired.value; //validar Location
  const cantWork = workExperience; // lista de experiencias
  var validateExperience = false;

  //Verifica minimo experiencia 1 mes
  if (cantWork.length !== 0) {
    validateExperience = cantWork?.every((x) => x.years > 0 || x.months > 0);
  }

  if (validateProfesion && validateLocation && validateExperience) {
    isStepResumenValid.value = true;
    return true;
  } else {
    return false;
  }
};
const Step4 = async () => {
  const fields = {
    conditions: conditionsValue.value,
  };

  const valideSchema = yup.object({
    name: schema.conditions,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    conditionsValidate();
  }

  form = { ...form, ...fields };

  return isValid;
};

//validadores profesion
const profesionRequired = computed(() => {
  const cantWork = workExperience.length;
  if (cantWork > 0) return true;
  else return false;
});

//validadores location
const locationRequired = computed(() => {
  if (locationSelected.value.length > 3) {
    locationSelected.value.pop();
  }
  if (locationSelected.value.length > 0) return true;
  else return false;
});

//validadores experiencia
const countExperience = (index: any) => {
  const expWork = workExperience;
  if (expWork[index].months > 0 || expWork[index].years > 0) return true;
  else return false;
};
//#endregion

//#region REGISTER SPECIALIST
const store = useStore();
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
          professionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          professionName: profession.name,
          time: experience?.years * 12 + experience?.months,
          date: "2023-09-25T01:31:43.162Z",
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
    if (!conditionsValue.value) {
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
    await store.dispatch("authModule/loginUser", {
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
