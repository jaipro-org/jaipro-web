<template>
  <b-row
    class="profile-client__container mx-0 pt-0 pt-lg-2 pb-2 mt-0 justify-content-center"
  >
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0 mt-3 mt-lg-0">
        <b-col cols="12">
          <b-card class="mb-4 pt-5 pt-md-4">
            <div class="image__user">
              <img :src="coverLoad" alt="" />
              <div
                @click="openPhotoModal(coverLoad)"
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
                      v-model="name.value.value"
                      :state="
                        validate(
                          currentData?.name,
                          name.value.value,
                          name.errorMessage.value
                        )
                      "
                      id="input-1"
                      placeholder="Ingrese sus nombres"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="name.errorMessage.value">
                      {{ name.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos" label-for="input-2">
                    <b-form-input
                      v-model="lastname.value.value"
                      :state="
                        validate(
                          currentData?.lastName,
                          lastname.value.value,
                          lastname.errorMessage.value
                        )
                      "
                      id="input-2"
                      placeholder="Ingrese sus apellidos"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      :state="lastname.errorMessage.value"
                    >
                      {{ lastname.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Correo" label-for="input-3">
                    <b-form-input
                      disabled
                      v-model="email.value.value"
                      :state="
                        validate(
                          currentData?.email,
                          email.value.value,
                          email.errorMessage.value
                        )
                      "
                      id="input-3"
                      placeholder="Ingrese su correo"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="email.errorMessage.value">
                      {{ email.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Teléfono" label-for="input-4">
                    <b-form-input
                      v-model="phone.value.value"
                      :state="
                        validate(
                          currentData?.phone,
                          phone.value.value,
                          phone.errorMessage.value
                        )
                      "
                      oninput="this.value = value.replace(/[^0-9]/g, '').substring(0, 9)"
                      id="input-4"
                      placeholder="Ingrese su teléfono"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="phone.errorMessage.value">
                      {{ phone.errorMessage.value }}
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
                      v-model="ubication.value.value"
                      :state="
                        validate(
                          currentData?.address,
                          ubication.value.value,
                          ubication.errorMessage.value
                        )
                      "
                      id="input-5"
                      placeholder="Ingrese su dirección"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback
                      :state="ubication.errorMessage.value"
                    >
                      {{ ubication.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <h6 class="mb-0">Distrito</h6>
                  <b-form-select
                    v-model="district.value.value"
                    :state="
                      validate(
                        currentData?.districtId,
                        district.value.value,
                        district.errorMessage.value
                      )
                    "
                    :options="districtOptions"
                    class="mt-3"
                  >
                    <option disabled selected hidden value="">
                      Seleccione
                    </option>
                  </b-form-select>
                  <b-form-invalid-feedback :state="district.errorMessage.value">
                    {{ district.errorMessage.value }}
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
                      v-model="oldPassword.value.value"
                      :state="
                        validateState(
                          oldPassword.value.value,
                          oldPassword.errorMessage.value
                        )
                      "
                      id="input-77"
                      type="password"
                      placeholder="Ingrese su contraseña actual"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback
                      :state="oldPassword.errorMessage.value"
                    >
                      {{ oldPassword.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group label="Nueva contraseña" label-for="input-6">
                    <b-form-input
                      v-model="password.value.value"
                      :state="
                        validateState(
                          password.value.value,
                          password.errorMessage.value
                        )
                      "
                      @input="confirmPassword.validate()"
                      id="input-6"
                      type="password"
                      placeholder="Ingrese su contraseña"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback
                      :state="password.errorMessage.value"
                    >
                      {{ password.errorMessage.value }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group
                    label="Confirmar nueva contraseña"
                    label-for="input-7"
                  >
                    <b-form-input
                      v-model="confirmPassword.value.value"
                      :state="
                        validateState(
                          confirmPassword.value.value,
                          confirmPassword.errorMessage.value
                        )
                      "
                      @input="password.validate()"
                      id="input-7"
                      type="password"
                      placeholder="Confirme su contraseña"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback
                      :state="confirmPassword.errorMessage.value"
                    >
                      {{ confirmPassword.errorMessage.value }}
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
  </b-row>
  <b-modal
    v-model="showModal"
    title="Editar imagen de perfil"
    class="p-0"
    centered
    @close="closePhotoModal()"
  >
    <template v-slot:footer>
      <div class="d-flex justify-content-between w-100">
        <b-button variant="secondary" @click="closePhotoModal()"
          >Cancelar</b-button
        >
        <b-button variant="primary" @click="updateCover()">Actualizar</b-button>
      </div>
    </template>
    <div>
      <span class="span-info">
        Seleccione la imagen para elegir una nueva imagen de Portada
      </span>
      <div v-if="cover.coverImage" class="form-image__delete">
        <i @click="deleteImage()" class="fa-solid fa-circle-xmark"></i>
      </div>
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
        accept=".png, .jpg"
        @change="changeFileCover"
      />
    </div>
    <b-form-invalid-feedback :state="!cover.coverImage ? false : true">
      <!-- *Este campo es obligatorio -->
    </b-form-invalid-feedback>
  </b-modal>
</template>
<!--  -->
<script setup lang="ts">
import {
  alertError,
  alertLoading,
  alertSuccessButton,
} from "@/utils/SweetAlert";
import { ref, onMounted, watch } from "vue";
import { ClientServices } from "@/services/api/clientProfileServices";
import { GeneralServices } from "@/services/api/generalServices";
import { encryptAuthStorage } from "@/utils/Storage";
import useProfileClientValidate from "@/validate/profileClientValidate";
import { PhotoClient } from "@/interfaces/PhotoClient.interfaces";

const authData: string = window.localStorage.getItem("@AUTH:security") || "";

const profileValidate = useProfileClientValidate();
const clientServices = new ClientServices()
const generalServices = new GeneralServices()

const {
  name,
  lastname,
  email,
  phone,
  ubication,
  district,
  oldPassword,
  password,
  confirmPassword,
} = profileValidate;

const collapseWeb = ref(true);
const collapseMovil = ref(false);
const idClient = ref(""); // id cliente
const showModal = ref(false);
const portadaFile: any = ref();
const isLoading = ref(true);
const districtOptions = ref();
const coverLoad = ref(require("@/assets/img-delete/profile.jpg"));
const currentData = ref();
const imgExtensions: string = process.env.VUE_APP_IMG_EXTENSIONS;
const extension = ref("");
const defaultPhoto: string = require("@/assets/img-delete/profile.jpg");
const baseCustomerPhoto = ref("");
const coverDelete = ref(false);
// const fileImage: any = ref(null);
// const coverImage: any = ref(null);
onMounted(async () => {
  if (Boolean(authData)) {
    let data = encryptAuthStorage.decryptValue(authData);
    idClient.value = data.id;
  }
  await fetchDataClient();
  await fetchListDIstrict();
  isLoading.value = false;
});
//funcion ValidateState
function validate(current: any, value: any, error: any) {
  if (current === value) {
    return null;
  } else {
    return validateState(value, error);
  }
}
//CARGAR Datos del Cliente
async function fetchDataClient() {
  let data = await clientServices.getDataClient(idClient.value);

  currentData.value = data;
  var photoAccount = "";

  data.name && (name.value.value = data.name);
  data.lastName && (lastname.value.value = data.lastName);
  data.email && (email.value.value = data.email);
  data.phone && (phone.value.value = data.phone);
  data.address && (ubication.value.value = data.address);
  data.districtId && (district.value.value = data.districtId);

  if (data.avatar) {
    const utcNow = new Date().getTime();
    const urlPhoto = `${data.avatar}?${utcNow}`;
    baseCustomerPhoto.value = urlPhoto;
    cover.value.coverImage = urlPhoto;
    coverLoad.value = urlPhoto;
    extension.value = data.avatar.split(".").pop();
    photoAccount = urlPhoto;
  }
  navPhoto(photoAccount);
}
//CARGAR Lista Distritos
async function fetchListDIstrict() {
  let data = await generalServices.getDistrictList();
  let listDistric = data.map((data: any) => {
    return {
      value: data.id,
      text: data.name,
    };
  });
  districtOptions.value = listDistric;
}

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
//#endregion

const closePhotoModal = () => {
  cover.value.coverImage = baseCustomerPhoto.value;
  coverLoad.value = baseCustomerPhoto.value;
  showModal.value = false;
};

const openPhotoModal = (currentCover: any) => {
  if (cover.value.coverImage) cover.value.coverImage = currentCover;
  showModal.value = true;
};

//#region VALIDATE AND SEND-VALUE-FOR-API
const updateCover = async () => {
  const coverImg = cover.value.coverImage;
  const inputFile: FileList = portadaFile.value.files;

  if (inputFile.length) {
    alertLoading("Actualizando...");

    const payload: PhotoClient = {
      id: idClient.value,
      photo: inputFile[0],
      extension: inputFile[0].type.split("/").pop(),
    };

    await clientServices.putPhoto(payload);
    await fetchDataClient();

    extension.value = inputFile[0].type.split("/")[1];
    coverLoad.value = coverImg;
    cover.value.coverImage = coverImg;
    alertSuccessButton("Se realizo la actualizacion exitosamente");
    portadaFile.value.value = "";
    showModal.value = false;
  }

  if (coverDelete.value) {
    alertLoading("Actualizando...");
    navPhoto("");

    const payload: PhotoClient = {
      id: idClient.value,
      photo: null,
      extension: extension.value,
    };

    await clientServices.putPhoto(payload);
    extension.value = "";
    coverLoad.value = defaultPhoto;
    cover.value.coverImage = "";
    coverDelete.value = false;
    alertSuccessButton("Se realizo la actualizacion exitosamente");
    showModal.value = false;
  }
};

function navPhoto(url: string) {
  localStorage.setItem("photoAccount", url);

  window.dispatchEvent(
    new CustomEvent("photoAccount-localstorage-changed", {
      detail: {
        storage: localStorage.getItem("photoAccount"),
      },
    })
  );
}

const setDatosPersonales = async () => {
  const fields = {
    name: name.value.value,
    lastname: lastname.value.value,
    email: email.value.value,
    phone: phone.value.value,
  };
  const isValid = await profileValidate.validatePersonalData(fields);

  if (!isValid) profileValidate.inputValidateDatosPersonales();

  if (isValid) {
    let sendValue = {
      id: idClient.value,
      name: name.value.value,
      lastName: lastname.value.value,
      email: email.value.value,
      phone: phone.value.value,
    };
    try {
      alertLoading("Actualizando...");
      await clientServices.putInformation(sendValue);
      profileValidate.inputResetDatosPersonales();
      await fetchDataClient();
      alertSuccessButton("Se realizo la actualizacion exitosamente");
    } catch (error: any) {
      alertError(error.response.data.message);
    }
  }
};

const setUbication = async () => {
  const fields = {
    ubication: ubication.value.value,
    district: district.value.value,
  };

  const isValid = await profileValidate.validateUbication(fields);

  if (!isValid) profileValidate.inputValidateUbication();

  if (isValid) {
    let sendValue = {
      id: idClient.value,
      address: ubication.value.value,
      districtId: district.value.value,
    };
    try {
      alertLoading("Actualizando...");
      await clientServices.putLocation(sendValue);
      profileValidate.inputResetUbication();
      await fetchDataClient();
      alertSuccessButton("Se realizo la actualizacion exitosamente");
    } catch (error: any) {
      alertError(error.response.data.message);
    }
  }
};

// ACTUALIZANDO PASSWORD DEL CLIENTE
const setPassword = async () => {
  const fields = {
    oldPassword: oldPassword.value.value,
    password: password.value.value,
    confirmPassword: confirmPassword.value.value,
  };
  const isValid = await profileValidate.validatePassword(fields);

  if (!isValid) profileValidate.inputValidatePasswordChange();

  if (isValid) {
    let sendValue = {
      currentPassword: fields.oldPassword,
      nwPassword: fields.password,
      userId: idClient.value,
      username: currentData.value.email,
    };
    try {
      alertLoading("Actualizando...");
      await clientServices.putPassword(sendValue);
      profileValidate.inputResetPasswordChange();
      alertSuccessButton("Se realizo la actualizacion exitosamente");
    } catch (error: any) {
      alertError(error.response.data.message);
    }
  }
};
//#endregion

watch(showModal, (newValue, oldValue) => {
  portadaFile.value.value = "";
  if (newValue === false) {
    cover.value.fileImage = "";
    //cover.value.coverImage = "";
    coverDelete.value = false;
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

function deleteImage() {
  cover.value.fileImage = "";
  cover.value.coverImage = "";
  portadaFile.value.value = "";
  coverDelete.value = true;
}

function changeFileCover(event: any) {
  const file: any = event.target.files[0];
  if (!file) {
    cover.value.fileImage = "";
    cover.value.coverImage = "";
    return;
  }

  if (!imgExtensions.split(",").includes(file.type)) {
    alertError("Por favor subir una imagen con extensión 'png' o 'jpg'");
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

.form-image__delete {
  position: absolute;
  font-size: 24px;
  color: rgb(241, 46, 46);
  border-radius: 100%;
  z-index: 10;
  cursor: pointer;
  width: fit-content;
  margin-left: 82.5%;
  margin-top: 1.1%;

  i {
    background-color: white;
    border-radius: 100%;
    border: solid white 2px;
  }
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
