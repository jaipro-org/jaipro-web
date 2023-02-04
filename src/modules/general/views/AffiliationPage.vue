<template>
  <div class="pt-4">
    <b-container>
      <div class="header-section">
        <b-row>
          <b-col md="7">
            <div class="header-info-section">
              <h2 class="header-title">Sé un especialista con Jaipro!</h2>
              <p class="header-subtitle">
                Obtén acceso a cientos de trabajos en su ciudad y cree su propio
                horario
              </p>
              <div class="header-button">
                <b-button
                  class="mr-2"
                  variant="primary"
                  @click="$router.push({ name: 'register-specialist' })"
                >
                  Aplicar ahora
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="header-img-section">
              <b-img
                thumbnail
                fluid
                :src="mainBannerImg"
                height="300px"
              ></b-img>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="flow-section">
        <div class="flow-title-section">
          <h2 class="flow-title">Afíliate rápido y fácil</h2>
        </div>
        <div class="flow-list-section">
          <div class="flow-list-item">
            <b-row>
              <b-col md="7">
                <div class="flow-text">
                  <h3>1. Registro como especialista</h3>
                  <p>
                    Regístrate como un especialista completando el formulario de
                    registro en la web
                  </p>
                </div>
              </b-col>
              <b-col md="5">
                <div class="flow-img">
                  <b-img center :src="registerAsSpecialistSvg" height="200px"></b-img>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="flow-list-item">
            <b-row>
              <b-col md="7">
                <div class="flow-text">
                  <h3>2. Validación de información</h3>
                  <p>
                    Despues del registro, nos pondremos en contacto con usted
                    para validar sus datos y experiencia como especialista
                  </p>
                </div>
              </b-col>
              <b-col md="5">
                <div class="flow-img">
                  <b-img center :src="checkInfoSvg" height="200px"></b-img>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="flow-list-item">
            <b-row>
              <b-col md="7">
                <div class="flow-text">
                  <h3>3. Perfil verificado</h3>
                  <p>
                    Si todo va bien, obtendrás la insignia de verificado en tu
                    perfil y estarás listo(a) para buscar nuevas oportunidades
                    de trabajo
                  </p>
                </div>
              </b-col>
              <b-col md="5">
                <div class="flow-img">
                  <b-img center :src="profileVerifiedSvg" height="200px"></b-img>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div class="rq-section">
        <div class="rq-title-section">
          <h2 class="rq-title">Requerimientos</h2>
        </div>
        <div class="rq-list-section">
          <b-row>
            <b-col md="12">
              <ul class="rq-list">
                <li>
                  Debe tener experiencia comprobada con los servicios que esta
                  solicitando
                </li>
                <li>
                  Debe estar autorizado para trabajar en el pais de registro
                </li>
                <li>Debe tener buenas habilidades de servicio al cliente</li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>  
</template>

<script lang="ts">
import mainBannerImg from "@/assets/img/img009-min.jpg";
import checkInfoSvg from "@/assets/svg/check-information.svg";
import profileVerifiedSvg from "@/assets/svg/profile-verified.svg";
import registerAsSpecialistSvg from "@/assets/svg/register-as-specialist.svg";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AffiliationPageComponent",
  setup() {
    return {
      mainBannerImg,
      checkInfoSvg,
      profileVerifiedSvg,
      registerAsSpecialistSvg,
    };
  },
});
</script>

<style lang="scss" scoped>
.flow-list-section p {
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  font-family: Poppins;
  font-weight: 300;
  max-width: 600px;
}

.flow-section,
.rq-section {
  padding-top: 55px;
  padding-bottom: 55px;
}

.rq-title-section,
.flow-title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
}

.rq-title,
.flow-title,
.header-title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 45px;
  line-height: 1;
  color: #303669;
  margin-bottom: 20px;
}

.header-title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 60px;
  line-height: 1;
  padding-bottom: 25px;
  color: #303669;
}

.rq-list {
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  font-family: Poppins;
  font-weight: 300;
}

.flow-list-item {
  padding-left: 50px;
  padding-bottom: 15px;
}
@media (max-width: 767px) {
  .header-button{
    text-align: center;
    .mr-2{
      margin: 0 0 20px 0;
      font-size: 20px !important;
    }
  }
}

@media (max-width: 480px) {
  .header-title{
    font-size: 40px;
    line-height: 1.2;
    padding-bottom: 0;
  }
  .rq-title{
    font-size: 30px;
    margin-bottom: 0;
  }
  .flow-title{
    font-size: 30px;
  }
  .rq-section {
    padding: 30px 0;
    .rq-list-section{
      margin: 0 15px 0 0;
    }
  }
  .flow-section{
    padding: 30px 0;
  }
  .header-button{
    text-align: center;
    .mr-2{
      margin: 0 0 20px 0;
      font-size: 20px !important;
    }
  }
  .flow-list-item {
    padding-left: 20px;
    margin-right: 15px;

    h3{
      font-size: 21px;
    }
    p{
      font-size: 15px;
      // text-align: justify;
      line-height: 1.4;
    }
    img{
      height: 150px;
    }
  }
  .rq-list{
    font-size: 15px;
    line-height: 1.4;
    margin-left: -2px;
  }
}
</style> 
