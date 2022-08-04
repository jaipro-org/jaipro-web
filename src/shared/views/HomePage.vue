<template>
  <div>
    <div class="header">
      <div class="container header-container">
        <div class="col-lg-6 header-img-section">
          <img src="@/assets/img/header.png" />
        </div>
        <div class="col-lg-5 offset-lg-1 header-title-section">
          <!-- <p class="header-subtitle">Multipurpose landing template</p> -->
          <h1 class="header-title">Cotiza, Conecta, Disfruta!</h1>
          <p class="header-title-text">
            Cotiza tu proyecto de hogar facil y rapido. Encuentra cientos de especialistas
            calificados interesados en tu proyecto
          </p>
          <div class="learn-more-btn-section">
            <a class="nav-link learn-more-btn btn-invert" href="#services"
              >Quiero cotizar</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- STRATEGY SECTION -->
    <div class="strategy-section">
      <div class="pricing-title container">
        <h2>¿Como Funciona?</h2>
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
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-1.png" />
            </div>
            <h2>Publica tu proyecto</h2>
            <p>En HogarEP podras publicar tu proyecto de hogar según las necesidades que tengas</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-2.png" />
            </div>
            <h2>Recibe propuestas</h2>
            <p>Recibe diferentes propuestas, evalua el mejor talento para tu proyecto de hogar</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-3.png" />
            </div>
            <h2>Realiza el pago y califica</h2>
            <p>Abona los honorarios del especialista de forma segura y califica su servicio</p>
          </div>
        </div>
      </div>
      <div v-else class="container strategy-container">
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-1.png" />
            </div>
            <h2>Busca nuevas oportunidades</h2>
            <p>En HogarEP podras tener acceso a cientos de trabajos según tu especialidad</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-2.png" />
            </div>
            <h2>Elige un proyecto de hogar</h2>
            <p>Evalue los proyectos y envia tu propuesta de acuerdo a la necesidad del cliente</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
          <div class="strategy-card">
            <div class="strategy-card-icon-section">
              <img src="@/assets/img/strategy-3.png" />
            </div>
            <h2>Realiza un trabajo de calidad</h2>
            <p>Realiza un servicio de calidad, de esta forma tendras buenas calificaciones de tus clientes y te recomendarán</p>
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
          <!-- <p class="blog-subtitle">Recent updates</p> -->
          <h2 class="blog-title">Servicios</h2>
        </div>
        <div class="blog-posts-section">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 4" :key="slide">
              <div class="blog-post-card-container">
                <div class="blog-post-card">
                  <div class="blog-post-icon">
                    <img :src="`/img/blog-card-${slide}.png`" />
                  </div>
                  <h3 class="blog-post-title">Remote Working {{ slide }}</h3>
                  <p class="blog-post-text">
                    Making it easier to connect with every client worldwide
                  </p>
                  <a class="blog-post-link" href="#news">Read More</a>
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
    <div class="services-section">
      <div class="services-section-bg-graphics">
        <img src="@/assets/img/services-section-bg.png" />
      </div>
      <div class="container services-container">
        <div class="col-lg-5 services-title-section">
          <h2 class="services-title">Para especialistas</h2>
          <p class="services-text">
            En HogarEP podras:
          </p>
          <ul>
            <li>Tener acceso a cientos de proyectos según tu especialidad</li>
            <li>Ampliar tu catálogo de clientes</li>
            <li>Incrementar tus ingresos</li>
          </ul>
          <div class="services-accordion">
            <button>Aplicar ahora</button>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 services-header-img-section">
          <img src="@/assets/img/services-header.png" />
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
          <h2 class="clients-title">
            Clientes Satisfechos
          </h2>
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
                  <b-form-rating
                    value="3"
                    variant="warning"
                    class="mb-2"
                  ></b-form-rating>
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
                  <b-form-rating
                    value="3"
                    variant="warning"
                    class="mb-2"
                  ></b-form-rating>
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
                  <b-form-rating
                    value="3"
                    variant="warning"
                    class="mb-2"
                  ></b-form-rating>
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
                  <b-form-rating
                    value="3"
                    variant="warning"
                    class="mb-2"
                  ></b-form-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION LABEL -->
    <!-- <div id="contact"></div> -->
    <!-- CONTACT -->
    <!-- <div class="contact-section">
      <div class="container contact-container">
        <div class="contact-title-section">
          <h2 class="contact-title">
            ¿Tienes alguna duda?<br />Visita nuestro
          </h2>
          <div class="learn-more-btn-section">
            <a
              class="nav-link learn-more-btn btn-invert"
              href="mailto:name@domain.com"
              >Centro de ayuda</a
            >
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from "vue";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "HomeComponent",
  components: { Carousel, Slide, Pagination, Navigation },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
    tabIndex: 0,
  }),
  methods: {},
});
</script>

<style></style>
