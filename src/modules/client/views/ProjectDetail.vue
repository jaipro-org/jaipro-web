<template>
  <div class="project__container mb-2">
    <b-row class="mx-0 pt-5" v-if="project">
      <div cols="12" class="col-12 mb-3 mb-md-1">
        <b-row class="mx-0">
          <div cols="12" class="col-12 text-end d-block d-md-none mb-3">
            <h5 class="project__back">
              <router-link :to="{ name: 'home' }" class="project__back-link">
                <i class="fa-solid fa-arrow-left me-2"></i>Volver
              </router-link>
            </h5>
          </div>
          <div cols="12" md="10" class="col-12 col-md-10">
            <h1 class="project__title mb-3">Detalle del proyecto</h1>
          </div>
          <div
            cols="12"
            md="2"
            class="col-12 col-md-2 text-end d-none d-md-block"
          >
            <h5 class="project__back">
              <router-link :to="{ name: 'home' }" class="project__back-link">
                <i class="fa-solid fa-arrow-left me-2"></i>Volver
              </router-link>
            </h5>
          </div>
        </b-row>
        <div>
          <b-card class="project-card">
            <h5>
              <span class="me-2">Profesión:</span>
              <b-badge variant="primary" class="py-1 px-2">{{
                project.job.title
              }}</b-badge>
            </h5>
            <p class="mb-2">
              {{ project.detail }}
            </p>
            <span>Fecha: 21 de Enero del 2021</span>
          </b-card>
        </div>
      </div>
      <div cols="12" class="col-12 mb-3 mb-md-1">
        <h1 class="project__title mb-3">Imagenes adjuntas</h1>
        <div>
          <b-card class="project-card">
            <div
              class="project-card__list-image d-flex flex-wrap w-100 justify-content-center"
            >
              <div class="project-card__image">
                <img
                  src="@/assets/img-delete/pintor.jpg"
                  alt=""
                  @click="isShowModal = true"
                  role="button"
                />
              </div>
              <div class="project-card__image">
                <img
                  src="@/assets/img-delete/pintor.jpg"
                  alt=""
                  @click="isShowModal = true"
                  role="button"
                />
              </div>
              <div class="project-card__image">
                <img
                  src="@/assets/img-delete/pintor.jpg"
                  alt=""
                  @click="isShowModal = true"
                  role="button"
                />
              </div>
            </div>
          </b-card>
        </div>
      </div>
      <div
        cols="12"
        v-if="this.project.status != 2"
        class="col-12 mb-3 mb-md-1"
      >
        <h1 class="project__title mb-3">Propuestas(5)</h1>
        <div class="proposals-list mb-3" v-if="this.project.status != 2">
          <proposal-card
            v-for="(proposal, index) in proposals"
            :key="index"
            :proposal="proposal"
            @on-accept="handleAcceptProposal"
            @on-reject="handleRejectProposal"
          ></proposal-card>
          <b-button
            variant="primary"
            @click="loadProposals"
            class="w-100 proposals-list__btn-loading"
          >
            <i
              class="fa-regular me-2"
              :class="isLoadingProposals ? 'fas fa-spinner fa-spin' : 'fa-plus'"
            ></i>
            {{ isLoadingProposals ? "Cargando" : "Ver mas" }}
          </b-button>
        </div>
      </div>
      <div cols="12" v-else class="col-12 mb-3 mb-md-1">
        <h1 class="project__title project__title--proposal mb-3">
          <i class="fa-solid fa-circle-check me-2"></i>
          Propuesta Aceptada
        </h1>

        <div class="proposals-list mb-3">
          <proposal-card
            :proposal="project.proposal"
            @pay-cash="openModalPayCash"
            @pay-online="redirectPayOnline"
            @qualification-modal="openQualificationModal"
          ></proposal-card>
        </div>
      </div>
    </b-row>

    <b-modal id="modal-pay-cash" ref="modal-pay-cash" title="Pago efectivo">
      <template #modal-footer>
        <div class="d-flex justify-content-end w-100">
          <b-button variant="secondary" @click="closeModalPayCash" class="me-3"
            >Cancelar</b-button
          >
          <b-button variant="primary" @click="payCash">Finalizar</b-button>
        </div>
      </template>
      <div>
        <span class="d-block text-center">Confirma el monto a pagar</span>
        <div class="mt-3">
          <span>Especialista:</span>
          <span class="ms-2 modal-pay-cash__specialist"
            >Pedro Ramirez Estrada</span
          >
        </div>
        <b-form
          @submit.prevent="handlePayCash"
          v-model="form.payAmount"
          class="mt-2"
          validated
        >
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="12"
            content-cols-sm="12"
            label="Montol total del servicio a cobrar:"
            label-for="input-pay-amount"
          >
            <b-input-group size="lg" prepend="$">
              <b-form-input
                id="input-pay-amount"
                required
                oninput="this.value = value.replace(/[^0-9]/g, '')"
              >
              </b-form-input>
            </b-input-group>
          </b-form-group>
          <button ref="button-form" type="submit" class="d-none"></button>
        </b-form>
      </div>
    </b-modal>

    <b-modal
      id="modal-qualification"
      class="modal-qualification"
      title="Calificar"
    >
      <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
        <i
          class="fa-solid fa-star me-3 modal-qualification__icon"
          role="button"
          @click="checkQualifaction($event, 5)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-qualification__icon"
          role="button"
          @click="checkQualifaction($event, 4)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-qualification__icon"
          role="button"
          @click="checkQualifaction($event, 3)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-qualification__icon"
          role="button"
          @click="checkQualifaction($event, 2)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-qualification__icon"
          role="button"
          @click="checkQualifaction($event, 1)"
        ></i>
      </div>
      <template #modal-footer>
        <div>
          <b-button variant="primary" @click="sendQualification"
            >Enviar calificación</b-button
          >
        </div>
      </template>
    </b-modal>

    <modal-image v-show="isShowModal" @close-modal="isShowModal = false" />
  </div>
</template>

<script setup lang="ts">
import ModalImage from "@/shared/components/ModalImage.vue";
import {
  alertLoading,
  alertSuccessfully,
  alertActionButton,
  closeAlert,
} from "@/utils/SweetAlert";
import ProposalCard from "@/modules/client/views/Components/ProposalCard.vue";
import { defineProps, ref, toRefs } from "vue";

const props = defineProps<{
  projectId: number;
}>();

const { projectId } = toRefs(props);

//Maneja la gestion del modal de imagenes
const isShowModal = ref(false);
// A manera de ejemplo tenemos los estados para el projecto
//   0 = 'abierto'
//   1 = "con propuestas"
//   2 = "con propuesta aceptada"
const project = ref({
  status: 1,
  job: {
    id: 0,
    title: "Carpintero",
  },
  proposal: {}, //Propuesta aceptada
  detail:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempore accusamus suscipit repellat esse laboriosam dolore. Libero quae optio voluptatibus? Nostrum vel nihil dolor soluta voluptatum tenetur iste, assumenda sunt, minus nemo facilis earum quis delectus possimus, illum eos expedita.",
});
// A manera de ejemplo tenemos los estados para las propuestas
//   0 = 'propuesto'
//   1 = "aceptado"
//   2 = "rechazado"
//   3 = "pagado"
const isLoadingProposals = ref(false);
const proposals = ref([
  {
    id: 0,
    name: "Pedro Ramirez Estrada",
    status: 0,
    isQualified: false,
    jobs: [
      {
        id: 0,
        title: "Carpintero",
      },
      {
        id: 1,
        title: "Gasfitero",
      },
      {
        id: 2,
        title: "Electricista",
      },
    ],
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel",
  },
  {
    id: 1,
    name: "Estiben Soza Bermudes",
    status: 0,
    isQualified: false,
    jobs: [
      {
        id: 0,
        title: "Carpintero",
      },
      {
        id: 1,
        title: "Gasfitero",
      },
    ],
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel",
  },
]);

const form = ref({
  payAmount: "",
});

function loadProposals() {
  console.log("Cardar mas propuestas");
  isLoadingProposals.value = true;
  const proposal = {
    id: 0,
    name: "Pedro Ramirez Estrada",
    status: 0,
    jobs: [
      {
        id: 0,
        title: "Carpintero",
      },
      {
        id: 1,
        title: "Gasfitero",
      },
      {
        id: 2,
        title: "Electricista",
      },
    ],
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel",
  };

  const timeOut = setTimeout(() => {
    proposals.value.push(proposal);
    proposals.value.push(proposal);
    isLoadingProposals.value = false;
    clearTimeout(timeOut);
  }, 2000);
}

async function handleAcceptProposal(id: number) {
  const alertResult = await alertActionButton(
    "Aceptación de oferta",
    "¿Seguro que desea aceptar la oferta?",
    "Aceptar",
    "info"
  );
  if (alertResult) {
    //Simulación de carga del Backend
    alertLoading();
    const proposal = proposals.value.find((proposal) => proposal.id == id);
    proposal!.status = 1;
    project.value.proposal = { ...proposal };
    project.value.status = 2;
    const timeOut = setTimeout(() => {
      alertSuccessfully("Se acepto la propuesta del projecto exitosamente");
      const timeOut2 = setTimeout(() => {
        closeAlert();
        clearTimeout(timeOut2);
      }, 2500);
      clearTimeout(timeOut);
    }, 1500);
  }
}

async function handleRejectProposal(id: number) {
  const alertResult = await alertActionButton(
    "Rechazar oferta",
    "¿Seguro que desea rechazar la oferta?",
    "Rechazar",
    "error"
  );
  if (alertResult) {
    //Simulación de carga del Backend
    alertLoading();
    const timeOut = setTimeout(() => {
      proposals.value.splice(id, 1);
      alertSuccessfully("Se rechazo la propuesta del projecto exitosamente");
      const timeOut2 = setTimeout(function () {
        closeAlert();
        clearTimeout(timeOut2);
      }, 2500);
      clearTimeout(timeOut);
    }, 1500);
  }
}

function openModalPayCash() {
  this.$bvModal.show("modal-pay-cash");
}

function closeModalPayCash() {
  this.$bvModal.hide("modal-pay-cash");
}

function payCash() {
  this.button.click();
}

function handlePayCash() {
  console.log("Finalizar pago");
  project.value.proposal!.status = 3;
  closeModalPayCash();
}

//Redirecciona a la vista de pago online
function redirectPayOnline() {
  this.$router.push({ name: "pay-online" });
}

//Abrir el Modal de Calificacion
function openQualificationModal() {
  this.$bvModal.show("modal-qualification");
}

//Cerrar el Modal de calificación
function closeQualificationModal() {
  this.$bvModal.hide("modal-qualification");
}

//Enviar una calificacion
function checkQualifaction(event: Event) {
  clearIcons();
  const icon: any = event.target;
  icon.classList.add("active");
}

function sendQualification() {
  alertLoading();
  project.value.proposal.isQualified = true;
  const timeOut = setTimeout(() => {
    alertSuccessfully("Se envio la calificación exitosamente");
    this.clearIcons();
    this.closeQualificationModal();
    const timeOut2 = setTimeout(() => {
      closeAlert();
      clearTimeout(timeOut2);
    }, 1500);
    clearTimeout(timeOut);
  }, 1500);
}

//Limpiar iconos del modal de calificacion
function clearIcons() {
  const iconList = document.querySelectorAll(".modal-qualification__icon");
  iconList.forEach((icon) => {
    icon.classList.remove("active");
  });
}
</script>

<style lang="scss" scoped>
.project__container {
  .project__back {
    .project__back-link {
      text-decoration: none;
      color: #7e7e7e;

      & :hover {
        color: #3a88ec;
      }
    }
  }

  .project-card {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

    .project-card__list-image {
      gap: 15px;

      .project-card__image {
        width: 150px;
        height: 150px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
      }
    }
  }

  .proposals-list {
    .proposals-list__btn-loading {
      font-size: 1rem;

      i {
        font-weight: 600;
      }
    }
  }

  .project__title {
    font-size: 1.5rem;

    & .project__title--proposal {
      i {
        color: rgb(64, 231, 114);
      }
    }
  }
}

#modal-pay-cash {
  .modal-pay-cash__specialist {
    font-weight: 500;
    font-size: 1.1rem;
  }
}

#modal-qualification {
  .modal-qualification__icon {
    color: rgb(165, 165, 165);
    font-size: 1.5rem;

    & :hover {
      color: rgb(255, 196, 0);
    }

    & :hover ~ .modal-qualification__icon {
      color: rgb(255, 196, 0);
    }

    & .active {
      color: rgb(255, 196, 0);
    }

    & .active ~ .modal-qualification__icon {
      color: rgb(255, 196, 0);
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
</style>
