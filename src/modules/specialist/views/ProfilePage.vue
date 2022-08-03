<template>
  <b-row class="profile-specialist__container mx-0 pb-2 pt-4 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div v-b-toggle.collapse-3>
            <span>Mi resumen</span><i class="fa-solid fa-angle-down ml-2"></i>
          </div>
          <b-collapse id="collapse-3" class="pl-4 pt-2">
            <div
                class="pl-2"
                v-b-toggle.collapse-3
                @click="goBox('presentation__box')"
                :class="isPresentationSection ? 'menu-active' : ''"
            >
              <span>Presentación</span>
            </div>
            <hr/>
            <div
                class="pl-2"
                v-b-toggle.collapse-3
                @click="goBox('galery__box')"
                :class="isGalerySection ? 'menu-active' : ''"
            >
              <span>Galeria</span>
            </div>
            <hr/>
            <div
                class="pl-2"
                v-b-toggle.collapse-3
                @click="goBox('experience__box')"
                :class="isExperienceSection ? 'menu-active' : ''"
            >
              <span>Experiencia</span>
            </div>
            <hr/>
            <div
                class="pl-2"
                v-b-toggle.collapse-3
                @click="goBox('location__box')"
                :class="isLocationSection ? 'menu-active' : ''"
            >
              <span>Locaciones de trabajo</span>
            </div>
            <hr/>
            <div
                class="pl-2"
                v-b-toggle.collapse-3
                @click="goBox('acount__box')"
                :class="isAcountSection ? 'menu-active' : ''"
            >
              <span>Cuentas</span>
            </div>
          </b-collapse>
        </div>
      </div>
      <div
          id="menu__container--web"
          :class="menuChange ? 'menu__container--web' : ''"
          class="menu__container py-3 px-4 bg-white d-none d-lg-block"
      >
        <div class="text-center">
          <span>Mi resumen</span>
        </div>
        <hr/>
        <div
            class="text-center"
            @click="goBox('presentation__box')"
            :class="isPresentationSection ? 'menu-active' : ''"
        >
          <span>Presentación</span>
        </div>
        <hr/>
        <div
            class="text-center"
            @click="goBox('galery__box')"
            :class="isGalerySection ? 'menu-active' : ''"
        >
          <span>Galeria</span>
        </div>
        <hr/>
        <div
            class="text-center"
            @click="goBox('experience__box')"
            :class="isExperienceSection ? 'menu-active' : ''"
        >
          <span>Experiencia</span>
        </div>
        <hr/>
        <div
            class="text-center"
            @click="goBox('location__box')"
            :class="isLocationSection ? 'menu-active' : ''"
        >
          <span>Locaciones de trabajo</span>
        </div>
        <hr/>
        <div
            class="text-center"
            @click="goBox('acount__box')"
            :class="isAcountSection ? 'menu-active' : ''"
        >
          <span>Cuentas</span>
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0">
        <b-col cols="12" id="presentation__box">
          <b-card class="mb-4 pt-5 ">
            <div class="image__user">
              <img src="@/assets/img-delete/profile.jpg" alt=""/>
            </div>
            <div
                class="button__action button__action--float text-warning"
                v-b-modal.modal-presentation
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h4>
              Armando paredes
              <span class="profile__status ml-2"
              ><i class="fa-solid fa-circle-check"></i> Perfil
                verificado</span
              >
            </h4>
            <hr class="mt-0"/>
            <div class="mb-1">Pintor, albañil, Carpintero</div>
            <div>Av.Los pinos, lima, Perú</div>
            <div>+51 999 999 999 / 0800600</div>
            <span class="d-block mt-2"><b>Acerca de ti</b></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, deleniti officiis! Quidem beatae quaerat laboriosam
              impedit hic quam doloribus tempore, sapiente libero. Laborum sunt
              dignissimos voluptatum sequi dolore, molestiae similique nihil
              itaque rerum incidunt ab? Nam placeat ullam odio cum dolor!
              Repellendus quidem excepturi ut animi at quia? Quo accusantium
              quis iusto dolor, exercitationem debitis sed odio illo itaque est!
            </p>
          </b-card>
        </b-col>
        <b-col cols="12" id="galery__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                Galeria
                <span class="profile__info text-warning ml-2"
                ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div class="button__action text-warning" v-b-modal.modal-galery>
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <hr class="mt-0"/>
            <div class="py-2">
              <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="3000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide
                    img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide
                    img-src="https://picsum.photos/1024/480/?image=54"
                >
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide
                    img-src="https://picsum.photos/1024/480/?image=58"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="experience__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                Experiencia
                <span class="profile__info text-warning ml-2"
                ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div
                  class="button__action button__action--success"
                  @click="modalProfessionCreate"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0"/>
            <div class="p-2">
              <div class="experience__item p-3 mb-3"
                   v-for="(experience, id) in experiences" :key="id"
              >
                <b-row class="mx-0">
                  <b-col cols="12" class="px-0 d-flex justify-content-end mb-2 d-block d-md-none">
                    <div
                        class="button__action text-warning mr-2"
                        @click="modalProfessionEdit"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div
                        class="button__action text-danger"
                        @click="deleteExperience(experience.id)"
                    >
                      <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                  </b-col>
                  <b-col cols="12" md="10" class="d-flex  px-0">
                    <div class="experience__image ">
                      <img src="@/assets/img-delete/experience.jpg" alt=""/>
                    </div>
                    <div class="pl-2 pl-md-3">
                      <h1 class="experience__title ">
                        {{ experience.title }}
                      </h1>
                      <h2 class="experience__range ">
                        ANIOS EN EL SECTOR: {{ experience.time }} años
                      </h2>
                    </div>
                  </b-col>
                  <b-col cols="2" class="px-0 d-none d-md-flex justify-content-end">
                    <div
                        class="button__action  text-warning mr-3"
                        @click="modalProfessionEdit"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div
                        class="button__action text-danger"
                        @click="deleteExperience(experience.id)"
                    >
                      <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                  </b-col>
                </b-row>

                <h1 class="experience__subtitle mt-3">ESPECIALIDADES</h1>
                <b-row class="mx-0">
                  <b-col cols="12" md="6" class="d-flex" v-for="(especiality, id) in experience.specialities" :key="id">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span> {{ especiality.name }} </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span> Concreto/Armado </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span> Instalación de interruptores y tomacorrientes </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch mr-2 text-primary"></i>
                    </div>
                    <span> Servicios Generales </span>
                  </b-col>
                </b-row>
              </div>

            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="location__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                Locaciones de trabajo
                <span class="profile__info text-warning ml-2"
                ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div
                  class="button__action button__action--success"
                  @click="(isModalLocationEdit = false), showModalLocation()"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0"/>
            <div class="px-4 py-2">
              <b-row
                  class="mx-0 locattion__item mb-3"
                  v-for="(location, index) in locationsList"
                  :key="index"
              >
                <b-col cols="10">
                  <h1 class="locattion__title text-center">
                    {{ location.value }}
                  </h1>
                </b-col>
                <b-col cols="2" class="d-flex justify-content-around flex-wrap">
                  <div
                      class="button__action text-warning"
                      @click="(isModalLocationEdit = true), showModalLocation()"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div class="button__action text-danger">
                    <i
                        class="fa-solid fa-circle-xmark"
                        @click="deleteLocation(location.id)"
                    ></i>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="acount__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                Cuentas
                <span class="profile__info text-warning ml-2"
                ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div
                  class="button__action button__action--success"
                  v-b-modal.modal-acount
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0"/>
            <div class="px-4 py-2">
              <b-row
                  class="acount__item mx-0 mb-3 py-3"
                  v-for="acount in acountsList"
                  :key="acount.id"
              >
                <b-col cols="10" class="d-flex align-items-center">
                  <b-form-checkbox size="lg"></b-form-checkbox>
                  <div class="d-flex flex-wrap">
                    <div class="acount__image ml-2 mb-2 mb-md-0">
                      <img src="@/assets/img-delete/visa-logo.jpg" alt=""/>
                    </div>
                    <h3 class="mb-0 ml-2" for="checkbox-1">
                      {{ acount.value }}
                    </h3>
                  </div>
                </b-col>
                <b-col cols="2" class="d-flex justify-content-center">
                  <div class="button__action text-danger">
                    <i
                        class="fa-solid fa-circle-xmark"
                        @click="deleteAcount(acount.id)"
                    ></i>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
    <b-modal
        id="modal-presentation"
        title="Editar Presentación"
        size="lg"
        centered
    >
      <template #modal-footer>
        <b-row class="mx-0 w-100">
          <b-col
              cols="12"
              lg="11"
              class="d-flex justify-content-end w-100 mx-auto"
          >
            <b-button
                variant="secondary"
                @click="$bvModal.hide('modal-experience')"
                class="mr-3"
            >Cancelar
            </b-button
            >
            <b-button variant="primary" @click="$refs.btnFormPresentation.click()">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-form @submit.prevent="editPresentation" validated>
        <b-row class="justify-content-around px-0 px-lg-2 mx-0">
          <b-col cols="12" lg="8" class="mb-4 mx-auto">
            <div
                class="form-image__file mt-2 mx-auto mb-1"
                :class="
                !formPresentation.image.url ? 'form-image__file--aux' : ''
              "
                @click="uploadPresentationImage"
            >
              <img
                  :src="
                  !formPresentation.image.url
                    ? require('@/assets/img-delete/fileimage-up.png')
                    : formPresentation.image.url
                "
                  alt="image"
              />
            </div>

            <b-form-file
                style="display: none"
                ref="presentationFile"
                hidden
                @change="changeFilePresentation"
            ></b-form-file>
            <span class="d-block text-center"
            >Seleccionar la imagen para actualizarla</span
            >
          </b-col>
          <b-col cols="12">
            <hr/>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Nombres" label-for="input-pres-1">
              <b-form-input
                  v-model="formPresentation.name"
                  id="input-pres-1"
                  type="text"
                  placeholder="Ingrese su nombre"
                  class="rounded-pill"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Apellidos" label-for="input-pres-2">
              <b-form-input
                  id="input-pres-2"
                  type="text"
                  v-model="formPresentation.lastName"
                  placeholder="Ingrese su apellido"
                  class="rounded-pill"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="11" class="mb-3">
            <b-form-group label="Acerca de mi" label-for="input-pres-3">
              <b-form-textarea
                  id="input-pres-3"
                  v-model="formPresentation.experience"
                  placeholder="Redacta acerca de tu experiencia"
                  rows="4"
                  max-rows="6"
                  required
                  class="rounded-right rounded-left"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="11" class="mb-3">
            <b-form-group label="Dirección" label-for="input-pres-4">
              <b-form-input
                  id="input-pres-4"
                  type="text"
                  v-model="formPresentation.direction"
                  placeholder="Ingrese su dirección"
                  class="rounded-pill"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Teléfono Principal" label-for="input-pres-5">
              <b-form-input
                  id="input-pres-5"
                  type="text"
                  v-model="formPresentation.phone"
                  placeholder="Ingrese su teléfono"
                  class="rounded-pill"
                  oninput="this.value = value.replace(/[^0-9]/g, '')"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Teléfono Secundario" label-for="input-pres-6">
              <b-form-input
                  id="input-pres-6"
                  type="text"
                  v-model="formPresentation.secondPhone"
                  placeholder="Ingrese su teléfono secundario"
                  class="rounded-pill"
                  oninput="this.value = value.replace(/[^0-9]/g, '')"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <div style="display: none">
          <button type="submit" ref="btnFormPresentation"></button>
        </div>
      </b-form>
    </b-modal>
    <b-modal id="modal-galery" title="Editar Galeria" size="lg" centered>
      <template #modal-footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12"
                 class="d-flex justify-content-end w-100 mx-auto">
            <b-button variant="secondary" class="mr-3" @click="$bvModal.hide('modal-galery')"
            >Cancelar
            </b-button
            >
            <b-button variant="primary">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-row class="justify-content-around  mx-0">
        <b-col
            cols="6"
            md="5"
            lg="4"
            v-for="(image, index) in formGalery.imagesList"
            :key="index"
        >
          <div
              class="form-image__file mb-3"
              :class="!image.url ? 'form-image__file--aux' : ''"
          >
            <img
                @click="uploadImage(index)"
                :src="
                !image.url
                  ? require('@/assets/img-delete/fileimage-up.png')
                  : image.url
              "
                alt="image"
            />
            <div
                v-if="image.url"
                class="form-image__delete"
                @click="deleteImage(index)"
            >
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <b-form-file
              style="display: none"
              :id="`portadaFile${index}`"
              hidden
              @change="changeFileCover"
          ></b-form-file>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
        id="modal-experience"
        ref="modal-experience"
        :title="
        isModalProfessionEdit ? 'Editar Experiencia' : 'Nueva Experiencia'
      "
        size="lg"
        centered
    >
      <template #modal-footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12" lg="11" class="d-flex justify-content-end w-100 mx-auto">
            <b-button
                variant="secondary"
                @click="$bvModal.hide('modal-experience')"
                class="mr-3"
            >Cancelar
            </b-button
            >
            <b-button variant="primary" @click="$refs.btnFormExperience.click()">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-form @submit.prevent="editExperience" validated>
        <b-row class="mx-0 px-0 px-lg-2">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Profesiones:</h6>
            <hr/>
            <b-row class="mx-0 mt-2">
              <b-col cols="12" lg="4" class="px-0 mb-4">

                <b-form-select
                    v-model="formProfession.selectedProfession"
                    :options="optionsProfessions"
                    id="input-experience-1"
                ></b-form-select>

              </b-col>
              <b-col cols="12" lg="8" class="mt-3 mx-auto">
                <b-row class="mx-0 justify-content-around">
                  <b-col cols="12" md="6" class="mb-5 mb-md-0">
                    <b-col cols="7" md="8" class="mx-auto work__temp ">
                      <div class="text-center work__date">Años</div>
                      <div
                          class="work__buttons work__buttons--left"
                          @click="substractYear()"
                      >
                        -
                      </div>
                      <b-form-input
                          v-model="formProfession.workExperience.years"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          oninput="this.value = value.replace(/[^0-9]/g, '')"
                      ></b-form-input>
                      <div
                          class="work__buttons work__buttons--right"
                          @click="addYear()"
                      >
                        +
                      </div>
                    </b-col>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-col cols="7" md="8" class="mx-auto work__temp">
                      <div class="text-center work__date">Meses</div>
                      <div
                          class="work__buttons work__buttons--left"
                          @click="substractMonth()"
                      >
                        -
                      </div>
                      <b-form-input
                          v-model="formProfession.workExperience.months"
                          type="text"
                          placeholder="0"
                          required
                          class="rounded-pill"
                          oninput="this.value = value.replace(/[^0-9]/g, '')"
                      ></b-form-input>
                      <div
                          class="work__buttons work__buttons--right"
                          @click="addMonth()"
                      >
                        +
                      </div>
                    </b-col>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12" lg="11" class="mt-4 mx-auto">
            <h6>Especialidades</h6>
            <hr/>
            <b-row class="mx-0 justify-content-around">
              <b-col
                  cols="12"
                  lg="6"
                  class="mb-3 mb-lg-2"
                  v-for="(specialty, index) in formProfession.specialtiesList"
                  :key="index"
                  @click="specialty.active = !specialty.active"
              >
                <b-row
                    class="mx-0 experience__item p-1 rounded-pill"
                    :class="{ 'experience__item--active': specialty.active }"
                >
                  <b-col
                      cols="3"
                      class="d-flex justify-content-center experience__icon align-items-center"
                  >
                    <i
                        :class="
                        specialty.active
                          ? 'fa-solid fa-check'
                          : 'fa-solid fa-circle-notch'
                      "
                    ></i>
                  </b-col>
                  <b-col cols="9" class="text-center">
                    {{ specialty.name }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div style="display: none">
          <button type="submit" ref="btnFormExperience"></button>
        </div>
      </b-form>
    </b-modal>
    <b-modal
        ref="modal-location"
        id="modal-location"
        :title="
        isModalLocationEdit
          ? 'Editar Locación de trabajo'
          : 'Nueva Locación de trabajo'
      "
        size="lg"
        centered
    >
      <template #modal-footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12" lg="11" class="d-flex justify-content-end w-100 mx-auto">
            <b-button
                variant="secondary"
                @click="$bvModal.hide('modal-location')"
                class="mr-3"
            >Cancelar
            </b-button
            >
            <b-button variant="primary" @click="$refs.btnFormLocation.click()">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-form @submit.prevent="editLocation" validated>
        <b-row class="mx-0">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Zona:</h6>
            <hr/>
            <b-row class="mx-0 mt-2">

              <b-col cols="12" lg="5" class="px-0">
                <b-form-select
                    v-model="formLocation.selectedLocation"
                    :options="optionsLocation"
                    id="input-location-1"
                ></b-form-select>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="11" class="mt-5 mx-auto">
            <h6>Distritos disponibles</h6>
            <hr/>
            <b-row class="mx-0 justify-content-around">
              <b-col
                  cols="12"
                  lg="6"
                  class="mb-3 mb-lg-2"
                  v-for="(district, index) in formLocation.districtList"
                  :key="index"
                  @click="district.active = !district.active"
              >
                <b-row
                    class="mx-0 district__item p-1 rounded-pill"
                    :class="{ 'district__item--active': district.active }"
                >
                  <b-col
                      cols="3"
                      class="d-flex justify-content-center district__icon align-items-center"
                  >
                    <i
                        :class="
                        district.active
                          ? 'fa-solid fa-check'
                          : 'fa-solid fa-circle-notch'
                      "
                    ></i>
                  </b-col>
                  <b-col cols="9" class="text-center">
                    {{ district.name }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div style="display: none">
          <button type="submit" ref="btnFormLocation"></button>
        </div>
      </b-form>
    </b-modal>
    <b-modal id="modal-acount" title="Nueva Cuenta" centered>
      <template #modal-footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12" class="d-flex justify-content-end w-100">
            <b-button variant="secondary" class="mr-3" @click="$bvModal.hide('modal-acount')"
            >Cancelar
            </b-button
            >
            <b-button variant="primary" @click="$refs.btnFormAcount.click()">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-form @submit.prevent="editAcount" ref="formAcount" validated>
        <b-row class="mx-0 justify-content-around">
          <b-col cols="12" class="mb-3">
            <b-form-group label="Banco:" label-for="input-acount-1">
              <b-form-select
                  v-model="formAcount.selectedAcount"
                  :options="optionsAcount"
                  id="input-acount-1"
                  class="rounded-pill"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" class="mb-3">
            <b-form-group label="Número de cuenta:" label-for="input-acount-2">
              <b-form-input
                  v-model="formAcount.numAcount"
                  id="input-pres-2"
                  type="text"
                  placeholder="Ingrese su número de cuenta"
                  class="rounded-pill"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="CCI:" label-for="input-pres-2">
              <b-form-input
                  v-model="formAcount.cci"
                  id="input-pres-2"
                  type="text"
                  placeholder="Ingrese su CCI"
                  class="rounded-pill"
                  required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <div style="display: none">
          <button type="submit" ref="btnFormAcount"></button>
        </div>
      </b-form>
    </b-modal>
    <b-col id="footer__limit"></b-col>
  </b-row>
</template>

<script setup lang="ts">
import {alertSuccessButton} from "@/utils/SweetAlert";
import GeneralModule from '@/store/modules/general'
import {computed, onMounted, ref} from "vue";

const presentationFile!: any = ref({});

const isLoading: Boolean = true;
const slide: number = 0;
const sliding: any = null;
const experiences: Array<any> = [
  {
    id: 0,
    title: 'Construccion y Techado',
    time: 5,
    specialities: [
      {
        id: 0,
        name: 'Concreto/Armado'
      },
      {
        id: 1,
        name: 'Instalación de interruptores'
      },
      {
        id: 2,
        name: 'Servicios generales'
      },
      {
        id: 3,
        name: 'Servicios generales'
      },
    ]
  },
  {
    id: 1,
    title: 'Arquitectura',
    time: 5,
    specialities: [
      {
        id: 1,
        name: 'Concreto/Armado'
      },
      {
        id: 2,
        name: 'Instalación de interruptores'
      },
      {
        id: 3,
        name: 'Servicios generales'
      },
      {
        id: 4,
        name: 'Servicios generales'
      },
    ]
  }
];
const locationsList: Array<any> = [
  {
    id: "1",
    value: "Lima Norte, Los Olivos, Independencia, San Martin de Porres",
  },
  {
    id: "2",
    value: "Lima Sur, San Miguel, Chorrillos, Asia",
  },
  {
    id: "3",
    value: "Lima Norte, Los Olivos, Independencia, San Martin de Porres",
  },
];
const acountsList: Array<any> = [
  {
    id: "1",
    value: "XXXX XXXX XXXX 7698",
  },
  {
    id: "2",
    value: "XXXX XXXX XXXX 1569",
  },
];
const imageSelected: number = 0;
const formPresentation: any = {
  image: {
    url: null,
    file: null,
  },
  name: "",
  lastName: "",
  experience: "",
  direction: "",
  phone: "",
  secondPhone: "",
};
const formGalery: any = {
  imagesList: [
    {
      id: 0,
      url: "",
      file: null,
    },
    {
      id: 1,
      url: "",
      file: null,
    },
    {
      id: 2,
      url: "",
      file: null,
    },
    {
      id: 3,
      url: "",
      file: null,
    },
    {
      id: 4,
      url: "",
      file: null,
    },
    {
      id: 5,
      url: "",
      file: null,
    },
  ],
};
const isModalProfessionEdit: boolean = true;
const formProfession: any = {
  selectedProfession: 0,
  specialtiesList: [
    {
      id: 0,
      active: true,
      name: "Pintura de interiores",
    },
    {
      id: 1,
      active: false,
      name: "Pintura de interiores",
    },
    {
      id: 2,
      active: true,
      name: "Pintura de interiores",
    },
    {
      id: 3,
      active: true,
      name: "Pintura de interiores",
    },
  ],
  workExperience: {
    years: "",
    months: "",
  },
}
const optionsProfessions: Array<any> = [
  {value: 0, text: "Pintor"},
  {value: 1, text: "Albañil"},
  {value: 3, text: "Carpintero"},
  {value: 4, text: "Lima"},
];
const isModalLocationEdit: boolean = true;
const formLocation: any = {
  selectedLocation: 0,
  districtList: [
    {
      id: 0,
      active: true,
      name: "Los Olivos",
    },
    {
      id: 1,
      active: false,
      name: "Puente Piedra",
    },
    {
      id: 2,
      active: true,
      name: "Independencia",
    },
    {
      id: 3,
      active: true,
      name: "San Martin de Porres",
    },
  ],
};
const optionsLocation: Array<any> = [
  {value: 0, text: "Lima Norte"},
  {value: 1, text: "Lima Sur"},
  {value: 3, text: "Lima Este"},
  {value: 4, text: "Lima Oeste"},
];
const formAcount: any = {
  selectedAcount: 0,
  numAcount: "",
  cci: "",
};
const optionsAcount: Array<any> = [
  {value: 0, text: "Interbank"},
  {value: 1, text: "BCP"},
  {value: 3, text: "Scotiabank"},
  {value: 4, text: "Banbif"},
];
const section1: any = null;
const section2: any = null;
const section3: any = null;
const section4: any = null;
const section5: any = null;
onMounted(() => {
  this.isLoading = false;
  this.$nextTick(() => {
    // this.section1 = document.getElementById('presentation__box').offsetTop
    this.section2 = (<HTMLInputElement>document.getElementById("galery__box")).offsetTop - 10;
    this.section3 = (<HTMLInputElement>document.getElementById("experience__box")).offsetTop - 10;
    this.section4 = (<HTMLInputElement>document.getElementById("location__box")).offsetTop - 10;
    this.section5 = (<HTMLInputElement>document.getElementById("acount__box")).offsetTop - 10;
  });
});


function modalProfessionEdit() {
  this.isModalProfessionEdit = true;
  this.$bvModal.show('modal-experience')
}

function modalProfessionCreate() {
  this.isModalProfessionEdit = false;
  this.$bvModal.show('modal-experience')
}

function showModalLocation() {
  this.$bvModal.show('modal-location')
}

function deleteLocation(id: number) {
  const index = this.locationsList.findIndex(
      (location) => location.id == id
  );
  this.locationsList.splice(index, 1);
}

function deleteAcount(id: string) {
  const index = this.acountsList.findIndex((acount) => acount.id == id);
  this.acountsList.splice(index, 1);
}

function deleteExperience(id: number) {
  const index = this.experiences.findIndex((experience) => experience.id == id);
  this.experiences.splice(index, 1);
}

function onSlideStart() {
  this.sliding = true;
}

function onSlideEnd() {
  this.sliding = false;
}

function goBox(boxName: string) {
  const boxContainer: any = document.getElementById(`${boxName}`);
  const top: number = boxContainer.offsetTop;
  window.scroll({
    top,
    left: 0,
    behavior: "smooth",
  });
}

function addYear() {
  this.formProfession.workExperience.years++;
}

function substractYear() {
  if (this.formProfession.workExperience.years > 0) {
    this.formProfession.workExperience.years--;
  }
}

function addMonth() {
  this.formProfession.workExperience.months++;
}

function substractMonth() {
  if (this.formProfession.workExperience.months > 0) {
    this.formProfession.workExperience.months--;
  }
}

function uploadImage(index: any) {
  this.imageSelected = index;
  // const btnFile:any = <any>this.$refs[`portadaFile${index}`][0].$el.children[0];
  const btnFile: any = document.getElementById(`portadaFile${index}`)
  btnFile.click();
}

function changeFileCover(event: any) {
  const index = this.imageSelected;
  const file: any = event.target.files[0];
  if (!file) {
    this.formGalery.imagesList[index].url = null;
    this.formGalery.imagesList[index].file = null;
    return;
  }

  this.formGalery.imagesList[index].file = file;
  const fr = new FileReader();
  fr.onload = () => (this.formGalery.imagesList[index].url = fr.result);
  fr.readAsDataURL(file);
}

function deleteImage(index: any) {
  this.formGalery.imagesList[index].url = null;
  this.formGalery.imagesList[index].file = null;
}

function uploadPresentationImage() {
  const btnFile = this.presentationFile.$el.children[0];
  btnFile.click();
}

function changeFilePresentation(event: any) {
  const file = event.target.files[0];
  if (!file) {
    this.formPresentation.image.file = null;
    this.formPresentation.image.url = null;
    return;
  }

  this.formPresentation.image.file = file;
  const fr = new FileReader();
  fr.onload = () => (this.formPresentation.image.url = fr.result);
  fr.readAsDataURL(file);
}

function editPresentation() {
  alertSuccessButton("Se realizo la operación exitosamente");
}

function editExperience() {
  alertSuccessButton("Se realizo la operación exitosamente");
}

function editLocation() {
  alertSuccessButton("Se realizo la operación exitosamente");
}

function editAcount() {
  alertSuccessButton("Se realizo la operación exitosamente");
}

const menuChange = computed(() => {
  if (!this.isLoading) {
    let footer: any = document.getElementById("footer__limit");
    let footerScrollY: number = Number(footer.offsetTop) - 320;

    if (GeneralModule.getScroll > 70 && Number(GeneralModule.getScroll) < footerScrollY) {
      return true;
    }
  }
  return false;
});

const isPresentationSection = computed(() => {
  return GeneralModule.getScroll >= 0 && GeneralModule.getScroll < this.section2
      ? true
      : false;
});

const isGalerySection = computed(() => {
  return GeneralModule.getScroll >= this.section2 && GeneralModule.getScroll < this.section3
      ? true
      : false;
});
const isExperienceSection = computed(() => {
  return GeneralModule.getScroll >= this.section3 && GeneralModule.getScroll < this.section4
      ? true
      : false;
});
const isLocationSection = computed(() => {
  return GeneralModule.getScroll >= this.section4 && GeneralModule.getScroll < this.section5
      ? true
      : false;
});
const isAcountSection = computed(() => {
  if (!this.isLoading) {
    let footer: any = document.getElementById("footer__limit");
    let footerScrollY: number = Number(footer.offsetTop) - 320;
    return GeneralModule.getScroll >= this.section5 && GeneralModule.getScroll < footerScrollY
        ? true
        : false;
  } else {
    return false;
  }
});

</script>

<style lang="scss" scoped>
.profile-specialist__container {

.profile__menu {

.menu__container {
  z-index: 3;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

hr {
  margin: 0;
}

div {
  padding: 10px 0;
  cursor: pointer;
}

div:hover {
  background-color: #3a88ec;
  color: white;
}

}
.menu__container--web {
  position: fixed;
  top: 90px;
  padding-top: 0;
  width: 100%;
  max-width: 240px;
}

}
.card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
}

.profile__menu {
  padding-top: 70px;
}

.profile__content {
  padding-top: 70px;

.button__action {
  font-size: 1.5rem;
  cursor: pointer;
}

.button__action--success {
  color: rgb(64, 231, 114);
  font-size: 2rem;
}

.button__action--float {
  position: absolute;
  top: 20px;
  right: 20px;
}

.button__action--float2 {
  position: absolute;
  right: 0px;
  top: 0;
}

.image__user {
  width: 120px;
  height: 120px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.308);
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 100%;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
}

}
.profile__info {
  font-size: 1.1rem;
}

.profile__status {
  font-size: 1.1rem;

i {
  color: rgb(64, 231, 114);
}

}
.experience__item {
  border: 2px solid rgba(80, 80, 80, 0.226);
  border-radius: 2px;

.experience__image {
  width: 55px;
  height: 55px;

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

}
.experience__title {
  font-size: 1.1rem;
}

.experience__range {
  font-size: 0.9rem;
}

.experience__subtitle {
  font-size: 1.1rem;
}

}
.locattion__item {
  border: 1px solid rgba(0, 0, 0, 0.342);
  border-radius: 4px;
  padding: 5px 10px;
  align-items: center;

.locattion__title {
  font-size: 1rem;
  margin-bottom: 0;
}

}
.acount__item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.342);

.acount__image {
  width: 55px;
  height: 40px;

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

}
}
}
}
#modal-presentation {

.form-image__file {
  width: 210px;
  height: 210px;
  border: 1px solid #b6bdcc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border-radius: 100%;
}

.form-image__file--aux {
  padding: 25px;
}

.form-image__file img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 100%;
}

.form-image__file--aux img {
  height: auto;
  border-radius: 0;
}

}
#modal-experience {

.experience__item {
  border: 1px solid rgba(0, 0, 0, 0.521);
  cursor: pointer;

.experience__icon {
  border-right: 1px solid rgba(0, 0, 0, 0.521);
}

}
.experience__item--active {
  border: 1px solid #3a88ec;
  background-color: #3a88ec;
  color: white;

.experience__icon {
  border-right: 1px solid white;
}

}
.experience__item:hover {
  border: 1px solid rgb(169, 169, 169);
  background-color: rgb(169, 169, 169);
  color: white;

.experience__icon {
  border-right: 1px solid white;
}

}
.work__date {
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  margin: auto;
}

.work__buttons {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  background-color: rgb(145, 145, 145);
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.work__buttons:hover {
  background-color: #347bd8;
}

.work__buttons--left {
  left: -35px;
}

.work__buttons--right {
  right: -35px;
}

.form-step-button {
  display: none;
}

}
#modal-location {

.district__item {
  border: 1px solid rgba(0, 0, 0, 0.521);
  cursor: pointer;

.district__icon {
  border-right: 1px solid rgba(0, 0, 0, 0.521);
}

}
.district__item--active {
  border: 1px solid #3a88ec;
  background-color: #3a88ec;
  color: white;

.district__icon {
  border-right: 1px solid white;
}

}
.district__item:hover {
  border: 1px solid rgb(169, 169, 169);
  background-color: rgb(169, 169, 169);
  color: white;

.district__icon {
  border-right: 1px solid white;
}

}
}
#modal-galery {

.form-image__file {
  border: 1px solid rgba(66, 66, 66, 0.473);
  border-radius: 10px;
  height: 200px;
  cursor: pointer;
}

.form-image__file--aux {
  padding: 20px 5px;
}

.form-image__file img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 10px;
}

.form-image__delete {
  position: absolute;
  top: 5px;
  right: 25px;
  font-size: 1.2rem;
  color: rgb(241, 46, 46);
  z-index: 10;
  cursor: pointer;

i {
  background-color: white;
  border-radius: 100%;
}

}
}
.menu-active {
  background-color: #3a88ec !important;
  color: white;
}

@media (max-width: 991px) {
  .custom-checkbox {
    z-index: 0;
  }

  .profile-specialist__container {

  .profile__menu {
    padding: 0;
    z-index: 1;
    position: fixed;
    top: 74px;
    left: 0;

  .menu__container {
    width: 100%;
    display: block;

  div:hover {
    background-color: white;
    color: initial;
  }
}

}
.profile__content {
  margin-top: 100px;
}

}
#modal-galery {

.form-image__file {
  border: 1px solid rgba(66, 66, 66, 0.473);
  border-radius: 10px;
  height: 150px;
  cursor: pointer;
}

}
}

</style>
