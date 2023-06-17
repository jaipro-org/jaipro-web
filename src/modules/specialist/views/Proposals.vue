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
                  :reduce="(option:any) => option.value"
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
              <b>Cliente:</b> {{ item.profName + " " + item.profLastName }}
            </span>
            <span class="job__data d-block">
              <b>Se necesita:</b> {{ item.projectDetail.professionName }}
            </span>
            <span class="job__data d-block mt-2"><b>Descripción:</b></span>
            <p class="job__data">
              {{ item.projectDetail.detail }}
            </p>
            <span class="job__data d-block">
              <b>Fecha de envío:</b> {{ item.projectDetail.creationDate }}
            </span>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <b-button variant="primary" @click="showDetail(item)"
                >Ver detalle</b-button
              >
              <!-- <span>Hace 2 días</span> -->
              <span>
                <i
                  class="fa-solid me-1"
                  :class="iconForState(item.projectDetail.status)"
                ></i>
                {{ statusForID(item.projectDetail.status) }}
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
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <span class="d-block mb-1">
                    <b>Cliente:</b>
                    {{ proposalDetail.fullName }}
                  </span>
                </div>
                <span class="job-detail__status">
                  <i class="fa-solid fa-circle-dollar-to-slot"></i>
                  <!-- <i class="fa-solid fa-dollar-sign dollar"></i> -->
                  {{ proposalDetail.status }}
                </span>
              </div>

              <div class="mx-0 mt-3 align-items-center">
                <b>Se necesita:</b>
                <span class="job-detail__work text-center ms-5">
                  {{ proposalDetail.profession }}</span
                >
              </div>

              <div class="mt-3 mb-1">
                <b>Ubicacion de trabajo:</b>
                {{ proposalDetail.ubication }}
              </div>

              <div class="mt-3 mb-3">
                <b>Fecha de solicitud:</b>
                {{ proposalDetail.date }}
              </div>

              <router-link
                :to="{
                  name: 'project-detail',
                  params: { projectId: proposalDetail.id },
                }"
                >Ver mas detalles del proyecto</router-link
              >

              <p class="mt-4">
                <b>
                  Estima un rango de tus honorarios por el trabajo. Excluye el
                  precio de los materiales u otros.
                </b>
              </p>

              <!-- <div class="mt-3">
                <span class="d-block mb-1"><b>Imagenes:</b></span>
              </div> -->
              <!-- <div class="row mx-0 justify-content-around mt-2">
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
              </div> -->

              <div class="text-center mt-2">
                <span>
                  Mínimo:
                  <span class="badge bg-secondary">
                    {{ "$" + proposalDetail.min }}
                  </span>
                </span>
                -
                <span>
                  Máximo:
                  <span class="badge bg-secondary">
                    {{ "$" + proposalDetail.max }}
                  </span>
                </span>
              </div>

              <hr />
              <div class="d-flex justify-content-between mt-2">
                <h1 class="job-detail__title">Mensajes con el cliente</h1>
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
                      class="fa-regular fa-comment-dots proposal-card__action proposal-card__action--primary me-2"
                    ></i>
                    Ver mensajes
                  </div>
                </router-link>
              </div>

              <hr />
              <div class="d-flex justify-content-between mt-2">
                <h1 class="job-detail__title">Cobros</h1>
              </div>
              <hr />

              <b-row class="mx-0 mt-5">
                <b-col cols="12" lg="6" class="mx-auto">
                  <payment-status-flow
                    :type="1"
                    :status="1"
                    :amount="350"
                  ></payment-status-flow>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div
      class="jobs__content jobs__content-web col-12 col-lg-4 pt-3 d-none d-lg-block"
    >
      <h4 class="mb-1 px-3">Propuestas</h4>
      <div class="jobs__list px-3 pt-1">
        <b-card
          class="job__item mb-4"
          v-for="(item, index) in proposalListFilter"
          :key="index"
        >
          <span class="job__data d-block">
            <b>Cliente:</b> {{ item.profName + " " + item.profLastName }}
          </span>
          <span class="job__data d-block">
            <b>Se necesita:</b> {{ item.projectDetail.professionName }}
          </span>
          <span class="job__data d-block mt-2"><b>Descripción:</b></span>
          <p class="job__data">
            {{ item.projectDetail.detail }}
          </p>
          <span class="job__data d-block">
            <b>Fecha de envío:</b> {{ item.projectDetail.creationDate }}
          </span>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <b-button variant="primary" @click="showDetail(item)"
              >Ver detaille</b-button
            >
            <!-- <span>Hace 2 días</span> -->
            <span>
              <!-- <i class="fa-solid fa-clock me-1"></i> -->
              <i
                class="fa-solid me-1"
                :class="iconForState(item.projectDetail.status)"
              ></i>
              {{ statusForID(item.projectDetail.status) }}
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
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { alertSuccessButton } from "@/utils/SweetAlert";
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import Proposal from "@/interfaces/Proposal.interface";
import DropDownItem from "@/interfaces/DropDownItem.interface";
import PaymentStatusFlow from "./components/PaymentStatus/PaymentStatusFlow.vue";
import { optionToElement } from "bootstrap-vue-3/dist/composables";

export default defineComponent({
  name: "JobsListComponent",
  components: {
    PaymentStatusFlow,
  },
  setup() {
    const URL = process.env.VUE_APP_BACK_URL;
    const isWorkDetailActive = ref<boolean>(false);
    const totalRows = ref<number>(0);
    const currentPage = ref<number>(1);
    const perPage = ref<number>(10);
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
    const jobsList = ref<Proposal[]>([]);
    const proposalListFilter = ref<Proposal[]>([]);
    const proposalDetail = ref();
    const form = ref({
      min: 10,
      max: 20,
      coment: "aaaa",
    });

    const showDetail = async (item: any) => {
      const projectID = {
        serviceProposalId: item.projectDetail.projectId,
      };

      const { data } = await axios.get(URL + "/specialist/proposals/details");

      proposalDetail.value = {
        id: projectID.serviceProposalId,
        fullName: data.profName + " " + data.profLastName,
        profession: data.projectDetail.professionName,
        status: "Por cobrar",
        ubication: data.projectDetail.district,
        date: data.projectDetail.creationDate,
        min: data.minCost,
        max: data.maxCost,
      };
      isWorkDetailActive.value = true;
    };

    const iconForState = (stateID: number) => {
      const stateToIcon = [
        "fa-paper-plane",
        "fa-face-smile",
        "fa-money-bill",
        "fa-circle-check",
      ];

      return stateToIcon[stateID - 1] || "";
    };

    const statusForID = (stateID: number) => {
      const state = ["Enviado", "Aceptado", "Rechazado", "Finalizado"];
      return state[stateID - 1] || "";
    };

    const changePage = (page: number) => {
      const mq = window.matchMedia("(max-width: 991px)");
      if (!mq.matches) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      const container: any = document.querySelector(".jobs__list");
      if (container && mq.matches) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }

      proposalListFilter.value = jobsList.value.slice(
        (page - 1) * perPage.value,
        page * perPage.value
      );
    };

    const getAllProposals = async () => {
      const { data } = await axios.get(URL + "/specialist/proposals");
      console.log(data);
      jobsList.value = data.data;
      totalRows.value = data.totalRows;
      changePage(1);
    };

    const sendProposal = () => {
      alertSuccessButton("Se envio una propuesta exitosamente");
    };

    watch(currentPage, (newValue, oldValue) => {
      //changePage(newValue);
      // console.log(newValue, oldValue);
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
      proposalDetail,
      sendProposal,
      iconForState,
      statusForID,
      showDetail,
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

    .job-detail__status {
      i {
        color: #3a88ec;
        font-size: 1.3rem;
      }
    }

    .job-detail__work {
      padding: 4px 18px;
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
