<template>
  <div class="cliente-especialist__container">
    <b-row class="mx-0 pt-4">
      <b-col cols="12">
        <b-card class="data-card card--shadow">
          <b-row class="mx-0">
            <b-col cols="12" class="d-block d-md-none text-end mb-3">
              <span class="data-card--save">
                <i class="fa-solid fa-heart"></i>
                Guardar
              </span>
            </b-col>
            <b-col
              cols="12"
              md="10"
              class="d-flex flex-wrap justify-content-center justify-content-md-start"
            >
              <div class="data-card__image">
                <img src="@/assets/img-delete/profile.jpg" alt="" />
              </div>
              <div class="ps-2 ps-md-3">
                <h1 class="data-card__name">
                  Pedro Ramirez Estrada
                  <span class="data-card__status ms-1 ms-lg-2">
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                </h1>
                <div>
                  <b-badge class="barge-work me-2 mb-1 px-2 py-2"
                    >Carpintero
                  </b-badge>
                  <b-badge class="barge-work me-2 mb-1 px-2 py-2"
                    >Gasfitero
                  </b-badge>
                  <b-badge class="barge-work me-2 mb-1 px-2 py-2"
                    >Electricista
                  </b-badge>
                </div>
                <div class="mt-2">
                  <span class="data-card__star data-card__star--active"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                  <span class="data-card__star data-card__star--active"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                  <span class="data-card__star data-card__star--active"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                  <span class="data-card__star data-card__star--active"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                  <span class="data-card__star"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                  <span class="text-primary ms-1">(13 valoraciones)</span>
                </div>
                <div
                  class="d-flex justify-content-end justify-content-md-start"
                >
                  <b-button variant="primary" class="mt-3 button-cotizar">
                    <i class="fa-solid fa-handshake"></i>
                    Cotizar ahora
                  </b-button>
                </div>
              </div>
            </b-col>
            <b-col cols="2" class="d-none d-md-block text-end">
              <span class="data-card--save">
                <i class="fa-solid fa-heart"></i>
                Guardar
              </span>
            </b-col>
          </b-row>
          <b-row class="mt-5 mt-md-4 mx-0">
            <b-col cols="12">
              <span
                :class="tabSelected == 'BIO' ? 'data-card__tab--active' : ''"
                class="data-card__tab me-2 mb-2"
                @click="setTab('BIO')"
                >BIO</span
              >
              <span
                :class="
                  tabSelected == 'OPINIONES' ? 'data-card__tab--active' : ''
                "
                class="data-card__tab me-2 mb-2"
                @click="setTab('OPINIONES')"
                >RESEÑAS</span
              >
              <span class="data-card__tab me-2 mb-2" @click="handleGoGalery"
                >GALERIA</span
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mx-0" v-if="tabSelected == 'BIO'">
      <b-col cols="12">
        <h1 class="section__title">Acerca del especialista</h1>
        <b-card class="card--shadow">
          <b-row class="mx-0">
            <b-col>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus tempore accusamus suscipit repellat esse laboriosam
              dolore. Libero quae optio voluptatibus? Nostrum vel nihil dolor
              soluta voluptatum tenetur iste, assumenda sunt, minus nemo facilis
              earum quis delectus possimus, illum eos expedita.
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" class="mt-5">
        <h1 class="section__title">Experiencias</h1>
        <experience-card
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
        >
        </experience-card>
      </b-col>
      <b-col cols="12" id="galery__box" class="mb-5 mt-3">
        <h1 class="section__title">Galería</h1>
        <b-card class="card--shadow" style="margin-bottom: -20px">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide :key="1">
              <img
                src="https://placeimg.com/200/200/any?1"
                @click="isShowModal = true"
                role="button"
              />
            </Slide>
            <Slide :key="2">
              <img
                src="https://placeimg.com/200/200/any?2"
                @click="isShowModal = true"
                role="button"
              />
            </Slide>
            <slide :key="3">
              <img
                src="https://placeimg.com/200/200/any?3"
                @click="isShowModal = true"
                role="button"
              />
            </slide>
            <Slide :key="4">
              <img
                src="https://placeimg.com/200/200/any?4"
                @click="isShowModal = true"
                role="button"
              />
            </Slide>
            <Slide :key="5">
              <img
                src="https://placeimg.com/200/200/any?5"
                @click="isShowModal = true"
                role="button"
              />
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
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mx-0">
      <b-col cols="12">
        <div class="opinions-list mx-0 mb-4" v-if="tabSelected == 'OPINIONES'">
          <div v-for="(opinion, index) in opinionsList" :key="index">
            <opinion-card :opinion="opinion"></opinion-card>
          </div>
        </div>
      </b-col>
    </b-row>

    <modal-image
      v-show="isShowModal"
      @close-modal="isShowModal = false"
      @click="isShowModal = false"
    />
  </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";

import { defineComponent } from "vue";
import ModalImage from "@/shared/components/ModalImage.vue";
import ExperienceCard from "@/modules/client/views/Components/ExperienceCard.vue";
import OpinionCard from "@/modules/client/views/Components/OpinionCard.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "SpecialistProfile",
  components: {
    ExperienceCard,
    OpinionCard,
    ModalImage,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      experiences: [
        {
          id: 0,
          title: "Construccion y Techado",
          time: 5,
          specialities: [
            {
              id: 0,
              name: "Concreto/Armado",
            },
            {
              id: 1,
              name: "Instalación de interruptores",
            },
            {
              id: 2,
              name: "Servicios generales",
            },
            {
              id: 3,
              name: "Servicios generales",
            },
          ],
        },
        {
          id: 1,
          title: "Arquitectura",
          time: 5,
          specialities: [
            {
              id: 1,
              name: "Concreto/Armado",
            },
            {
              id: 2,
              name: "Instalación de interruptores",
            },
            {
              id: 3,
              name: "Servicios generales",
            },
            {
              id: 4,
              name: "Servicios generales",
            },
          ],
        },
      ],
      isShowModal: false, //Maneja la gestion del modal de imagenes
      opinionsList: [
        {
          name: "Sandro Lopez",
          time: "Enero 2021",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium fugiat labore aspernatur natus accusantium temporibus. Voluptas ullam, voluptatum est, ab ipsam aliquid, unde eveniet obcaecati et fugit cum accusantium.",
        },
        {
          name: "Sandro Lopez",
          time: "Enero 2022",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          name: "Sandro Lopez",
          time: "Febrero 2022",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          name: "Sandro Lopez",
          time: "Mayo 2022",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium fugiat labore aspernatur natus accusantium temporibus. Voluptas ullam, voluptatum est, ab ipsam aliquid, unde eveniet obcaecati et fugit cum accusantium.",
        },
      ],
      tabSelected: "BIO",
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        // 1024 and up
        800: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        1400: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
      tabIndex: 0,
    };
  },
  methods: {
    setTab(value: string) {
      this.tabSelected = value;
    },
    handleGoGalery() {
      this.setTab("BIO");
      const timeOut = setTimeout(() => {
        const boxContainer: any = document.getElementById(`galery__box`);
        const top: number = boxContainer.offsetTop - 70;
        window.scroll({
          top,
          left: 0,
          behavior: "smooth",
        });
        clearTimeout(timeOut);
      }, 100);
    },
    procesarTecla(event: any) {
      if (event.key === "Escape") {
        this.isShowModal = false;
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.procesarTecla);
  },
});
</script>

<style lang="scss" scoped>
.cliente-especialist__container {
  .section__title {
    font-size: 1.5rem;
    margin-left: 15px;
  }

  .card--shadow {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }

  .data-card {
    .barge-work {
      background-color: #0d6efd !important;
    }
    .button-cotizar {
      padding-top: 12px;
      padding-bottom: 12px;
    }
    .data-card__tab {
      padding: 5px 8px;

      &:hover {
        text-decoration: underline;
        color: #3a88ec;
        cursor: pointer;
      }

      &.data-card__tab--active {
        color: #3a88ec;
        text-decoration: underline;
      }
    }

    .data-card--save {
      cursor: pointer;

      i {
        color: rgb(180, 176, 176);
      }

      &:hover {
        color: #ff5050;

        i {
          color: #ff5050;
        }
      }
    }

    .data-card__image {
      width: 140px;
      height: 180px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .data-card__name {
      font-size: 1.5rem;

      .data-card__status {
        font-size: 1.2rem;

        i {
          color: rgb(64, 231, 114);
        }
      }
    }

    .data-card__star {
      i {
        color: rgba(192, 192, 192, 0.733);
      }

      &.data-card__star--active {
        i {
          color: rgb(255, 196, 0);
        }
      }
    }
  }

  .btn-carrousel {
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: white;
    z-index: 3;

    border-radius: 100%;
    cursor: pointer;

    i {
      color: #3a88ec;
      font-size: 2.3rem;
    }
    &.btn-carrousel--next {
      right: -15px;
    }

    &.btn-carrousel--prev {
      left: -15px;
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

@media (min-width: 1214px) {
  .cliente-especialist__container {
    .btn-carrousel {
      &.btn-carrousel--next {
        right: 0px;
      }

      &.btn-carrousel--prev {
        left: 0px;
      }

      i {
        font-size: 2.4rem;
      }
    }
  }
}

@media (max-width: 991px) {
  .cliente-especialist__container {
    .data-card {
      .button-cotizar {
        width: 100%;
      }
      .data-card__name {
        text-align: center;
        font-size: 1.35rem !important;
      }
    }

    .btn-carrousel {
      &.btn-carrousel--next {
        right: 5px;
      }

      &.btn-carrousel--prev {
        left: 5px;
      }

      i {
        font-size: 2.2rem;
      }
    }
  }
}

@media (min-width: 551px) {
  .cliente-especialist__container {
    .opinions-list {
      column-count: 2;
    }
  }
}
</style>
