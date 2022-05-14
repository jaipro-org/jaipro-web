<template>
  <b-row class="profile-client__container mx-0 pt-0 pt-lg-2 pb-2 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div class="mb-2" v-b-toggle.collapse-3>
            <i class="fa-solid fa-house-circle-check mr-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse id="collapse-3" class="pl-4 py-2">
            <span class="d-block mb-2">Vigentes (2)</span>
            <span class="d-block">Pasados (3)</span>
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart mr-2"></i><span>Favoritos</span></div>
      </div>
      <div
        id="menu__container--web"
        :class="menuChange ? 'menu__container--web' : ''"
        class="menu__container py-3 px-4 bg-white d-none d-lg-block"
      >
        <div>
          <div class="mb-2" v-b-toggle.collapse-3>
            <i class="fa-solid fa-house-circle-check mr-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse id="collapse-3" class="pl-4 py-2">
            <span class="d-block mb-2">Vigentes (2)</span>
            <span class="d-block">Pasados (3)</span>
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart mr-2"></i><span>Favoritos</span></div>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0 mt-3 mt-lg-0">
        <b-col cols="12">
          <b-card class="mb-4 pt-5 pt-md-4">
            <div class="image__user">
              <img src="@/assets/img-delete/profile.jpg" alt="" />
              <div
                v-b-modal.modal-1
                class="button__action button__action--userImage text-warning"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <h4>Datos Personales</h4>
            <b-form @submit.prevent="setData" validated>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Nombres" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      type="text"
                      placeholder="Ingrese sus nombres"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Apellidos" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      type="text"
                      placeholder="Ingrese sus apellidos"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Correo" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      type="email"
                      placeholder="Ingrese su correo"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <b-form-group label="Teléfono" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      type="text"
                      placeholder="Ingrese su teléfono"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button variant="primary" type="submit"
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
            <b-form @submit.prevent="setData" validated>
              <b-row class="mx-0 justify-content-between mt-4">
                <b-col cols="12" class="mb-3">
                  <b-form-group label="Dirección" label-for="input-5">
                    <b-form-input
                      id="input-5"
                      type="text"
                      placeholder="Ingrese su dirección"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" class="mb-3">
                  <h6 class="mb-0">Distrito</h6>
                  <b-form-select
                    v-model="disctrictSelected"
                    :options="districtOptions"
                    class="mt-3"
                  ></b-form-select>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button variant="primary" type="submit"
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
            <b-form @submit.prevent="setData" validated>
              <b-row class="mx-0 mt-4">
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group label="Contraseña actual" label-for="input-77">
                    <b-form-input

                      id="input-77"
                      type="password"
                      placeholder="Ingrese su contraseña actual"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group label="Nueva contraseña" label-for="input-6">
                    <b-form-input
                      id="input-6"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="7" class="mb-3">
                  <b-form-group
                    label="Confirmar nueva contraseña"
                    label-for="input-7"
                  >
                    <b-form-input
                      id="input-7"
                      type="password"
                      placeholder="Confirme su contraseña"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="d-flex mb-3 justify-content-end">
                  <b-button variant="primary">Actualizar</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
    <b-modal id="modal-1" title="Editar imagen de perfil" class="p-0" centered>
      <template #modal-footer>
        <div class="d-flex justify-content-between w-100">
          <b-button variant="secondary">Cancelar</b-button>
          <b-button variant="primary">Guardar</b-button>
        </div>
      </template>
      <div>
        <span class="span-info"
          >Seleccione la imagen para elegir una nueva imagen de Portada</span
        >
        <span
          class="span-info"
          :class="coverImage ? 'span-info--success' : 'span-info--danger'"
          >*Este campo es obligatorio</span
        >
        <div
          class="form-image__file mt-2"
          :class="!coverImage ? 'form-image__file--aux' : ''"
          @click="uploadImage"
        >
          <img
            :src="
              !coverImage
                ? require('@/assets/img-delete/fileimage-up.png')
                : coverImage
            "
            alt="image"
          />
        </div>
        <b-form-file
          style="display: none"
          ref="portadaFile"
          hidden
          @change="changeFileCover"
        ></b-form-file>
      </div>
    </b-modal>
    <b-col id="footer__limit"></b-col>
  </b-row>
</template>

<script>
import { alertSuccessButton } from "@/utils/SweetAlert";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLoading: true,
      disctrictSelected: 0,
      districtOptions: [
        { value: 0, text: "Los Olivos" },
        { value: 1, text: "SMP" },
        { value: 2, text: "Selected Option" },
        { value: 3, text: "Puente Piedra" },
        { value: 4, text: "Chorrillos" },
      ],
      fileImage: null,
      coverImage: null,
    };
  },
  mounted() {
    this.isLoading = false;
  },
  methods: {
    setData() {
      alertSuccessButton("Se realizo la operacion correctamente");
    },
    uploadImage() {
      const btnFile = this.$refs.portadaFile.$el.children[0];
      btnFile.click();
    },
    changeFileCover(event) {
      const file = event.target.files[0];
      if (!file) {
        this.fileImage = null;
        this.coverImage = this.isModalEdit ? this.form.imageUrl : null;
        return;
      }

      this.fileImage = file;
      const fr = new FileReader();
      fr.onload = () => (this.coverImage = fr.result);
      fr.readAsDataURL(file);
    },
  },
  computed: {
    ...mapGetters(["getScroll"]),
    menuChange() {
      if (!this.isLoading) {
        let footer = document.getElementById("footer__limit");
        let footerScrollY = Number(footer.offsetTop) - 320;

        if (this.getScroll > 70 && Number(this.getScroll) < footerScrollY) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-client__container {
  .profile__menu {
    .menu__container {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      div {
        cursor: pointer;
      }
    }
    .menu__container--web {
      position: fixed;
      top: 90px;
      padding-top: 0;
      width: 100%;
      max-width: 250px;
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
      top: 75px;
      left: 0;
    }

    .profile__content {
      padding-top: 180px;
    }
  }
}
</style>
