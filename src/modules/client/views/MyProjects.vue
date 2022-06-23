<template>
  <b-row class="projects__container mx-0 pt-0 pt-lg-2 pb-2 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div class="mb-2" v-b-toggle.collapse-3>
            <i class="fa-solid fa-house-circle-check mr-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse visible  id="collapse-3" class="pl-4 py-2">
            <span class="d-block mb-2 menu__subitem" :class="{'active' : isCurrentTab}" @click="isCurrentTab = true">Vigentes (2)</span>
            <span class="d-block menu__subitem" :class="{'active' : !isCurrentTab}" @click="isCurrentTab = false">Pasados (3)</span>
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart mr-2"></i><span>Favoritos</span></div>
      </div>
      <div
        id="menu__container--web"
        :class="menuChange ? 'menu__container--web' : ''"
        class="menu__container py-3 px-4 bg-white d-none d-lg-block"
      >
        <div>
          <div class="mb-2" v-b-toggle.collapse-3>
            <i class="fa-solid fa-house-circle-check mr-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse visible  id="collapse-3" class="pl-4 py-2">
            <span class="d-block mb-2 menu__subitem" :class="{'active' : isCurrentTab}" @click="isCurrentTab = true">Vigentes (2)</span>
            <span class="d-block menu__subitem" :class="{'active' : !isCurrentTab}" @click="isCurrentTab = false">Pasados (3)</span>
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart mr-2"></i><span>Favoritos</span></div>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="projects__content">
      <div v-if="isCurrentTab">
        <h1 class="projects__title">Mis Proyectos Vigentes (13)</h1>
        <div>
          <project-card v-for="(project, index) in currentProjects" :key="index" :project="project"></project-card>
        </div>

      </div>
      <div v-else>
        <h1 class="projects__title">Mis Proyectos Pasados (13)</h1>
        <div>
          <project-card
            v-for="(project, index) in pastProjects"
            :key="index"
            :project="project"
            @calification-modal="openCalificationModal"
          ></project-card>
        </div>

      </div>
      <b-button variant="primary" @click="loadProjects" class="w-100 mb-4 notifications-list__btn-loading">
          <i class="fa-regular mr-2" :class="isLoadingProjects? 'fas fa-spinner fa-spin' : 'fa-plus'"></i>
          {{isLoadingProjects? 'Cargando' : 'Ver mas'}}
        
      </b-button>
    </b-col>
    <b-modal ref="modal-calification" id="modal-calification" centered class="modal-calification" title="Calificar">
      <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
        <i
          class="fa-solid fa-star mr-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 5)"
        ></i>
        <i
          class="fa-solid fa-star mr-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 4)"
        ></i>
        <i
          class="fa-solid fa-star mr-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 3)"
        ></i>
        <i
          class="fa-solid fa-star mr-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 2)"
        ></i>
        <i
          class="fa-solid fa-star mr-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 1)"
        ></i>
      </div>
      <template #modal-footer>
        <div>
          <b-button variant="primary" @click="sendQualification">Enviar calificación</b-button>
        </div>
      </template>
    </b-modal>
    <b-col id="footer__limit"></b-col>   
  </b-row>
</template>

<script lang="ts">
import ProjectCard from '@/modules/client/views/Components/ProjectCard.vue'
import { alertLoading, alertSuccessfully, closeAlert } from '@/utils/SweetAlert';
import { Component, Prop, Vue } from "vue-property-decorator";
import GeneralModule from '@/store/modules/general'

@Component({
  name: 'MyProject',
  components: {
    ProjectCard
  }
})
export default class MyProjects extends Vue{
  @Prop({type: String, required: true}) type!:string;

  isLoading:Boolean = true; //Gestiona la carga de recursos
  isLoadingProjects:Boolean= false;
  isCurrentTab:Boolean= true;
  projectSelected:number= 0;
  qualificationSelected:number= 0;
  // Ejemplo de estados del projecto para la simulación
  // Status: 0 (Abierto) , 1(Propuesta Aceptada), 2(Pendiente de pago) , 3(Terminada)
  currentProjects:Array<any> =[
    {
      id: 1,
      work: 'Carpintero',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 0,
      isQualified: false,
    },
    {
      id: 2,
      work: 'Pintor',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil volem?',
      status: 1,
      isQualified: false,
    },
    {
      id: 3,
      work: 'Maestro de obra',
      description: ' Lorem ipsum dolor sit amet consectetur, ecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 2,
      isQualified: false,
    }
  ];
  pastProjects:Array<any> = [
    {
      id: 4,
      work: 'Tecnico',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 3,
      isQualified: false,
    },
    {
      id: 5,
      work: 'Electricista',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil volem?',
      status: 3,
      isQualified: false,
    },
    {
      id: 6,
      work: 'Carpintero',
      description: ' Lorem ipsum dolor sit amet consectetur, ecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 3,
      isQualified: false,
    }
  ];

  created(){
    if(this.type == 'current'){
      this.isCurrentTab = true
    }else{
      this.isCurrentTab = false
    }
  }

  mounted() {
    this.isLoading = false;
  }



  //Carga mas projectos
  loadProjects(){
    this.isLoadingProjects = true
    if(this.isCurrentTab){
      this.loadCurrentProjects()
    }else{
      this.loadPastProjects()
    }

  }
  //Carga projectos vigentes
  loadCurrentProjects(){
    const project = {
      id: 7,
      work: 'Tecnico',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 0,
      isQualified: false,
    }

    const timeOut = setTimeout(()=>{
      this.currentProjects.push(project)
      this.currentProjects.push(project)
      this.isLoadingProjects = false
      clearTimeout(timeOut)
    },2000) 
  }
  //Carga proyectos pasados
  loadPastProjects(){
    const project = {
      id: 8,
      work: 'Tecnico',
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?',
      status: 3,
      isQualified: false,
    }

    const timeOut = setTimeout(()=>{
      this.pastProjects.push(project)
      this.pastProjects.push(project)
      this.isLoadingProjects = false
      clearTimeout(timeOut)
    },2000) 
  }
  //Abrir el Modal de Calificacion
  openCalificationModal(id:number){
    this.projectSelected = id
    this.$bvModal.show('modal-calification')
  }
  //Cerrar el Modal de calificación
  closeCalificationModal(){
    this.$bvModal.hide('modal-calification')
  }
  //Enviar una calificacion
  checkQualifaction( event:Event,qualification:number){
    this.clearIcons()
    const icon:any = event.target
    icon.classList.add('active')
    this.qualificationSelected = qualification
  }
  sendQualification(){
    alertLoading()
    const project = this.pastProjects.find(proj => proj.id == this.projectSelected)
    project.isQualified = true
    const timeOut = setTimeout(()=>{
      alertSuccessfully('Se envio la calificación exitosamente')
      this.clearIcons()
      this.closeCalificationModal()
      const timeOut2 = setTimeout(()=>{
        closeAlert()
        clearTimeout(timeOut2)
      }, 1500)
      clearTimeout(timeOut)
    }, 1500)
  }
  clearIcons(){
    const iconList = document.querySelectorAll('.modal-calification__icon')
    iconList.forEach(icon => {
      icon.classList.remove('active')
    });
  }

  get menuChange() {
    if (!this.isLoading) {
      let footer:any = document.getElementById("footer__limit");
      let footerScrollY = Number(footer.offsetTop) - 320;

      if (GeneralModule.getScroll > 70 && Number(GeneralModule.getScroll) < footerScrollY) {
        return true;
      }
    }
    return false;
  }
}

</script>

<style lang="scss" scoped>
.projects__container {
  .profile__menu {
    .menu__container {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      div {
        cursor: pointer;

        .menu__subitem{
        
          &.active{
            color: #3a88ec;
          }
        }
      }
    }
    .menu__container--web {
      position: fixed;
      top: 90px;
      padding-top: 0;
      width: 100%;
      max-width: 250px;
    }
  }

  .card {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }
  .profile__menu {
    padding-top: 48px;
  }
  .projects__content {
    padding-top: 48px;

    .projects__title{
      font-size: 1.5rem;
    }

  }

  
}

#modal-calification{
  .modal-calification__icon{
    color: rgb(165, 165, 165);
    font-size: 1.5rem;

    &:hover{
      color: rgb(255, 196, 0);
    }
    &:hover~.modal-calification__icon{
      color: rgb(255, 196, 0);
    }

    &.active{
      color: rgb(255, 196, 0);
    }

    &.active~.modal-calification__icon{
      color: rgb(255, 196, 0);
    }
  }

  
}

.collapse{
  box-shadow: none !important;
}


@media (max-width: 991px) {
  .projects__container {
    .profile__menu {
      padding: 0;
      z-index: 1;
      position: fixed;
      top: 75px;
      left: 0;
    }

    .projects__content {
      padding-top: 180px;
    }
  }
}
</style>
