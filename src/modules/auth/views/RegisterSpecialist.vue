<template>
  <b-row class="mx-0 py-4">
    <b-col cols="12">
      <h1 class="text-center">Registro de Especialista</h1>
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
        <tab-content title="Datos personales" :beforeChange="validateDataForm">
          <b-card class="mt-1 mb-2">
            <b-form @submit.prevent="" ref="dataForm" validated>
              <b-row class="mx-0 justify-content-between">
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Nombres" label-for="input-33">
                    <b-form-input
                      id="input-33"
                      v-model="form.name"
                      type="text"
                      placeholder="Ingrese su nombre"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3 px-0">
                  <b-form-group label="Apellidos" label-for="input-44">
                    <b-form-input
                      id="input-44"
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
                    label-for="input-55"
                  >
                    <b-form-input
                      id="input-55"
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
                  <b-form-group label="Dirección" label-for="input-66">
                    <b-form-input
                      id="input-66"
                      v-model="form.adress"
                      type="text"
                      placeholder="Ingrese su dirección"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <button ref="dataButton" class="form-step-button" type="submit">
                go
              </button>
            </b-form>
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
                  <b-form-group label="Contraseña" label-for="input-acount-222">
                    <b-form-input
                      id="input-acount-222"
                      v-model="form.password"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                      class="rounded-pill"
                    ></b-form-input>
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
                      v-model="form.confirmPassowrd"
                      type="password"
                      placeholder="Ingrese su contraseña nuevamente"
                      required
                      class="rounded-pill"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <button ref="acountButton" class="form-step-button" type="submit">
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
                <b-form-group class="ps-3">
                  <b-form-checkbox-group
                    v-model="workList.workSelected"
                    name="flavour-1"
                    stacked
                    class="mt-2"
                    :options="workOptions"
                  >
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col cols="12" lg="5" class="px-0 d-none d-lg-block">
                <h5>Locaciones de trabajo</h5>

                <v-select
                  multiple
                  v-model="locationSelected"
                  :options="locationOptions"
                  :reduce="(option) => option.value"
                />
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
                  </b-row>
                </div>
              </b-col>
              <b-col cols="12" lg="5" class="px-0 d-block d-lg-none">
                <h5>Locaciones de trabajo</h5>

                <v-select
                  multiple
                  v-model="locationSelected"
                  :options="locationOptions"
                  :reduce="(option) => option.value"
                />
              </b-col>
            </b-row>
          </b-card>
        </tab-content>
        <tab-content title="Resumen">
          <template v-if="isStepResumenValid">
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
                  <b-form-group label="Telefono" label-for="input-22">
                    <b-form-input
                      id="input-22"
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
                  <b-form-group class="ps-3">
                    <b-form-checkbox-group
                      v-model="workList.workSelected"
                      name="flavour-1"
                      stacked
                      class="mt-2"
                      :options="workOptions"
                      disabled
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
                    :reduce="(option) => option.value"
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
                    :reduce="(option) => option.value"
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
                  <b-form-group label="Contraseña" label-for="input-acount-22">
                    <b-input-group>
                      <b-form-input
                        id="input-acount-22"
                        v-model="form.password"
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
              <b-form-checkbox
                v-model="form.conditions"
                name="checkbox-1"
                class="cursor-pointer"
              >
                Acepto los
                <span class="btn_conditions" @click="showConditions = true"
                  >términos y condiciones</span
                >
              </b-form-checkbox>
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
          @click=";(showConditions = false), (form.conditions = true)"
          >Aceptar</b-button
        >
      </div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { FormWizard, TabContent } from "vue3-form-wizard"
import "vue3-form-wizard/dist/style.css"
import TimeComponent from "./components/TimeComponent.vue"
import {
  computed,
  ref,
  reactive,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue"
let windowWidth = ref(window.innerWidth) // Obtener el tamaño de la ventana
let typePassword: any = ref("password") // Type password
const showConditions = ref(false)

const form = ref({
  phone: "",
  name: "",
  lastName: "",
  document: "",
  adress: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: false,
})

// STEP3 ***********************

const workList = reactive({
  workSelected: [20],
})
const workOptions: Array<{ text: string; value: number }> = reactive([
  { text: "Pintor", value: 10 },
  { text: "Carpintero", value: 20 },
  { text: "Albañil", value: 30 },
  { text: "Gasfitero", value: 40 },
])
const workExperience: Array<{
  years: number
  months: number
  id: number
  name: string
}> = reactive([{ years: 10, months: 3, id: 20, name: "Carpintero" }])

const locationSelected = ref([1])
const locationOptions: Array<{ value: number; label: string }> = reactive([
  { value: 0, label: "Los Olivos" },
  { value: 1, label: "SMP" },
  { value: 3, label: "Puente Piedra" },
  { value: 4, label: "Chorrillos" },
])

watch(
  () => workList.workSelected,
  (newValue, lastValue) => {
    if (lastValue.length > newValue.length) {
      newValue.forEach((value: any) => {
        const index = lastValue.indexOf(value)
        lastValue.splice(index, 1)
      })

      const lastIndex = workExperience.findIndex(
        (work) => work.id == lastValue[0]
      )
      workExperience.splice(lastIndex, 1)
    } else {
      const list = [...newValue]
      lastValue.forEach((value: any) => {
        const index = list.indexOf(value)
        list.splice(index, 1)
      })
      const workFind = workOptions.find((work) => work.value == list[0])
      if (workFind) {
        const work = {
          id: list[0],
          name: workFind.text,
          years: 0,
          months: 0,
        }
        workExperience.push(work)
      }
    }
  }
)

// STEP3 ***********************

// STEP4 ***********************
const isStepResumenValid = ref(false)
// STEP4 ***********************

// VALIDATION STEPS **************
const dataButton = ref()
const dataForm = ref()
const acountButton = ref()
const acountForm = ref()

function validateDataForm() {
  dataButton.value.click()
  return dataForm.value.$el.checkValidity()
}

function validateAcountForm() {
  acountButton.value.click()
  return acountForm.value.$el.checkValidity()
}
function validateWorkForm() {
  isStepResumenValid.value = false
  const cantWork = workExperience.length

  if (cantWork > 0) {
    setTimeout(function () {
      isStepResumenValid.value = true
    }, 10)
    return true
  } else {
    return false
  }
}
function registerSpecialist() {
  console.log("Se registrará un expediente")
}

// VALIDATION STEPS **************

const changeTypePassword = () => {
  typePassword.value = typePassword.value == "password" ? "text" : "password"
}

// FUNCIONES PARA OBTENER EL TAMAÑO DE LA PANTALLA
onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", onResize)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize)
})

const onResize = () => {
  windowWidth.value = window.innerWidth
}
// FIN FUNCIONES PARA OBTENER EL TAMAÑO DE LA PANTALLA

const isWeb = computed(() => {
  return windowWidth.value > 950 ? true : false
})
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
  color: #0d6efd;
  text-decoration: underline;
}

.btn_conditions:hover {
  color: #0f63e2;
}

@media (max-width: 950px) {
  .work__temp {
    /* padding: 0 10px; */
    flex-wrap: wrap;
  }

  .work__temp--resumen {
    flex-wrap: nowrap;
  }
}
</style>
