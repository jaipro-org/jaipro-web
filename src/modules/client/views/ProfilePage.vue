<template>
  <b-row class="profile-client__container mx-0 pt-0 pt-lg-2 pb-2 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div class="mb-2" @click="collapseMovil = !collapseMovil">
            <i class="fa-solid fa-house-circle-check me-2"></i
            ><span>Mis Proyectos</span
          ><i class="fa-solid fa-angle-down ms-2"></i>
          </div>
          <b-collapse v-model="collapseMovil" id="collapse-3" class="ps-4 py-2">
            <span
                class="d-block mb-2"
                @click="
                $router.push({
                  name: 'my-projects',
                  params: { type: 'current' },
                })
              "
            >Vigentes (2)</span
            >
            <span
                class="d-block"
                @click="
                $router.push({ name: 'my-projects', params: { type: 'past' } })
              "
            >Pasados (3)</span
            >
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart me-2"></i><span>Favoritos</span></div>
      </div>
      <div
          class="menu__container menu__container--web py-3 px-4 bg-white d-none d-lg-block"
      >
        <div>
          <div class="mb-2" @click="collapseWeb = !collapseWeb">
            <i class="fa-solid fa-house-circle-check me-2"></i
            ><span>Mis Proyectos</span
          ><i class="fa-solid fa-angle-down ms-2"></i>
          </div>
          <b-collapse
              v-model="collapseWeb"
              id="collapse-movil"
              class="ps-4 py-2"
          >
            <span
                class="d-block mb-2"
                @click="
                $router.push({
                  name: 'my-projects',
                  params: { type: 'current' },
                })
              "
            >Vigentes (2)</span
            >
            <span
                class="d-block"
                @click="
                $router.push({ name: 'my-projects', params: { type: 'past' } })
              "
            >Pasados (3)</span
            >
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart me-2"></i><span>Favoritos</span></div>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0 mt-3 mt-lg-0">
        <b-col cols="12">
          <b-card class="mb-4 pt-5 pt-md-4">
            <div class="image__user">
              <img :src="coverLoad" alt="" />
              <div
                  @click="showModal = true"
                  class="button__action button__action--userImage text-warning"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <h4>Datos Personales</h4>
            <b-form>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Nombres" label-for="input-1">
                    <b-form-input
                        v-model="nameValue"
                        :state="validateState(nameValue, nameError)"
                        id="input-1"
                        placeholder="Ingrese sus nombres"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="nameError">
                      {{ nameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos" label-for="input-2">
                    <b-form-input
                        v-model="lastnameValue"
                        :state="validateState(lastnameValue, lastnameError)"
                        id="input-2"
                        placeholder="Ingrese sus apellidos"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="lastnameError">
                      {{ lastnameError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Correo" label-for="input-3">
                    <b-form-input
                        v-model="emailValue"
                        :state="validateState(emailValue, emailError)"
                        id="input-3"
                        placeholder="Ingrese su correo"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="emailError">
                      {{ emailError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Teléfono" label-for="input-4">
                    <b-form-input
                        v-model="phoneValue"
                        :state="validateState(phoneValue, phoneError)"
                        id="input-4"
                        placeholder="Ingrese su teléfono"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="phoneError">
                      {{ phoneError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button
                      variant="primary"
                      type="submit"
                      @click="setDatosPersonales()"
                  >Actualizar</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
        <b-col cols="12" id="ubication__box">
          <b-card class="mb-4">
            <h4>Ubicación</h4>
            <b-form>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" class="mb-3">
                  <b-form-group label="Dirección" label-for="input-5">
                    <b-form-input
                        v-model="ubicationValue"
                        :state="validateState(ubicationValue, ubicationError)"
                        id="input-5"
                        placeholder="Ingrese su dirección"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="ubicationError">
                      {{ ubicationError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <h6 class="mb-0">Distrito</h6>
                  <b-form-select
                      v-model="districtValue"
                      :state="validateState(districtValue, districtError)"
                      :options="districtOptions"
                      class="mt-3"
                  ></b-form-select>
                  <b-form-invalid-feedback :state="districtError">
                    {{ districtError }}
                  </b-form-invalid-feedback>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button
                      variant="primary"
                      type="submit"
                      @click="setUbication"
                  >Actualizar</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card class="mb-4">
            <h4>Cambiar contraseña</h4>
            <b-form>
              <b-row class="mx-0 mt-4">
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group label="Contraseña actual" label-for="input-77">
                    <b-form-input
                        v-model="oldPasswordValue"
                        :state="validateState(oldPasswordValue, oldPasswordError)"
                        id="input-77"
                        type="password"
                        placeholder="Ingrese su contraseña actual"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :state="oldPasswordError">
                      {{ oldPasswordError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group label="Nueva contraseña" label-for="input-6">
                    <b-form-input
                        v-model="passwordValue"
                        :state="validateState(passwordValue, passwordError)"
                        @input="confirmPasswordValidate()"
                        id="input-6"
                        type="password"
                        placeholder="Ingrese su contraseña"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :state="passwordError">
                      {{ passwordError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group
                      label="Confirmar nueva contraseña"
                      label-for="input-7"
                  >
                    <b-form-input
                        v-model="confirmPasswordValue"
                        :state="
                        validateState(
                          confirmPasswordValue,
                          confirmPasswordError
                        )
                      "
                        @input="passwordValidate()"
                        id="input-7"
                        type="password"
                        placeholder="Confirme su contraseña"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :state="confirmPasswordError">
                      {{ confirmPasswordError }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button variant="primary" @click="setPassword()"
                  >Actualizar</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-col>

    <b-col id="footer__limit"></b-col>
  </b-row>
  <b-modal
      v-model="showModal"
      title="Editar imagen de perfil"
      class="p-0"
      centered
  >
    <template v-slot:footer>
      <div class="d-flex justify-content-between w-100">
        <b-button variant="secondary" @click="showModal = false"
        >Cancelar</b-button
        >
        <b-button variant="primary" @click="updateCover()">Actualizar</b-button>
      </div>
    </template>
    <div>
      <span class="span-info">
        Seleccione la imagen para elegir una nueva imagen de Portada
      </span>
      <div
          class="form-image__file mt-2"
          :class="!cover.coverImage ? 'form-image__file--aux' : ''"
          @click="uploadImage"
      >
        <img
            :src="
            !cover.coverImage
              ? require('@/assets/img-delete/fileimage-up.png')
              : cover.coverImage
          "
            alt="image"
        />
      </div>
      <input
          style="display: none"
          ref="portadaFile"
          hidden
          type="file"
          @change="changeFileCover"
      />
    </div>
    <b-form-invalid-feedback :state="!cover.coverImage ? false : true">
      *Este campo es obligatorio
    </b-form-invalid-feedback>
  </b-modal>
</template>
<!--  -->
<script setup lang="ts">
import { alertSuccessButton } from "@/utils/SweetAlert";
import { ref, onMounted, watch } from "vue";
import { useField } from "vee-validate";
import * as yup from "yup";

const collapseWeb = ref(true);
const collapseMovil = ref(false);

const showModal = ref(false);
const portadaFile: any = ref();
const isLoading = ref(true);
const disctrictSelected = ref(0);
const districtOptions = ref([
  { value: "", text: "Seleccione" },
  { value: 0, text: "Los Olivos" },
  { value: 1, text: "SMP" },
  { value: 2, text: "Puente Piedra" },
  { value: 3, text: "Chorrillos" },
]);
const coverLoad = ref(require("@/assets/img-delete/profile.jpg"));

// const fileImage: any = ref(null);
// const coverImage: any = ref(null);
onMounted(() => {
  isLoading.value = false;
});

//#region VALUE-REF
const cover = ref({
  fileImage: "",
  coverImage: "",
});
const formDatosPersonales = ref({
  name: "",
  lastname: "",
  email: "",
  phone: "",
});
const formUbication = ref({
  ubication: 0,
  district: "",
});
const formPassword = ref({
  oldPassword: "",
  password: "",
  confirmPassword: "",
});
//#endregion

//#region YUP
const schemaDatosPersonales = {
  name: yup.string().required("Campo requerido"),
  lastname: yup.string().required("Campo requerido"),
  email: yup
      .string()
      .email("Escriba un correo valido")
      .required("Campo requerido"),
  phone: yup
      .string()
      .matches(/^[0-9]+$/, "Campo requerido")
      .required("Campo requerido"),
};

const schemaUbicacion = {
  ubication: yup.string().required("Campo requerido"),
  district: yup.string().required("Campo requerido"),
};

const schemaPassword = {
  oldPassword: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Campo requerido"),
  password: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Escriba su nueva contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === confirmPasswordValue.value) return true;
        else return false;
      }),
  confirmPassword: yup
      .string()
      .min(8, "Se requiere 8 caracteres como minimo")
      .required("Confirme su nueva contraseña")
      .test("a", "Las contraseñas no coinciden", (value) => {
        if (value === passwordValue.value) return true;
        else return false;
      }),
};
//#endregion

//#region USE-FIELD
const {
  value: nameValue,
  errorMessage: nameError,
  validate: nameValidate,
} = useField("name", schemaDatosPersonales.name);
const {
  value: lastnameValue,
  errorMessage: lastnameError,
  validate: lastnameValidate,
} = useField("lastname", schemaDatosPersonales.lastname);
const {
  value: emailValue,
  errorMessage: emailError,
  validate: emailValidate,
} = useField("email", schemaDatosPersonales.email);
const {
  value: phoneValue,
  errorMessage: phoneError,
  validate: phoneValidate,
} = useField("phone", schemaDatosPersonales.phone);
const {
  value: ubicationValue,
  errorMessage: ubicationError,
  validate: ubicationValidate,
} = useField("ubication", schemaUbicacion.ubication);
const {
  value: districtValue,
  errorMessage: districtError,
  validate: districtValidate,
} = useField("district", schemaUbicacion.district);
const {
  value: oldPasswordValue,
  errorMessage: oldPasswordError,
  validate: oldPasswordValidate,
} = useField("oldPassword", schemaPassword.oldPassword);
const {
  value: passwordValue,
  errorMessage: passwordError,
  validate: passwordValidate,
} = useField("password", schemaPassword.password);
const {
  value: confirmPasswordValue,
  errorMessage: confirmPasswordError,
  validate: confirmPasswordValidate,
} = useField("confirmPassword", schemaPassword.confirmPassword);
//#endregion

//#region VALIDATE AND SEND-VALUE-FOR-API
function updateCover() {
  let coverImg = cover.value.coverImage;
  let fileImg = cover.value.fileImage;
  if (coverImg && fileImg) {
    coverLoad.value = coverImg;
    showModal.value = false;
  }
  cover.value.fileImage = "";
  cover.value.coverImage = "";
}

const setDatosPersonales = async () => {
  const fields = {
    name: nameValue.value,
    lastname: lastnameValue.value,
    email: emailValue.value,
    phone: phoneValue.value,
  };

  const valideSchema = yup.object({
    name: schemaDatosPersonales.name,
    lastname: schemaDatosPersonales.lastname,
    email: schemaDatosPersonales.email,
    phone: schemaDatosPersonales.phone,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    nameValidate();
    lastnameValidate();
    emailValidate();
    phoneValidate();
  }

  if (isValid) {
    formDatosPersonales.value = { ...formDatosPersonales.value, ...fields };
  }

  return isValid;
};

const setUbication = async () => {
  const fields = {
    ubication: ubicationValue.value,
    district: districtValue.value,
  };

  const valideSchema = yup.object({
    ubication: schemaUbicacion.ubication,
    district: schemaUbicacion.district,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    ubicationValidate();
    districtValidate();
  }

  if (isValid) {
    formUbication.value = { ...formUbication.value, ...fields };
  }

  return isValid;
};

const setPassword = async () => {
  const fields = {
    oldPassword: oldPasswordValue.value,
    password: passwordValue.value,
    confirmPassword: confirmPasswordValue.value,
  };

  const valideSchema = yup.object({
    oldPassword: schemaPassword.oldPassword,
    password: schemaPassword.password,
    confirmPassword: schemaPassword.confirmPassword,
  });

  const isValid = await valideSchema.isValid(fields);

  if (!isValid) {
    oldPasswordValidate();
    passwordValidate();
    confirmPasswordValidate();
  }

  if (isValid) {
    formPassword.value = { ...formPassword.value, ...fields };
  }

  return isValid;
};
//#endregion

watch(showModal, (newValue, oldValue) => {
  if (newValue === false) {
    cover.value.fileImage = "";
    cover.value.coverImage = "";
  }
});

//validador state para los input
const validateState = (value: any, error: any) => {
  if (value === undefined && error === undefined) return null;
  else if (error) return false;
  return true;
};

function uploadImage() {
  const btnFile = portadaFile.value;
  btnFile.click();
}

function changeFileCover(event: any) {
  const file: any = event.target.files[0];
  if (!file) {
    cover.value.fileImage = "";
    cover.value.coverImage = "";
    return;
  }
  cover.value.fileImage = file;
  const fr = new FileReader();
  fr.onload = () => (cover.value.coverImage = String(fr.result));
  fr.readAsDataURL(file);
}
</script>

<style lang="scss" scoped>
.profile-client__container {
.profile__menu {
.menu__container {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

&--web {
   position: fixed;
   top: 120px;
   padding-top: 0;
   width: 100%;
   max-width: 250px;
 }

div {
  cursor: pointer;
}
}
}

.card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
}

.profile__menu {
  padding-top: 70px;
}

.profile__content {
  padding-top: 70px;

.image__user {
  width: 120px;
  height: 120px;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.308);
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 100%;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
}
}

.button__action {
  font-size: 1.5rem;
  cursor: pointer;
}

.button__action--userImage {
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: white;
  border-radius: 100%;
  font-size: 1.2rem;
  padding: 5px;
  box-shadow: 0px 1px 3px black;
}

.button__action--userImage:hover {
  background-color: #007bff;
  color: white !important;
}
}
}

.form-image__file {
  width: 100%;
  height: 280px;
  border: 1px solid #b6bdcc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
}

.form-image__file--aux img {
  height: 160px;
  width: auto;
}

.span-info {
  color: darkgray;
  font-size: 0.9rem;
  font-weight: 500;
  display: block;
}

.span-info--danger {
  color: #f64b4b;
}

.span-info--success {
  color: #60b841;
}

@media (max-width: 991px) {
  .profile-client__container {
  .profile__menu {
    padding: 0;
    z-index: 1;
    position: fixed;
    top: 84px;
    left: 0;
  }

  .profile__content {
    padding-top: 190px;
  }
}
}

@media (max-width: 575px) {
  .profile-client__container {
  .profile__menu {
    top: 53px;
  }

  .profile__content {
    padding-top: 195px;
  }
}
}
</style>