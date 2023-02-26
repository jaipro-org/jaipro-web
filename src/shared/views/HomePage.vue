<template>
  <div>
    <div class="panel">
      <div class="panel__container container-lg">
        <div class="panel__content">
          <h1 class="panel__title">Cotiza, Conecta, Disfruta!</h1>
          <p class="panel__text">
            Cotiza tu proyecto de hogar fácil y rápido. Encuentra cientos de
            especialistas calificados interesados en tu proyecto
            <br />
            <br />
            Vive una experiencia diferente y realiza tus proyectos como nunca
            antes
          </p>

          <div class="learn-more-btn-section">
            <router-link
              to="/cliente/nuevo-proyecto"
              custom
              v-slot="{ navigate, href }"
            >
              <a
                :href="href"
                @click="navigate"
                class="nav-link learn-more-btn btn-invert"
                >Quiero cotizar</a
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div id="how-it-works"></div>
    <!-- STRATEGY SECTION -->
    <div class="strategy-section">
      <div class="pricing-title container">
        <h2>¿Cómo Funciona?</h2>
        <!-- <p>
          Offer multiple packages or monthly subscriptions? Why not showcase
          your featured price plans here, bold and beautifully.
        </p> -->
        <div class="tab-pills">
          <!-- <button class="nav-link learn-more-btn btn-invert">Para Clientes</button>
          <button class="nav-link learn-more-btn">Para Especialistas</button> -->
          <b-button
            variant="outline-primary"
            @click="tabIndex = 0"
            :class="{ active: tabIndex == 0 }"
          >
            Clientes
          </b-button>
          <b-button
            variant="outline-primary"
            @click="tabIndex = 1"
            :class="{ active: tabIndex == 1 }"
          >
            Especialistas
          </b-button>
        </div>
      </div>
      <div class="strategy-section-bg-graphics-section">
        <img src="@/assets/img/strategy-section-bg.png" />
      </div>
      <div v-if="tabIndex == 0" class="container strategy-container">
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img :src="publishProjectSvg" />
            </div>
            <h2>Publica tu proyecto</h2>
            <p>
              En Jaipro podras publicar tu proyecto de hogar según las
              necesidades que tengas
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <!-- <img src="@/assets/img/svg/receive-proposals.svg" /> -->
              <img :src="receiveProposalSvg" />
            </div>
            <h2>Recibe propuestas</h2>
            <p>
              Recibe diferentes propuestas, evalua el mejor talento para tu
              proyecto de hogar
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <!-- <img src="@/assets/img/svg/make-payment.svg" /> -->
              <img :src="makePaymentSvg" alt="make-payment-img" />
            </div>
            <h2>Realiza el pago y califica</h2>
            <p>
              Abona los honorarios del especialista de forma segura y califica
              su servicio
            </p>
          </div>
        </div>
      </div>
      <div v-else class="container strategy-container">
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img :src="applyAsSpecialistSvg" />
            </div>
            <h2>Aplica como especialista</h2>
            <p>
              En Jaipro podras tener acceso a cientos de trabajos según tu
              especialidad
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img :src="searchForOpportunitiesSvg" />
            </div>
            <h2>Busca nuevas oportunidades</h2>
            <p>
              Evalue los proyectos y envia tu propuesta de acuerdo a la
              necesidad del cliente
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section"
        >
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img :src="workHomeProjectSvg" />
            </div>
            <h2>Trabaja en un proyecto de hogar</h2>
            <p>
              Coordina y realiza un servicio de calidad, tus clientes te lo
              agradecerán
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION LABEL -->
    <div id="services"></div>
    <!-- ESPECIALIDADES -->
    <div class="blog-section">
      <div class="blog-section-right-bg">
        <img src="@/assets/img/blog-section-right-bg.png" />
      </div>
      <div class="blog-section-left-bg">
        <img src="@/assets/img/blog-section-left-bg.png" />
      </div>
      <div class="container blog-container">
        <div class="blog-title-section">
          <h2 class="blog-title">Servicios</h2>
        </div>
        <div class="blog-posts-section">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in specialties" :key="slide">
              <div class="blog-post-card-container">
                <div class="blog-post-card">
                  <div class="blog-post-icon">
                    <img :src="slide.img" />
                  </div>
                  <h3 class="blog-post-title">{{ slide.name }}</h3>
                  <!-- <p class="blog-post-text">
                    Making it easier to connect with every client worldwide
                  </p> -->
                  <!-- <a class="blog-post-link" href="#news">Read More</a> -->
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
    <!-- SECTION LABEL -->
    <div id="afiliacion"></div>
    <!-- SERVICES -->
    <div class="panel services">
      <div class="container services-container">
        <div class="col-lg-5 services-title-section">
          <h2 class="services-title">Para especialistas</h2>
          <p class="services-text">En Jaipro podrás:</p>
          <ul>
            <li>Tener acceso a cientos de proyectos según tu especialidad</li>
            <li>Ampliar tu catálogo de clientes</li>
            <li>Incrementar tus ingresos</li>
          </ul>
          <div class="services-accordion">
            <button>Aplicar ahora</button>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION LABEL -->
    <div id="clients"></div>
    <!-- CLIENTS -->
    <div class="clients-section">
      <div class="container clients-container">
        <div class="clients-title-section">
          <!-- <p class="clients-subtitle">Our clients</p> -->
          <h2 class="clients-title">Clientes Satisfechos</h2>
        </div>
        <div class="clients-container-cards">
          <div class="col-md-6 col-xs-12 px-3">
            <div class="client-card">
              <p>
                Excelente profesional. Tenía una asimetría de los párpados muy
                marcada, otros Medicos me habían dicho que no se podría quedar
                100% igual y el doctor lo...
              </p>
              <div class="profile">
                <b-avatar
                  src="https://placekitten.com/300/300"
                  size="3rem"
                ></b-avatar>
                <div class="info">
                  <star-rating></star-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 px-3">
            <div class="client-card">
              <p>
                Excelente profesional. Tenía una asimetría de los párpados muy
                marcada, otros Medicos me habían dicho que no se podría quedar
                100% igual y el doctor lo...
              </p>
              <div class="profile">
                <b-avatar
                  src="https://placekitten.com/300/300"
                  size="3rem"
                ></b-avatar>
                <div class="info">
                  <star-rating></star-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 px-3">
            <div class="client-card">
              <p>
                Excelente profesional. Tenía una asimetría de los párpados muy
                marcada, otros Medicos me habían dicho que no se podría quedar
                100% igual y el doctor lo...
              </p>
              <div class="profile">
                <b-avatar
                  src="https://placekitten.com/300/300"
                  size="3rem"
                ></b-avatar>
                <div class="info">
                  <star-rating></star-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 px-3">
            <div class="client-card">
              <p>
                Excelente profesional. Tenía una asimetría de los párpados muy
                marcada, otros Medicos me habían dicho que no se podría quedar
                100% igual y el doctor lo...
              </p>
              <div class="profile">
                <b-avatar
                  src="https://placekitten.com/300/300"
                  size="3rem"
                ></b-avatar>
                <div class="info">
                  <star-rating></star-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StarRating from "@/shared/components/public/StarRating.vue";
import "vue3-carousel/dist/carousel.css";
import { defineComponent, ref } from "vue";
import publishProjectSvg from "@/assets/svg/publish-project.svg";
import receiveProposalSvg from "@/assets/svg/receive-proposals.svg";
import makePaymentSvg from "@/assets/svg/make-payment.svg";
import applyAsSpecialistSvg from "@/assets/svg/apply-as-specialist.svg";
import searchForOpportunitiesSvg from "@/assets/svg/search-for-opportunities.svg";
import workHomeProjectSvg from "@/assets/svg/work-on-home-project.svg";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Specialties from "@/interfaces/Specialty.interface";
import Testimony from "@/interfaces/Testimony.interface";
import StarRatingComponent from "@/shared/components/public/StarRating.vue";

export default defineComponent({
  name: "HomeComponent",
  components: {
    StarRatingComponent,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    StarRating,
  },
  setup() {
    const tabIndex = ref(0);
    const settings = ref({ itemsToShow: 1, snapAlign: "center" });
    const breakpoints = ref({
      //700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    });

    const specialties = ref<Specialties[]>([
      { name: "Pintura", img: require("@/assets/img/services/img003-min.jpg") },
      {
        name: "Carpinteria",
        img: require("@/assets/img/services/img004-min.jpg"),
      },
      {
        name: "Gasfitería",
        img: require("@/assets/img/services/img005-min.jpg"),
      },
      {
        name: "Construcción",
        img: require("@/assets/img/services/img006-min.jpg"),
      },
      {
        name: "Electricidad",
        img: require("@/assets/img/services/img007-min.jpg"),
      },
    ]);

    const testimonials = ref<Testimony[]>([
      {
        name: "Pedro Pablo Agustin",
        text: "Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual",
      },
      {
        name: "Pedro Pablo Agustin",
        text: "Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual",
      },
      {
        name: "Pedro Pablo Agustin",
        text: "Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual",
      },
      {
        name: "Pedro Pablo Agustin",
        text: "Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual",
      },
    ]);

    return {
      tabIndex,
      settings,
      breakpoints,
      publishProjectSvg,
      receiveProposalSvg,
      makePaymentSvg,
      applyAsSpecialistSvg,
      searchForOpportunitiesSvg,
      workHomeProjectSvg,
      specialties,
      testimonials,
    };
  },
});
</script>

<style lang="scss">
.wrapper {
  padding-top: 107px !important;
}
.carousel__prev {
  left: 14px;
}
.carousel__next {
  right: 14px;
}
.services-title {
  color: white;
}
.services-text {
  color: white;
}
.services-title-section {
  ul {
    li {
      color: white;
    }
  }
}
.services {
  background-image: url("https://media.altphotos.com/cache/images/2017/09/07/10/752/finishing-works-bathroom.jpg") !important;
}
.panel {
  background-image: url("@/assets/img/panel/fondo-panel1.jpg");
  width: 100%;
  background-size: cover;
  height: 530px;

  &__container {
    position: relative;
    height: 100%;
  }

  &__content {
    position: absolute;
    top: 30px;
    right: 30px;
    max-width: 520px;

    .panel__title {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 60px;
      line-height: 1;
      padding-bottom: 25px;
      color: white;
    }

    .panel__text {
      color: white;
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 991px) {
  .wrapper {
    padding-top: 86px !important;
  }
  .services-title-section {
    ul {
      text-align: left;
    }
    .services-accordion {
      margin: 0 auto;
    }
  }
  .panel {
    background-image: url("@/assets/img/panel/fondo-panel-movil.jpg");
    height: 570px;

    &__content {
      position: absolute;
      min-width: 300px;
      width: 90%;
      top: 40px;
      left: 0;
      right: 0;
      margin: auto;
      max-width: 520px;

      .panel__title {
        font-size: 2.5rem;
        text-align: center;
      }

      .panel__text {
        color: white;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
}
@media (max-width: 576px) {
  .wrapper {
    padding-top: 56px !important;
  }
}
</style>
