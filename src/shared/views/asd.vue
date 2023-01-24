<!-- <div class="header">
  <div class="container header-container">
    <div class="col-lg-6 header-img-section">
      <img src="@/assets/img/img001-min.jpg" />
    </div>

    
    
    <div class="col-lg-5 offset-lg-1 header-title-section">
      <!-- <p class="header-subtitle">Multipurpose landing template</p> -->
      <h1 class="header-title">Cotiza, Conecta, Disfruta!</h1>
      <p class="header-title-text">
        Cotiza tu proyecto de hogar facil y rapido. Encuentra cientos de
        especialistas calificados interesados en tu proyecto
      </p>
      <div class="learn-more-btn-section">
        <!-- <a class="nav-link learn-more-btn btn-invert" href="#services"
          >Quiero cotizar</a
        > -->
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
</div> -->