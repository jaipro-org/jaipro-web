<template>
  <div>
    <b-card class="proposal-card" v-if="proposal">
      <div
        class="d-flex justify-content-between proposal-card__item"
        v-if="!isShow"
      >
        <h1 class="proposal-card__title">
          <router-link
            :to="{ name: 'specialist-profile' }"
            target="_blank"
            class="proposal-card__title-link"
          >
            {{ proposal.name }}
          </router-link>
        </h1>
        <i class="fa-solid fa-angle-down" @click="openCollapse"></i>
      </div>
      <div
        v-else
        class="proposal-card__item proposal-card__item--collapse"
        :class="{ active: isActive }"
      >
        <div class="row mx-0">
          <div cols="12" class="col-12 d-block d-md-none text-end mb-3">
            <i class="fa-solid fa-angle-up" @click="closeCollapse"></i>
          </div>
          <div
            cols="12"
            md="10"
            class="col-12 col-md-10 d-flex flex-wrap justify-content-center justify-content-md-start px-0"
          >
            <div class="proposal-card__image">
              <img src="@/assets/img-delete/experience.jpg" alt="" />
            </div>
            <div class="ps-0 ps-md-3 mt-3 mt-md-0">
              <h1 class="proposal-card__title">
                <router-link
                  :to="{ name: 'specialist-profile' }"
                  target="_blank"
                  class="proposal-card__title-link"
                >
                  {{ proposal.name }}
                </router-link>
              </h1>
              <div class="mt-2">
                <b-badge
                  variant="primary"
                  class="me-2 mb-1 px-2 py-2"
                  v-for="(job, index) in proposal.jobs"
                  :key="index"
                  >{{ job.title }}
                </b-badge>
              </div>
              <div class="mt-2">
                <span class="proposal-card__star proposal-card__star--active"
                  ><i class="fa-solid fa-star"></i
                ></span>
                <span class="proposal-card__star proposal-card__star--active"
                  ><i class="fa-solid fa-star"></i
                ></span>
                <span class="proposal-card__star proposal-card__star--active"
                  ><i class="fa-solid fa-star"></i
                ></span>
                <span class="proposal-card__star proposal-card__star--active"
                  ><i class="fa-solid fa-star"></i
                ></span>
                <span class="proposal-card__star"
                  ><i class="fa-solid fa-star"></i
                ></span>
                <span class="text-primary ms-1">(13 valoraciones)</span>
              </div>
            </div>
          </div>
          <div cols="2" class="col-2 px-0 text-end d-none d-md-block">
            <i class="fa-solid fa-angle-up" @click="closeCollapse"></i>
          </div>
        </div>
        <div class="row mx-0">
          <div cols="12" class="col-12 px-0 mt-3">
            <p>
              {{ proposal.detail }}
            </p>
            <div>
              <i class="fa-regular fa-clock me-2"></i>
              <span class="proposal-card__date"
                >Fecha: Lunes 22 a las 4:55 PM</span
              >
            </div>
          </div>
          <div
            cols="12"
            class="col-12 px-0 mt-3 d-flex justify-content-center"
            v-if="proposal.status == 0"
          >
            <i
              class="fa-solid fa-circle-check mx-3 my-2 proposal-card__action proposal-card__action--succes"
              v-b-tooltip.hover
              title="Aceptar Propuesta"
              @click="$emit('on-accept', proposal.id)"
            ></i>

            <i
              class="fa-solid fa-circle-xmark mx-3 my-2 proposal-card__action proposal-card__action--danger"
              v-b-tooltip.hover
              title="Rechazar Propuesta"
              @click="$emit('on-reject', proposal.id)"
            ></i>
            <router-link :to="{ name: 'specialist-chat' }" target="_blank">
              <i
                class="fa-regular fa-comment-dots mx-3 my-2 proposal-card__action proposal-card__action--primary"
                v-b-tooltip.hover
                title="Abrir Chat"
              ></i>
            </router-link>
          </div>
          <div
            cols="12"
            class="col-12 px-0 mt-4"
            v-if="proposal.status == 1 || proposal.status == 3"
          >
            <div class="mb-4">
              <h2 class="proposal-card__subtitle">
                Mensajes con el especialista
              </h2>
              <hr class="mt-0" />
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
            </div>
          </div>
          <div cols="12" v-if="proposal.status == 1" class="col-12 px-0">
            <div>
              <h2 class="proposal-card__subtitle">Trabajo</h2>
              <hr class="mt-0" />
              <p class="text-center mt4">
                Si el trabajo se hizo como esperabas y el especialista cumplió
                su labor, podrá confirmar su trabajo dando click en el botón de
                abajo.
              </p>

              <div class="d-flex justify-content-center mt-3">
                <b-button variant="primary" @click="showModalAccept = true"
                  >Confirmar trabajo</b-button
                >
              </div>
            </div>
          </div>
          <div cols="12" v-if="proposal.status == 3" class="col-12 px-0">
            <div>
              <h2 class="proposal-card__subtitle">Trabajo</h2>
              <hr class="mt-0" />

              <h5 class="text-center my-4">
                Trabajo confimado
                <i class="fa-solid fa-circle-check color-success"></i>
              </h5>

              <div class="d-flex justify-content-center mt-3">
                <b-button variant="primary" @click="showModalQualify = true"
                  ><i class="fa-solid fa-star me-1"></i> Calificar
                  servicio</b-button
                >
              </div>
            </div>
          </div>
          <!-- <div cols="12" v-if="proposal.status == 1" class="col-12">
            <div>
              <h2 class="proposal-card__subtitle">Pagos</h2>
              <hr class="mt-0" />
              <div class="text-center">
                Escoge el medio de pago que mas se te acomode
              </div>
              <div class="row mx-0 justify-content-around mt-4">
                <div
                  cols="10"
                  md="4"
                  class="pay-card mb-4 mb-md-2 col-10 col-md-4 position-relative"
                >
                  <span class="pay-card__type pay-card__type--online">
                    Online
                  </span>
                  <p class="mt-3 mb-1">
                    <span class="fw-bolder">Informacion del pago:</span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione iusto sint numquam magnam distinctio
                  </p>
                  <div class="pay-card__medios-list d-flex mb-3">
                    <div class="pay-card__medio me-2">
                      <img src="@/assets/img/pagos/plin.png" alt="" />
                    </div>
                    <div class="pay-card__medio">
                      <img src="@/assets/img/pagos/yape.png" alt="" />
                    </div>
                  </div>
                  <div class="pay-card__button">
                    <b-button
                      variant="outline-primary"
                      @click="$emit('pay-online')"
                      >Pagar</b-button
                    >
                  </div>
                </div>
                <div
                  cols="10"
                  md="4"
                  class="pay-card mb-2 col-10 col-md-4 position-relative"
                >
                  <span class="pay-card__type pay-card__type--cash">
                    Efectivo
                  </span>
                  <p class="mt-3">
                    <span class="fw-bolder">Informacion del pago:</span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione iusto sint numquam magnam distinctio
                  </p>
                  <div class="pay-card__button">
                    <b-button
                      variant="outline-primary"
                      @click="$emit('pay-cash')"
                      >Pagar</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div cols="12" v-if="proposal.status == 3" class="col-12">
            <div>
              <h2 class="proposal-card__subtitle">Pagos</h2>
              <hr class="mt-0" />
              <div class="row mx-0 justify-content-around mt-4">
                <div
                  cols="10"
                  md="5"
                  class="pay-card mb-4 mb-md-2 pb-4 col-10 col-md-5"
                >
                  <h1 class="pay-card__title text-center">
                    Pago confirmado
                    <i class="fa-solid fa-circle-check ms-1"></i>
                  </h1>
                  <span class="pay-card__info d-block mt-3"
                    >Monto Pagado: $110</span
                  >
                  <span class="pay-card__info pay-card__info--date d-block mt-1"
                    >Fecha: Jueves 25 a las 3:05 PM</span
                  >
                  <div class="text-center mt-3">
                    <b-button
                      variant="primary"
                      class="mx-auto"
                      @click="$emit('qualification-modal')"
                      v-if="!proposal.isQualified"
                      ><i class="fa-solid fa-star me-2"></i>Calificar servicio
                    </b-button>
                    <b-button variant="primary" class="mx-auto" v-else
                      >Realizar comentario del servicio</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </b-card>

    <b-modal
      v-model="showModalAccept"
      title="Confirmar Trabajo"
      :centered="windowWidth <= 991"
    >
      <p class="mb-0">
        ¿Estas seguro que deseas confirmar el trabajo?, esta acción solo se
        puede hace una sola vez
      </p>
      <template v-slot:footer>
        <div class="d-flex justify-content-between w-100">
          <b-button variant="secondary" @click="showModalAccept = false"
            >Cancelar</b-button
          >
          <b-button
            variant="primary"
            @click=";(showModalAccept = false), $emit('on-accept-work', 3)"
            >Aceptar</b-button
          >
        </div>
      </template>
    </b-modal>
    <b-modal
      v-model="showModalQualify"
      title="Calificar"
      id="modal-calification"
      :centered="windowWidth <= 991"
    >
      <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 5)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 4)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 3)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 2)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 1)"
        ></i>
      </div>
      <div v-if="qualificationSelected > 0 && qualificationSelected < 5">
        <p class="mt-3 mb-0">
          Seleccione las opciones que considere por mejorar en el servicio
        </p>

        <b-row class="mx-0 justify-content-around">
          <b-col
            cols="12"
            lg="10"
            class="mt-3"
            v-for="(improvement, index) in improvementsList"
            :key="index"
            @click="improvement.active = !improvement.active"
          >
            <b-row
              class="mx-0 improvement__item p-1 rounded-pill"
              :class="{ 'improvement__item--active': improvement.active }"
            >
              <b-col
                cols="3"
                class="d-flex justify-content-center improvement__icon align-items-center"
              >
                <i
                  :class="
                    improvement.active
                      ? 'fa-solid fa-check'
                      : 'fa-solid fa-circle-notch'
                  "
                ></i>
              </b-col>
              <b-col cols="9" class="text-center">
                {{ improvement.name }}
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <template v-slot:footer>
        <div class="d-flex justify-content-between w-100">
          <b-button variant="secondary" @click="showModalQualify = false"
            >Cerrar</b-button
          >
          <b-button
            variant="primary"
            :disabled="!isQualifityValid"
            @click="sendQualification"
            >Enviar</b-button
          >
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  nextTick,
  onBeforeUnmount,
} from "vue"
import {
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "../../../../utils/SweetAlert"

type IProposal = {
  id: number
  name: string
  status: number
  isQualified: boolean
  jobs: Array<any>
  detail: string
}

export default defineComponent({
  name: "ProposalCard",
  props: {
    proposal: {
      type: Object,
    },
  },
  setup(props) {
    const isShow = ref(true) // Controla el muestreo desplegado de la card
    const isActive = ref(true) //Controla la activacion de la clase para la animación de despliegue
    const showModalAccept = ref(false) //Muestra el modal para aceptar el trabajo realizado
    const showModalQualify = ref(false) //Muestra el modal para calificar el trabajo realizado
    const qualificationSelected = ref(0)
    const improvementsList = reactive([
      {
        id: 0,
        active: false,
        name: "Demoro mas tiempo de lo pensado",
      },
      {
        id: 1,
        active: false,
        name: "Honorarios muy elevados",
      },
      {
        id: 2,
        active: false,
        name: "No cumplió con todo lo acordado",
      },
    ])

    // START - ABRIR Y CERRAR COLLAPSE
    function openCollapse() {
      isShow.value = true
      setTimeout(() => {
        isActive.value = true
      }, 100)
    }

    function closeCollapse() {
      isActive.value = false
      setTimeout(() => {
        isShow.value = false
      }, 700)
    }
    // START - ABRIR Y CERRAR COLLAPSE

    //Enviar una calificacion
    function checkQualifaction(event: Event, qualification: number) {
      clearIcons()
      const icon: any = event.target
      icon.classList.add("active")
      qualificationSelected.value = qualification
    }

    const isQualifityValid = computed(() => {
      if (qualificationSelected.value == 5) {
        return true
      }

      const improvement = improvementsList.find(
        (improvement) => improvement.active == true
      )
      if (qualificationSelected.value > 0 && improvement) {
        return true
      }

      return false
    })

    function sendQualification() {
      alertLoading()

      setTimeout(() => {
        alertSuccessfully("Se envio la calificación exitosamente")
        clearIcons()
        showModalQualify.value = false
        setTimeout(() => {
          closeAlert()
        }, 1500)
      }, 1500)
    }

    function clearIcons() {
      const iconList = document.querySelectorAll(".modal-calification__icon")
      iconList.forEach((icon) => {
        icon.classList.remove("active")
      })
    }

    // FIN Enviar una calificacion

    // FUNCIONES PARA OBTENER EL TAMAÑO DE LA PANTALLA
    let windowWidth = ref(window.innerWidth) // Obtener el tamaño de la ventana

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

    return {
      // PARAMS
      windowWidth,
      isShow,
      isActive,
      showModalAccept,
      showModalQualify,
      qualificationSelected,
      improvementsList,

      // METHODS
      openCollapse,
      closeCollapse,
      checkQualifaction,
      sendQualification,

      // COMPUTED
      isQualifityValid,
    }
  },
})
</script>

<style lang="scss" scoped>
.proposal-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

  .proposal-card__item {
    i {
      cursor: pointer;
    }

    .proposal-card__title {
      font-size: 1.3rem;
      margin-bottom: 0;
      font-weight: 600;

      .proposal-card__title-link {
        text-decoration: none;
        color: #7e7e7e;

        &:hover {
          color: #3a88ec;
          text-decoration: underline;
        }
      }
    }

    .proposal-card__subtitle {
      font-size: 1.3rem;
    }

    .proposal-card__date {
      font-weight: 600;
      color: rgb(151, 151, 151);
    }

    .proposal-card__image {
      width: 100px;
      height: 100px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .proposal-card__action-link {
      text-decoration: none;
    }

    .proposal-card__action {
      font-size: 2.3rem;
      cursor: pointer;

      &.proposal-card__action--succes {
        color: rgb(64, 231, 114);
      }

      &.proposal-card__action--danger {
        color: #ff5050;
      }

      &.proposal-card__action--primary {
        color: #3a88ec;
      }
    }

    .proposal-card__star {
      i {
        color: rgba(192, 192, 192, 0.733);
      }

      &.proposal-card__star--active {
        i {
          color: rgb(255, 196, 0);
        }
      }
    }

    .pay-card {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      background-color: rgba(236, 236, 236, 0.397);
      padding: 20px 20px 50px 20px;
      border-radius: 25px;

      .pay-card__type {
        background-color: rgba(124, 124, 124, 0.815);
        border-radius: 25px;
        padding: 5px 10px;
        font-size: 0.9rem;
        color: white;

        &.pay-card__type--online {
          background-color: rgb(64, 231, 114);
        }

        &.pay-card__type--cash {
          background-color: rgb(255, 51, 85);
        }
      }

      .pay-card__medios-list {
        .pay-card__medio {
          height: 30px;

          img {
            height: 100%;
          }
        }
      }

      .pay-card__button {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }

      .pay-card__title {
        font-size: 1.4rem;

        i {
          color: rgb(64, 231, 114);
        }
      }

      .pay-card__info {
        font-size: 0.9rem;
        font-weight: 500;
      }

      .pay-card__info--date {
        color: rgb(168, 168, 168);
      }
    }
  }

  .proposal-card__item--collapse {
    min-height: 20px;
    max-height: 20px;
    overflow-y: hidden;
    transition: max-height 0.65s cubic-bezier(0.26, 0.11, 0.29, 1);
  }

  .proposal-card__item--collapse.active {
    max-height: 2000px;
  }
}

#modal-calification {
  .modal-calification__icon {
    color: rgb(165, 165, 165);
    font-size: 1.5rem;

    &:hover {
      color: rgb(255, 196, 0);
    }

    &:hover ~ .modal-calification__icon {
      color: rgb(255, 196, 0);
    }

    &.active {
      color: rgb(255, 196, 0);
    }

    &.active ~ .modal-calification__icon {
      color: rgb(255, 196, 0);
    }
  }

  .improvement__item {
    border: 1px solid rgba(0, 0, 0, 0.521);
    cursor: pointer;

    .improvement__icon {
      border-right: 1px solid rgba(0, 0, 0, 0.521);
    }
  }
  .improvement__item--active {
    border: 1px solid #3a88ec;
    background-color: #3a88ec;
    color: white;

    .improvement__icon {
      border-right: 1px solid white;
    }
  }
  .improvement__item:hover {
    border: 1px solid rgb(169, 169, 169);
    background-color: rgb(169, 169, 169);
    color: white;

    .improvement__icon {
      border-right: 1px solid white;
    }
  }
}

// #modal-experience {
//   .work__date {
//     position: absolute;
//     top: -25px;
//     left: 0;
//     right: 0;
//     margin: auto;
//   }

//   .work__buttons {
//     width: 40px;
//     height: 40px;
//     font-size: 1.2rem;
//     background-color: rgb(145, 145, 145);
//     color: white;
//     border-radius: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//   }

//   .work__buttons:hover {
//     background-color: #347bd8;
//   }

//   .work__buttons--left {
//     left: -35px;
//   }

//   .work__buttons--right {
//     right: -35px;
//   }

//   .form-step-button {
//     display: none;
//   }
// }

.color-success {
  color: rgb(64, 231, 114);
}
</style>
