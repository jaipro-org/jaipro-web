<template>
  <div class="project__container mb-2">
    <b-row class="mx-0 pt-5" v-if="project">
      <b-col cols="12" class="mb-3 mb-md-1">
        <b-row class="mx-0">
          <b-col cols="12" class=" text-right d-block d-md-none mb-3">
            <h5 class="project__back">
              <router-link :to="{name: 'home'}" class="project__back-link">
                <i class="fa-solid fa-arrow-left mr-2"></i>Volver
              </router-link>
              
            </h5>
          </b-col>
          <b-col cols="12" md="10">
            <h1 class="project__title mb-3">Detalle del proyecto</h1>
          </b-col>
          <b-col cols="12" md="2" class="text-right d-none d-md-block">
            <h5 class="project__back">
              <router-link :to="{name: 'home'}" class="project__back-link">
                <i class="fa-solid fa-arrow-left mr-2"></i>Volver
              </router-link>
            </h5>
          </b-col>
        </b-row>
        <div>
          <b-card class="project-card">
            <h5>
              <span class="mr-2">Profesión:</span>
              <b-badge variant="primary" class="py-1 px-2">{{project.job.title}}</b-badge>
            </h5>
            <p class="mb-2">
              {{project.detail}}
            </p>
            <span>Fecha: 21 de Enero del 2021</span>
          </b-card>
        </div>
        
      </b-col>
      <b-col cols="12" class="mb-3 mb-md-1">
        <h1 class="project__title mb-3">Imagenes adjuntas</h1>
        <div>
          <b-card class="project-card">
            <div class="project-card__list-image d-flex flex-wrap w-100 justify-content-center">
              <div class="project-card__image ">
                <img src="@/assets/img-delete/pintor.jpg" alt="">
              </div>
              <div class="project-card__image ">
                <img src="@/assets/img-delete/pintor.jpg" alt="">
              </div>
              <div class="project-card__image ">
                <img src="@/assets/img-delete/pintor.jpg" alt="">
              </div>
            </div>
          </b-card>
        </div>
        
      </b-col>
      <b-col cols="12" v-if="this.project.status != 2" class="mb-3 mb-md-1">
        <h1 class="project__title mb-3" >Propuestas(5)</h1>
        <div class="proposals-list mb-3" v-if="this.project.status != 2">
          <proposal-card
            v-for="(proposal, index) in proposals" :key="index"
            :proposal="proposal"
            @on-accept="handleAcceptProposal"
            @on-reject="handleRejectProposal"
            
          ></proposal-card>
          <b-button variant="primary" @click="loadProposals" class="w-100 proposals-list__btn-loading">
              <i class="fa-regular mr-2" :class="isLoadingProposals? 'fas fa-spinner fa-spin' : 'fa-plus'"></i>
              {{isLoadingProposals? 'Cargando' : 'Ver mas'}}
            
          </b-button>
        </div>
      </b-col>
      <b-col cols="12" v-else class="mb-3 mb-md-1">
        <h1 class="project__title project__title--proposal mb-3" >
          <i class="fa-solid fa-circle-check mr-2"></i>
          Propuesta Aceptada
        </h1>
        
        <div class="proposals-list mb-3">
          <proposal-card
            :proposal="project.proposal"
          ></proposal-card>

        </div>
        
      </b-col>
    </b-row>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {alertLoading,alertSuccessfully, alertActionButton, closeAlert} from '@/utils/SweetAlert'

import ProposalCard from '@/modules/client/views/Components/ProposalCard.vue'
export default {
  components:{
    ProposalCard,
    carousel
  },
  data(){
    return {
      // A manera de ejemplo tenemos los estados para el projecto
      //   0 = 'abierto'
      //   1 = "con propuestas"
      //   2 = "con propuesta aceptada"
      project: {
        status: 1,
        job: {
          id: 0,
          title: 'Carpintero',
        },
        proposal: {}, //Propuesta aceptada
        detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempore accusamus suscipit repellat esse laboriosam dolore. Libero quae optio voluptatibus? Nostrum vel nihil dolor soluta voluptatum tenetur iste, assumenda sunt, minus nemo facilis earum quis delectus possimus, illum eos expedita.'
      },
      // A manera de ejemplo tenemos los estados para las propuestas
      //   0 = 'propuesto'
      //   1 = "aceptado"
      //   2 = "rechazado"
      isLoadingProposals : false,
      proposals: [
        {
          id: 0,
          name: 'Pedro Ramirez Estrada',
          status: 0,
          jobs: [
            {
              id: 0,
              title: 'Carpintero',
            },
            {
              id: 1,
              title: 'Gasfitero',
            },
            {
              id: 2,
              title: 'Electricista',
            }
          ],
          detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel',
        },
        {
          id: 1,
          name: 'Estiben Soza Bermudes',
          status: 0,
          jobs: [
            {
              id: 0,
              title: 'Carpintero',
            },
            {
              id: 1,
              title: 'Gasfitero',
            },
          ],
          detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel',
        },
      ],
    }
  },
  methods:{
    loadProposals(){
      console.log('Cardar mas propuestas');
      this.isLoadingProposals = true
      const proposal = {
          id: 0,
          name: 'Pedro Ramirez Estrada',
          status: 0,
          jobs: [
            {
              id: 0,
              title: 'Carpintero',
            },
            {
              id: 1,
              title: 'Gasfitero',
            },
            {
              id: 2,
              title: 'Electricista',
            }
          ],
          detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus dolor odio dolorum vitae iste vel',
        }

      const timeOut = setTimeout(()=>{
        this.proposals.push(proposal)
        this.proposals.push(proposal)
        this.isLoadingProposals = false
        clearTimeout(timeOut)
      },2000) 
      
      
    },
    async handleAcceptProposal(id){ 
      const alertResult = await alertActionButton('Aceptación de oferta','¿Seguro que desea aceptar la oferta?', 'Aceptar', 'info')
      if(alertResult){
          //Simulación de carga del Backend
          alertLoading()
          const proposal = this.proposals.find(proposal => proposal.id == id)
          proposal.status = 1
          this.project.proposal = {...proposal}
          this.project.status=2
          const timeOut = setTimeout(() => {
            alertSuccessfully('Se acepto la propuesta del projecto exitosamente')
            const timeOut2 = setTimeout(()=>{
              closeAlert()
              clearTimeout(timeOut2)
            },2500)
            clearTimeout(timeOut)
          }, 1500)

      }

      
    },
    async handleRejectProposal(id){ 
      const alertResult = await alertActionButton('Rechazar oferta','¿Seguro que desea rechazar la oferta?', 'Rechazar', 'error')
      if(alertResult){
        //Simulación de carga del Backend
        alertLoading()
        const timeOut =setTimeout(() => {
          this.proposals.splice(id,1)
          alertSuccessfully('Se rechazo la propuesta del projecto exitosamente')
          const timeOut2 = setTimeout(function(){
            closeAlert()
            clearTimeout(timeOut2)
          },2500)
          clearTimeout(timeOut)
        }, 1500)
        
      }
      
    }
    
  }
}
</script>

<style  lang="scss" scoped>
.project__container{
  .project__back{
    .project__back-link{
      text-decoration: none;
      color: #7e7e7e; 
      &:hover{
        color: #3a88ec;
      }
    }
    
  }
  .project-card{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
    .project-card__list-image{
      gap: 15px;

      .project-card__image{
        width: 150px;
        height: 150px;

        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
      }
    }
    
  }

  .proposals-list{
    .proposals-list__btn-loading{
      font-size: 1rem;
      i{
        font-weight: 600;
      }
    }

  }

  .project__title{
    font-size: 1.8rem;

    &.project__title--proposal{
      i{
          color: rgb(64, 231, 114);
      }
    }
  }


}

#imagen__content{
  width: 350px;
  height: 350px;
  margin: auto;
  max-width: 100%;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>