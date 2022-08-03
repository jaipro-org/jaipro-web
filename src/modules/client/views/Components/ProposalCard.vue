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
          <div cols="12" v-if="proposal.status == 1" class="col-12">
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
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProposalCard",
  props: {
    proposal: Object,
  },
  setup(props) {
    const isShow = ref(true); // Controla el muestreo desplegado de la card
    const isActive = ref(true); //Controla la activacion de la clase para la animación de despliegue

    function openCollapse() {
      isShow.value = true;
      setTimeout(() => {
        isActive.value = true;
      }, 100);
    }

    function closeCollapse() {
      isActive.value = false;
      setTimeout(() => {
        isShow.value = false;
      }, 700);
    }

    return {
      openCollapse,
      closeCollapse,
      isShow,
      isActive,
    };
  },
});
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

        & :hover {
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

      & .proposal-card__action--succes {
        color: rgb(64, 231, 114);
      }

      & .proposal-card__action--danger {
        color: #ff5050;
      }

      & .proposal-card__action--primary {
        color: #3a88ec;
      }
    }

    .proposal-card__star {
      i {
        color: rgba(192, 192, 192, 0.733);
      }

      & .proposal-card__star--active {
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

        & .pay-card__type--online {
          background-color: rgb(64, 231, 114);
        }

        & .pay-card__type--cash {
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
</style>
