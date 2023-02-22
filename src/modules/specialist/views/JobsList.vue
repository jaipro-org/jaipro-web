<template>
  <div class="jobs__container mx-0 mt-0 row">
    <div class="col-12 col-lg-8 pt-5">
      <div class="mt-1">
        <b-card class="job__filters">
          <div class="row mx-0">
            <div class="col-12 col-lg-4 mb-3">
              <b-form-group label="Categoria" label-for="select-category">
                <v-select
                  id="select-category"
                  multiple
                  v-model="categorySelected"
                  :options="selectCategories"
                  :reduce="(option) => option.value"
                />
              </b-form-group>
            </div>
            <div class="col-12 col-lg-4 mb-3">
              <b-form-group label="Fecha" label-for="select-date">
                <v-select
                  id="select-date"
                  multiple
                  v-model="dateSelected"
                  :options="selectDates"
                  :reduce="(option) => option.value"
                />
              </b-form-group>
            </div>
            <div class="col-12 col-lg-4 mb-3">
              <b-form-group label="Ubicación" label-for="select-location">
                <v-select
                  id="select-location"
                  multiple
                  v-model="locationSelected"
                  :options="selectLocations"
                  :reduce="(option) => option.value"
                />
              </b-form-group>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <b-button variant="primary">Buscar</b-button>
            </div>
          </div>
        </b-card>
      </div>
      <div class="jobs__content jobs__content--movil pt-3 d-lg-none mb-5">
        <h4 class="text-center">Trabajos</h4>
        <div class="jobs__list px-3">
          <b-card
            class="job__item mb-4"
            v-for="(job, index) in jobsListFilter"
            :key="index"
          >
            <span class="job__data d-block"
              ><b>Solicitante:</b> {{ job.petitioner }}</span
            >
            <span class="job__data d-block"><b>Categoría de servicio:</b></span>
            <span class="job__data d-block text-center">{{
              job.category
            }}</span>
            <span class="job__data d-block mt-2"><b>Descripción:</b></span>
            <p class="job__data">
              {{ job.description }}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <b-button variant="primary" @click="isWorkDetailActive = true"
                >Ver detaille</b-button
              >
              <span>Hace 2 días</span>
            </div>
          </b-card>
        </div>
        <div class="mt-3">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            first-number
            last-number
            align="center"
          ></b-pagination>
        </div>
      </div>

      <div
        class="mx-0"
        :class="!isWorkDetailActive ? 'job-detail__container' : ''"
      >
        <div class="col-12 px-0">
          <div v-if="!isWorkDetailActive" class="job-detail__no-data">
            <div>
              <h4 class="text-center">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </h4>
              <h4 class="text-center">Seleccionar un trabajo para abrirlo</h4>
            </div>
          </div>
          <b-card class="job-detail" v-else>
            <div>
              <div class="d-flex justify-content-between">
                <h1 class="job-detail__title">Trabajo</h1>
                <span
                  class="job-detail__close"
                  @click="isWorkDetailActive = false"
                  ><i class="fa-solid fa-xmark"></i
                ></span>
              </div>
              <hr />
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <div class="job-detail__petitioner-image">
                    <img src="@/assets/img-delete/profile.jpg" alt="" />
                  </div>
                  <h1 class="job-detail__name ms-3">Ernesto Chavez</h1>
                </div>
                <span>Hace 2 dias</span>
              </div>

              <div
                class="d-flex justify-content-between align-items-center mt-3"
              >
                <span class="job-detail__state--open"
                  >Estado:
                  <i class="fa-solid fa-circle ms-2 me-1"></i> Abierto</span
                >
                <span class="job-detail__timer"
                  ><i class="fa-solid fa-clock me-1"></i>Urge contratar</span
                >
              </div>

              <div class="mx-0 mt-4 align-items-center">
                <div class="col-5 col-lg-3 col-md-4 ps-0">
                  <b>Se necesita:</b>
                </div>
                <div class="justify-content-center d-flex">
                  <span class="job-detail__work text-center">Pintor</span>
                </div>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1"><b>Descripcion</b></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum dolor ut fugiat nesciunt, eveniet corporis nostrum
                  asperiores earum provident voluptatibus alias accusamus sequi
                  dolore totam voluptatem maxime ea laborum molestias pariatur
                  consequuntur quasi assumenda. Optio ea reiciendis nam iste
                  temporibus ex blanditiis. Ipsa, cumque! A pariatur ab cum
                  dolorum cupiditate, suscipit quae rerum repellat?
                  Reprehenderit, autem! Ratione cum quod aliquam?
                </p>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1"
                  ><b>Ubicacion de trabajo:</b> Ventanilla</span
                >
              </div>
              <div class="mt-3 mb-4">
                <span class="d-block mb-1"><b>Imagenes:</b> Ventanilla</span>
              </div>
              <div class="row mx-0 justify-content-around mt-2">
                <Carousel :settings="settings" :breakpoints="breakpoints">
                  <Slide :key="1">
                    <div class="job-detail__image">
                      <img
                        src="@/assets/img-delete/pintor.jpg"
                        @click="showModalImage = true"
                        role="button"
                      />
                    </div>
                  </Slide>
                  <Slide :key="2">
                    <div class="job-detail__image">
                      <img
                        src="@/assets/img-delete/pintor.jpg"
                        @click="showModalImage = true"
                        role="button"
                      />
                    </div>
                  </Slide>
                  <slide :key="3">
                    <div class="job-detail__image">
                      <img
                        src="@/assets/img-delete/pintor.jpg"
                        @click="showModalImage = true"
                        role="button"
                      />
                    </div>
                  </slide>
                  <Slide :key="4">
                    <div class="job-detail__image">
                      <img
                        src="@/assets/img-delete/pintor.jpg"
                        @click="showModalImage = true"
                        role="button"
                      />
                    </div>
                  </Slide>
                  <Slide :key="5">
                    <div class="job-detail__image">
                      <img
                        src="@/assets/img-delete/pintor.jpg"
                        @click="showModalImage = true"
                        role="button"
                      />
                    </div>
                  </Slide>
                  <template #addons="{ slidesCount }">
                    <Navigation v-if="slidesCount > 1">
                      <template v-slot:prev
                        ><span class="btn-carrousel btn-carrousel--prev"
                          ><i class="fa-solid fa-circle-chevron-left"></i></span
                      ></template>
                      <template v-slot:next>
                        <span class="btn-carrousel btn-carrousel--next">
                          <i class="fa-solid fa-circle-chevron-right"></i>
                        </span>
                      </template>
                    </Navigation>
                    <Pagination v-if="slidesCount > 1" />
                  </template>
                </Carousel>
              </div>
              <div class="d-flex justify-content-center mt-4">
                <b-button variant="primary" @click="showModalProposal = true"
                  >Enviar propuestas</b-button
                >
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div
      class="jobs__content jobs__content-web col-12 col-lg-4 pt-3 d-none d-lg-block"
    >
      <h4 class="mb-1 px-3">Trabajos</h4>
      <div class="jobs__list px-3 pt-1">
        <b-card
          class="job__item mb-4"
          v-for="(job, index) in jobsListFilter"
          :key="index"
        >
          <span class="job__data d-block"
            ><b>Solicitante:</b> {{ job.petitioner }}</span
          >
          <span class="job__data d-block"><b>Categoría de servicio:</b></span>
          <span class="job__data d-block text-center">{{ job.category }}</span>
          <span class="job__data d-block mt-2"><b>Descripción:</b></span>
          <p class="job__data">
            {{ job.description }}
          </p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <b-button variant="primary" @click="isWorkDetailActive = true"
              >Ver detaille</b-button
            >
            <span>Hace 2 días</span>
          </div>
        </b-card>
      </div>
      <div class="mt-3">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          first-number
          last-number
          align="center"
        ></b-pagination>
      </div>
    </div>

    <b-modal
      v-model="showModalProposal"
      id="modal-proposal"
      title="Mi propuesta"
      size="lg"
      centered
    >
      <b-form @submit.prevent="sendProposal" ref="formModal" validated>
        <p>
          Estima un rango de tus honorarios por el trabajo. Excluye el precio de
          los materiales u otros
        </p>
        <div class="row mx-0 justify-content-around align-items-center mt-3">
          <div class="col-12 col-lg-5 col-sm-12">
            <b-input-group prepend="S/" id="input-proposal-1">
              <b-form-input
                placeholder="Minimo"
                v-model="form.min"
                oninput="this.value = value.replace(/[^0-9]/g, '')"
                required
                class="rounded-right"
              ></b-form-input>
            </b-input-group>
          </div>
          <div class="col-12 col-lg-2 col-sm-12 text-center">-</div>
          <div class="col-12 col-lg-5 col-sm-12">
            <b-input-group prepend="S/" id="input-proposal-2">
              <b-form-input
                placeholder="Maximo"
                oninput="this.value = value.replace(/[^0-9]/g, '')"
                v-model="form.max"
                required
                class="rounded-right"
              ></b-form-input>
            </b-input-group>
          </div>
        </div>
        <b-form-group
          id="input-group-3"
          label="Comentarios adicionales:"
          label-for="textarea"
          class="mt-5"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.coment"
            placeholder="Ingrese un comentario adicional"
            class="rounded-left"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <div style="display: none">
          <button type="submit" ref="btnModal"></button>
        </div>
      </b-form>
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col
            cols="12"
            lg="11"
            class="d-flex justify-content-end w-100 mx-auto"
          >
            <b-button
              variant="secondary"
              @click="showModalProposal = false"
              class="me-3"
              >Cancelar
            </b-button>
            <b-button
              variant="primary"
              @click="$refs.btnFormPresentation.click()"
              >Enviar</b-button
            >
          </b-col>
        </b-row>
      </template>
    </b-modal>
    
    <modal-image
      v-show="showModalImage"
      @close-modal="showModalImage = false"
      @click="showModalImage = false"
    />
  </div>
</template>

<script lang="ts">
import { alertSuccessButton } from "@/utils/SweetAlert";
import ModalImage from "@/shared/components/ModalImage.vue";
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import Job from "@/interfaces/Job.interface";
import DropDownItem from "@/interfaces/DropDownItem.interface";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "JobsListComponent",
  components: {
    ModalImage,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        500: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        750: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        950: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        992: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1400: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  setup() {
    const isWorkDetailActive = ref<boolean>(false);
    const showModalProposal = ref<boolean>(false);
    const showModalImage = ref<boolean>(false);
    const totalRows = ref<number>(0);
    const currentPage = ref<number>(1);
    const perPage = ref<number>(4);
    const categorySelected = ref<number>(0);
    const selectCategories = ref<DropDownItem[]>([
      { value: 0, label: "Todas" },
      { value: 1, label: "Albañil" },
      { value: 2, label: "Electricista" },
      { value: 3, label: "Gasfitero" },
    ]);
    const dateSelected = ref<number>(0);
    const selectDates = ref<DropDownItem[]>([
      { value: 0, label: "Todas" },
      { value: 1, label: "Hoy" },
      { value: 2, label: "Esta semana" },
      { value: 3, label: "Este mes" },
    ]);
    const locationSelected = ref<number>(0);
    const selectLocations = ref<DropDownItem[]>([
      { value: 0, label: "Todas" },
      { value: 1, label: "Lima Norte" },
      { value: 2, label: "Lima Sur" },
      { value: 3, label: "Lima Este" },
    ]);
    const jobsList = ref<Job[]>([
      {
        id: 1,
        petitioner: "Solicitante 1",
        category: "Categoria 1",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 2,
        petitioner: "Solicitante 2",
        category: "Categoria 2",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 3,
        petitioner: "Solicitante 3",
        category: "Categoria 3",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 4,
        petitioner: "Solicitante 4",
        category: "Categoria 4",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 5,
        petitioner: "Solicitante 5",
        category: "Categoria 5",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 6,
        petitioner: "Solicitante 6",
        category: "Categoria 6",
        description: "Descripcion de prueba para la card de trabajos",
      },
      {
        id: 7,
        petitioner: "Solicitante 7",
        category: "Categoria 7",
        description: "Descripcion de prueba para la card de trabajos",
      },
    ]);
    const jobsListFilter = ref<Job[]>([]);
    const form = ref({
      min: "",
      max: "",
      coment: "",
    });

    const changePage = (page: number) => {
      const mq = window.matchMedia("(max-width: 991px)");
      if (!mq.matches) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      const container: any = document.querySelector(".jobs__list");
      if (container && mq.matches) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }

      jobsListFilter.value = jobsList.value.slice(
        (page - 1) * perPage.value,
        page * perPage.value
      );
    };

    const getAllJobs = () => {
      totalRows.value = jobsList.value.length;
      changePage(1);
    };

    const sendProposal = () => {
      alertSuccessButton("Se envio una propuesta exitosamente");
    };

    watch(currentPage, (newValue, oldValue) => {
      //changePage(newValue);
      console.log(newValue, oldValue);
    });

    watchEffect(() => {
      //console.log(currentPage.value);
      changePage(currentPage.value);
    });

    const procesarTecla = (event: any) => {
      if (event.key === "Escape") {
        showModalImage.value = false;
      }
    };

    onMounted(() => {
      getAllJobs();
      window.addEventListener("keydown", procesarTecla);
    });

    return {
      isWorkDetailActive,
      showModalProposal,
      showModalImage,
      totalRows,
      currentPage,
      perPage,
      categorySelected,
      selectCategories,
      dateSelected,
      selectDates,
      locationSelected,
      selectLocations,
      jobsList,
      jobsListFilter,
      form,
      sendProposal,
    };
  },
});
</script>

<style lang="scss" scoped>
.jobs__container {
  .jobs__content {
    border-left: 1px solid rgba(0, 0, 0, 0.274);

    .jobs__list {
      .job__item {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

        .job__data {
          font-size: 0.9rem;
        }
      }
    }
  }

  .jobs__content--movil {
    border: none;

    .jobs__list {
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;

      .job__item {
        display: inline-block;
        margin-right: 15px;
        width: 80%;
        max-width: 350px;

        .job__data {
          white-space: normal;
        }
      }
    }
  }

  .jobs__content-web {
    min-height: calc(100vh - 110px);

    .jobs__list {
      overflow: auto;

      .job__item {
        height: auto;
      }
    }
  }

  .job__filters {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }

  .job-detail__container {
    height: calc(100% - 250px);

    .job-detail__no-data {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .job-detail {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

    .job-detail__title {
      font-size: 1.8rem;
    }

    .job-detail__close {
      cursor: pointer;
      font-size: 1.3rem;

      &:hover {
        color: rgb(51, 51, 51);
      }
    }

    .job-detail__petitioner-image {
      height: 65px;
      width: 65px;
      border-radius: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }

    .job-detail__name {
      font-size: 1.4rem;
    }

    .job-detail__state--open {
      i {
        color: rgb(64, 231, 114);
      }
    }

    .job-detail__timer {
      i {
        color: #3a88ec;
      }
    }

    .job-detail__work {
      padding: 6px 25px;
      background-color: #3a88ec;
      color: white;
      width: 80%;
      max-width: 250px;
      min-width: 120px;
      border-radius: 25px;
    }

    .job-detail__image {
      height: 140px;
      border: 1px solid rgba(61, 61, 61, 0.527);
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
}

#imagen__content {
  width: 350px;
  height: 350px;
  margin: auto;
  max-width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

#input-proposal-1 .input-group-prepend .input-group-text,
#input-proposal-2 .input-group-prepend .input-group-text {
  border-bottom-left-radius: 25px !important;
  border-top-left-radius: 25px !important;
}

#input-proposal-1 input,
#input-proposal-2 input {
  border-bottom-right-radius: 25px !important;
  border-top-right-radius: 25px !important;
}

@media (max-width: 991px) {
  .jobs__container {
    .job-detail__container {
      height: auto;
      padding: 15px 0;
      margin-bottom: 20px;
    }
  }
}
</style>
