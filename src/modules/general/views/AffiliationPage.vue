<template>
  <div class="pt-4">
    <b-container>
      <div class="header-section">
        <b-row>
          <b-col md="8">
            <div class="datos">
              <h2>Sé un especialista con Jaipro!</h2>
              <p>
                Obtén acceso a cientos de trabajos en su ciudad y cree su propio
                horario
              </p>
              <div class="btn-page">
                <b-button
                  class="mr-2"
                  variant="primary"
                  >Aplicar ahora
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="img_profile">
              <b-img :src="publicProjectSvg"></b-img>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="flow-section">
        <b-row>
          <b-col md="4">
            <div class="img_profile">
              <!-- <b-img :src="imgProfile"></b-img> -->
            </div>
          </b-col>
          <b-col md="8">
            <div>
              <h3>1. Registro como especialista</h3>
              <p class="card-text">
                Registrate como un especialista completando el formulario de
                registro en la web
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <div class="img_profile">
              <!-- <b-img :src="imgProfile"></b-img> -->
            </div>
          </b-col>
          <b-col md="8">
            <div>
              <h3>2. Validación de información</h3>
              <p>
                Despues del registro, nos pondremos en contacto con usted para
                validar sus datos y experiencia como especialista
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <div class="img_profile">
              <!-- <b-img :src="imgProfile"></b-img> -->
            </div>
          </b-col>
          <b-col md="8">
            <div>
              <h3>3. Perfil verificado</h3>
              <p>
                Si todo va bien, obtendras la insignia de verificado en tu
                perfil y estarás listo(a) para buscar nuevas oportunidades de
                trabajo
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="rq-section">
        <div class="rq-title-section">
          <h2 class="rq-title">Requerimientos</h2>
        </div>
        <div class="rq-text-section">
          <b-row>
            <b-col md="12">
              <p class="rq-text">It is a long established fact that a reader will be distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes
                 on purpose (injected humour and the like).
              </p>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import publicProjectSvg from "@/assets/svg/publish-project.svg";

import { defineComponent } from "vue";

export default defineComponent({
    name: "AffiliationPageComponent",
    setup(){

        return {
            publicProjectSvg
        }
    }
})

</script>

<style>
</style> 