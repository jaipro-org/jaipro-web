<template>
  <div class="jobs__container mx-0 mt-0 row">
    <div class="col-12 col-lg-8 pt-5">
      <div class="mt-1">
        <b-card class="job__filters">
          <div class="row mx-0">
            <div class="col-12">
              <b-form-group
                label="Estado de propuesta"
                label-for="select-status"
              >
                <v-select
                  id="select-status"
                  multiple
                  v-model="statusSelected"
                  :options="statusOptions"
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
        <h4 class="text-center">Propuestas</h4>
        <div class="jobs__list px-3">
          <b-card
            class="job__item mb-4"
            v-for="(item, index) in proposalListFilter"
            :key="index"
          >
            <span class="job__data d-block">
              <b>Cliente:</b> {{ item.petitioner }}
            </span>
            <span class="job__data d-block">
              <b>Se necesita:</b> {{ item.category }}
            </span>
            <span class="job__data d-block mt-2"><b>Descripción:</b></span>
            <p class="job__data">
              {{ item.description }}
            </p>
            <span class="job__data d-block">
              <b>Fecha de envío:</b> {{ item.quotationDate }}
            </span>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <b-button variant="primary" @click="isWorkDetailActive = true"
                >Ver detalle</b-button
              >
              <!-- <span>Hace 2 días</span> -->
              <span>
              <i 
                class="fa-solid me-1"
                :class="item.icon"
              ></i>
              {{ item.state }}
            </span>
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
              <h4 class="text-center">
                Seleccionar una propuesta para abrirla
              </h4>
            </div>
          </div>
          <b-card class="job-detail" v-else>
            <div>
              <div class="d-flex justify-content-between">
                <h1 class="job-detail__title">Datos de la propuesta</h1>
                <span
                  class="job-detail__close"
                  @click="isWorkDetailActive = false"
                  ><i class="fa-solid fa-xmark"></i
                ></span>
              </div>
              <hr />
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <div class="d-flex align-items-center">
                  <div class="job-detail__petitioner-image">
                    <img src="@/assets/img-delete/profile.jpg" alt="" />
                  </div>
                  <h1 class="job-detail__name ms-3">Ernesto Chavez</h1>
                </div>
                <span class="job-detail__timer">
                  <i class="fa-solid fa-paper-plane me-1"></i>
                  Enviado
                </span>
              </div>
              <div class="mx-0 mt-4 align-items-center">
                <span class="d-block mb-1">
                  <b>Se necesita:</b>
                  <span class="job-detail__work text-center ms-5">Pintor</span>
                </span>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1"
                  ><b>Descripcion del trabajo: </b></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum dolor ut fugiat nesciunt, eveniet corporis nostrum
                  asperiores earum provident voluptatibus alias accusamus sequi
                  dolore totam voluptatem maxime ea laborum molestias pariatur
                  consequuntur quasi assumenda. Optio ea reiciendis ...
                </p>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1">
                  <b>Ubicacion de trabajo:</b>
                  Ventanilla
                </span>
              </div>
              <div class="mt-3">
                <span class="mb-1">
                  <b>Fecha de solicitud:</b>
                  19/12/2020
                </span>
                <span class="mb-1 ms-5">
                  <b>Fecha de propuesta:</b>
                  05/01/2021
                </span>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1"><b>Imagenes:</b></span>
              </div>
              <div class="row mx-0 justify-content-around mt-2">
                <div class="col-6 col-lg-3 mb-3">
                  <div class="job-detail__image" v-b-modal.modal-imagen>
                    <img src="@/assets/img-delete/pintor.jpg" alt="" />
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-3">
                  <div class="job-detail__image" v-b-modal.modal-imagen>
                    <img src="@/assets/img-delete/pintor.jpg" alt="" />
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-3">
                  <div class="job-detail__image" v-b-modal.modal-imagen>
                    <img src="@/assets/img-delete/pintor.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="d-block mb-1">
                  <b>Honorarios estimados:</b>
                </span>
                <p>
                  Mínimo: <span class="badge bg-secondary">$120</span> - Máximo:
                  <span class="badge bg-secondary">$250</span>
                </p>
              </div>
              <hr />
              <div class="d-flex justify-content-between mt-2">
                <h1 class="job-detail__title">Mensajes</h1>
              </div>
              <hr />
              <div class="d-flex justify-content-center">
                <router-link
                  class="proposal-card__action-link"
                  :to="{ name: 'specialist-chat' }"
                  target="_blank"
                >
                  <div
                    v-b-tooltip.hover
                    title="Abrir Chat"
                    class="d-flex align-items-center"
                  >
                    <i
                      class="
                        fa-regular fa-comment-dots
                        proposal-card__action proposal-card__action--primary
                        me-2
                      "
                    ></i>
                    Ver mensajes
                  </div>
                </router-link>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div
      class="
        jobs__content jobs__content-web
        col-12 col-lg-4
        pt-3
        d-none d-lg-block
      "
    >
      <h4 class="mb-1 px-3">Propuestas</h4>
      <div class="jobs__list px-3 pt-1">
        <b-card
          class="job__item mb-4"
          v-for="(job, index) in proposalListFilter"
          :key="index"
        >
          <span class="job__data d-block">
            <b>Cliente:</b> {{ job.petitioner }}
          </span>
          <span class="job__data d-block">
            <b>Se necesita:</b> {{ job.category }}
          </span>
          <span class="job__data d-block mt-2"><b>Descripción:</b></span>
          <p class="job__data">
            {{ job.description }}
          </p>
          <span class="job__data d-block">
            <b>Fecha de envío:</b> {{ job.quotationDate }}
          </span>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <b-button variant="primary" @click="isWorkDetailActive = true"
              >Ver detaille</b-button
            >
            <!-- <span>Hace 2 días</span> -->
            <span>
              <!-- <i class="fa-solid fa-clock me-1"></i> -->
              <i 
                class="fa-solid me-1"
                :class="job.icon"
              ></i>
              {{ job.state }}
            </span>
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
      id="modal-proposal"
      title="Mi propuesta"
      size="lg"
      centered
      hide-footer
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
      <div class="modal-footer row mt-5 pb-0">
        <div class="mx-0 w-100">
          <div class="col-12 d-flex justify-content-between w-100">
            <b-button
              variant="secondary"
              @click="$bvModal.hide('modal-proposal')"
              >Cancelar</b-button
            >
            <b-button variant="primary" @click="$refs.btnModal.click()"
              >Enviar</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>

    <BModal
      size="md"
      id="modal-imagen"
      class="modal__imagen"
      title="Imagen del trabajo"
    >
      <template #modal-footer>
        <div class="mx-0 w-100">
          <div class="col-12 cold-flex justify-content-between w-100">
            <b-button variant="secondary" @click="$bvModal.hide('modal-imagen')"
              >Cancelar</b-button
            >
            <b-button variant="primary" @click="$refs.btnModal.click()"
              >Enviar</b-button
            >
          </div>
        </div>
      </template>
      <div id="imagen__content">
        <img src="@/assets/img-delete/pintor.jpg" alt="pintor" />
      </div>
    </BModal>
  </div>
</template>
  
<script lang="ts">
import { alertSuccessButton } from "@/utils/SweetAlert";
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import Proposal from "@/interfaces/Proposal.interface";
import DropDownItem from "@/interfaces/DropDownItem.interface";

export default defineComponent({
  name: "JobsListComponent",
  setup() {
    const isWorkDetailActive = ref<boolean>(false);
    const totalRows = ref<number>(0);
    const currentPage = ref<number>(1);
    const perPage = ref<number>(4);
    const statusSelected = ref<number>(0);
    const statusOptions = ref<DropDownItem[]>([
      { value: 0, label: "Todas" },
      { value: 1, label: "Enviado" },
      { value: 2, label: "Aceptado" },
      { value: 3, label: "Rechazado" },
      { value: 4, label: "Finalizado" },
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
    const jobsList = ref<Proposal[]>([
      {
        id: 1,
        petitioner: "Solicitante 1",
        category: "Categoria 1",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Enviado",
        icon: "fa-paper-plane"
      },
      {
        id: 2,
        petitioner: "Solicitante 2",
        category: "Categoria 2",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Aceptada",
        icon: "fa-face-smile"
      },
      {
        id: 3,
        petitioner: "Solicitante 3",
        category: "Categoria 3",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Por cobrar",
        icon: "fa-money-bill"
      },
      {
        id: 4,
        petitioner: "Solicitante 4",
        category: "Categoria 4",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Finalizada",
        icon: "fa-circle-check"
      },
      {
        id: 5,
        petitioner: "Solicitante 5",
        category: "Categoria 5",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Enviado",
        icon: "fa-paper-plane"
      },
      {
        id: 6,
        petitioner: "Solicitante 6",
        category: "Categoria 6",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Enviado",
        icon: "fa-paper-plane"
      },
      {
        id: 7,
        petitioner: "Solicitante 7",
        category: "Categoria 7",
        description: "Descripcion de prueba para la card de trabajos",
        quotationDate: "05/01/2021",
        state: "Enviado",
        icon: "fa-paper-plane"
      },
    ]);
    const proposalListFilter = ref<Proposal[]>([]);
    const form = ref({
      min: "",
      max: "",
      coment: "",
    });

    const changePage = (page: number) => {
      proposalListFilter.value = jobsList.value.slice(
        (page - 1) * perPage.value,
        page * perPage.value
      );
    };

    const getAllProposals = () => {
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

    onMounted(() => {
      getAllProposals();
    });

    return {
      isWorkDetailActive,
      totalRows,
      currentPage,
      perPage,
      statusSelected,
      statusOptions,
      dateSelected,
      selectDates,
      locationSelected,
      selectLocations,
      jobsList,
      proposalListFilter,
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
      height: 160px;
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
  