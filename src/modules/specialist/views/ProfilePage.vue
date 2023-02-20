<template>
  <b-row class="profile-specialist__container mx-0 pb-2 pt-4 mt-0">
    <b-col cols="12" lg="3" class="profile__menu">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div @click="isShowMenuResponsive = !isShowMenuResponsive">
            <span style="font-weight: 500">Mi resumen</span
            ><i class="fa-solid fa-angle-down ms-2"></i>
          </div>
          <b-collapse
            id="collapse-3"
            class="ps-4 pt-2"
            v-model="isShowMenuResponsive"
          >
            <div
              class="ps-2"
              @click="goBox('presentation__box')"
              :class="isPresentationSection ? 'menu-active' : ''"
            >
              <span>Presentación</span>
            </div>
            <hr />
            <div
              class="ps-2"
              @click="goBox('galery__box')"
              :class="isGalerySection ? 'menu-active' : ''"
            >
              <span>Galeria</span>
            </div>
            <hr />
            <div
              class="ps-2"
              @click="goBox('experience__box')"
              :class="isExperienceSection ? 'menu-active' : ''"
            >
              <span>Experiencia</span>
            </div>
            <hr />
            <div
              class="ps-2"
              @click="goBox('location__box')"
              :class="isLocationSection ? 'menu-active' : ''"
            >
              <span>Locaciones de trabajo</span>
            </div>
            <hr />
            <div
              class="ps-2"
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
        class="menu__container py-3 px-4 bg-white d-none d-lg-block"
      >
        <div
          @click="isShowMenuDesk = !isShowMenuDesk"
          style="text-align: center; font-weight: 500"
        >
          <span>Mi resumen</span>
          <i class="fa-solid fa-angle-down ms-2"></i>
        </div>
        <b-collapse v-model="isShowMenuDesk">
          <div
            class="text-center"
            @click="goBox('presentation__box')"
            :class="isPresentationSection ? 'menu-active' : ''"
          >
            <span>Presentación</span>
          </div>
          <div
            class="text-center"
            @click="goBox('galery__box')"
            :class="isGalerySection ? 'menu-active' : ''"
          >
            <span>Galeria</span>
          </div>
          <div
            class="text-center"
            @click="goBox('experience__box')"
            :class="isExperienceSection ? 'menu-active' : ''"
          >
            <span>Experiencia</span>
          </div>
          <div
            class="text-center"
            @click="goBox('location__box')"
            :class="isLocationSection ? 'menu-active' : ''"
          >
            <span>Locaciones de trabajo</span>
          </div>
          <div
            class="text-center"
            @click="goBox('acount__box')"
            :class="isAcountSection ? 'menu-active' : ''"
          >
            <span>Cuentas</span>
          </div>
        </b-collapse>
      </div>
    </b-col>
    <b-col cols="12" lg="9" class="profile__content">
      <b-row class="mx-0">
        <b-col cols="12" id="presentation__box">
          <b-card class="mb-4 pt-5">
            <div class="image__user">
              <img src="@/assets/img-delete/profile.jpg" alt="" />
            </div>
            <div
              class="button__action button__action--float text-warning"
              @click="showEditPresentacion()"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h4>
              Armando paredes
              <span class="profile__status ms-2"
                ><i class="fa-solid fa-circle-check"></i> Perfil
                verificado</span
              >
            </h4>
            <hr class="mt-0" />
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
                <span class="profile__info text-warning ms-2"
                  ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div
                class="button__action text-warning"
                @click="showModalGalery = true"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <hr class="mt-0" />
            <div class="py-2">
              <Carousel
                :settings="settings"
                :breakpoints="breakpoints"
                :autoplay="2000"
                :wrap-around="true"
                id="carousel-1"
              >
                <!-- Text slides with image -->
                <Slide v-for="photo in galleryPhotos" :key="photo">
                  <div class="carousel__item">
                    <img
                      class="gallery-item"
                      :src="photo.img"
                      :alt="photo.alt"
                    />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" id="experience__box">
          <b-card class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">
                Experiencia
                <span class="profile__info text-warning ms-2"
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
            <hr class="mt-0" />
            <div class="p-2">
              <div
                class="experience__item p-3 mb-3"
                v-for="(experience, id) in experiences"
                :key="id"
              >
                <b-row class="mx-0">
                  <b-col
                    cols="12"
                    class="px-0 d-flex justify-content-end mb-2 d-block d-md-none"
                  >
                    <div
                      class="button__action text-warning me-2"
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
                  <b-col cols="12" md="10" class="d-flex px-0">
                    <div class="experience__image">
                      <img src="@/assets/img-delete/experience.jpg" alt="" />
                    </div>
                    <div class="ps-2 ps-md-3">
                      <h1 class="experience__title">
                        {{ experience.title }}
                      </h1>
                      <h2 class="experience__range">
                        ANIOS EN EL SECTOR: {{ experience.time }} años
                      </h2>
                    </div>
                  </b-col>
                  <b-col
                    cols="2"
                    class="px-0 d-none d-md-flex justify-content-end"
                  >
                    <div
                      class="button__action text-warning me-3"
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
                  <b-col
                    cols="12"
                    md="6"
                    class="d-flex"
                    v-for="(especiality, id) in experience.specialities"
                    :key="id"
                  >
                    <div>
                      <i class="fa-solid fa-circle-notch me-2 text-primary"></i>
                    </div>
                    <span> {{ especiality.name }} </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch me-2 text-primary"></i>
                    </div>
                    <span> Concreto/Armado </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch me-2 text-primary"></i>
                    </div>
                    <span> Instalación de interruptores y tomacorrientes </span>
                  </b-col>
                  <b-col cols="12" md="6" class="d-flex">
                    <div>
                      <i class="fa-solid fa-circle-notch me-2 text-primary"></i>
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
                <span class="profile__info text-warning ms-2"
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
            <hr class="mt-0" />
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
                      @click="deleteLocation(Number(location.id))"
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
                <span class="profile__info text-warning ms-2"
                  ><i class="fa-solid fa-circle-info"></i
                ></span>
              </h4>
              <div
                class="button__action button__action--success"
                @click="showModalAcount = !showModalAcount"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0" />
            <div class="px-0 py-0">
              <b-row
                class="acount__item mx-0 mb-3 py-3"
                v-for="acount in acountsList"
                :key="acount.id"
              >
                <b-col cols="10" class="d-flex align-items-center">
                  <b-form-checkbox size="lg" class="check"></b-form-checkbox>
                  <div class="d-flex flex-wrap center-resp">
                    <div class="acount__image ms-2 mb-2 mb-md-0">
                      <img src="@/assets/img-delete/visa-logo.jpg" alt="" />
                    </div>
                    <h3 class="mb-0 ms-2" for="checkbox-1">
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
      v-model="showModalEditPresentacion"
      title="Editar Presentación"
      size="lg"
      centered
    >
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

            <input
              type="file"
              style="display: none"
              ref="presentationFile"
              hidden
              @change="changeFilePresentation"
            />
            <span class="d-block text-center"
              >Seleccionar la imagen para actualizarla</span
            >
          </b-col>
          <b-col cols="12">
            <hr />
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
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col
            cols="12"
            lg="11"
            class="d-flex justify-content-end w-100 mx-auto"
          >
            <b-button
              variant="secondary"
              @click="showModalEditPresentacion = false"
              class="me-3"
              >Cancelar
            </b-button>
            <b-button
              variant="primary"
              @click="$refs.btnFormPresentation.click()"
              >Guardar</b-button
            >
          </b-col>
        </b-row>
      </template>
    </b-modal>
    <b-modal
      id="modal-galery"
      v-model="showModalGalery"
      title="Editar Galeria"
      size="lg"
      centered
    >
      <b-row class="justify-content-around mx-0">
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
          <input
            type="file"
            ref="galeryFile"
            style="display: none"
            :id="`portadaFile${index}`"
            hidden
            @change="changeFileCover"
          />
        </b-col>
      </b-row>
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12" class="d-flex justify-content-end w-100 mx-auto">
            <b-button
              variant="secondary"
              class="me-3"
              @click="showModalGalery = false"
              >Cancelar
            </b-button>
            <b-button variant="primary">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
    <b-modal
      id="modal-experience"
      ref="modal-experience"
      :title="
        isModalProfessionEdit ? 'Editar Experiencia' : 'Nueva Experiencia'
      "
      size="lg"
      centered
      v-model="showModalExperience"
    >
      <b-form @submit.prevent="editExperience" validated>
        <div class="row mx-0 px-0 px-lg-2">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Profesion:</h6>
            <hr />
            <div class="row mx-0 mt-2">
              <b-col cols="12" lg="4" class="px-0 my-auto mb-3">
                <b-form-select
                  v-model="formProfession.selectedProfession"
                  :options="optionsProfessions"
                  id="input-experience-1"
                ></b-form-select>
              </b-col>
              <b-col cols="12" lg="8" class="mt-3 mx-auto">
                <div class="row mx-0 justify-content-around">
                  <b-col cols="12" md="6" class="mb-5 mb-md-0">
                    <b-col cols="7" md="8" class="mx-auto work__temp">
                      <div class="text-center work__date">Años</div>
                      <div
                        class="work__buttons work__buttons--left aRes"
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
                        class="work__buttons work__buttons--right aAdd"
                        @click="addYear()"
                      >
                        +
                      </div>
                    </b-col>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-col cols="7" md="8" class="mx-auto work__temp">
                      <div class="text-center work__date mes">Meses</div>
                      <div
                        class="work__buttons work__buttons--left mRes"
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
                        oninput="this.value == value.replace(/[^0-9]/g, '')"
                      ></b-form-input>
                      <div
                        class="work__buttons work__buttons--right mAdd"
                        @click="addMonth()"
                      >
                        +
                      </div>
                    </b-col>
                  </b-col>
                </div>
              </b-col>
            </div>
          </b-col>

          <b-col cols="12" lg="11" class="mt-4 mx-auto">
            <h6>Especialidades</h6>
            <hr />
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
        </div>
        <div style="display: none">
          <button type="submit" ref="btnFormExperience"></button>
        </div>
      </b-form>
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col
            cols="12"
            lg="11"
            class="d-flex justify-content-end w-100 mx-auto"
          >
            <b-button
              variant="secondary"
              @click="showModalExperience = false"
              class="me-3"
              >Cancelar
            </b-button>
            <b-button variant="primary" @click="$refs.btnFormExperience.click()"
              >Guardar</b-button
            >
          </b-col>
        </b-row>
      </template>
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
      v-model="showModalLocationEdit"
    >
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col
            cols="12"
            lg="11"
            class="d-flex justify-content-end w-100 mx-auto"
          >
            <b-button
              variant="secondary"
              @click="showModalLocationEdit = false"
              class="me-3"
              >Cancelar
            </b-button>
            <b-button variant="primary" @click="$refs.btnFormLocation.click()"
              >Guardar</b-button
            >
          </b-col>
        </b-row>
      </template>
      <b-form @submit.prevent="editLocation" validated>
        <b-row class="mx-0">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Zona:</h6>
            <hr />
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
            <hr />
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
    <b-modal
      id="modal-acount"
      title="Nueva Cuenta"
      centered
      v-model="showModalAcount"
    >
      <template v-slot:footer>
        <b-row class="mx-0 w-100">
          <b-col cols="12" class="d-flex justify-content-end w-100">
            <b-button
              variant="secondary"
              class="me-3"
              @click="showModalAcount = false"
              >Cancelar
            </b-button>
            <b-button variant="primary" @click="$refs.btnFormAcount.click()"
              >Guardar</b-button
            >
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
  </b-row>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { alertSuccessButton } from "@/utils/SweetAlert";
import { computed, onMounted, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const galleryPhotos = [
  {
    img: "https://picsum.photos/1024/480/?image=52",
    alt: "Photo1",
  },
  {
    img: "https://picsum.photos/1024/480/?image=54",
    alt: "Photo3",
  },
  {
    img: "https://picsum.photos/1024/480/?image=58",
    alt: "Photo3",
  },
];
const settings = ref({ itemsToShow: 1, snapAlign: "center" });
const breakpoints = ref({
  //700px and up
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: "center",
  },
});
const presentationFile = ref<HTMLInputElement>();

const isLoading = ref(true);
const isShowMenuDesk = ref(true);
const isShowMenuResponsive = ref(false);
const showModalEditPresentacion = ref(false);
const showModalGalery = ref(false);
const showModalExperience = ref(false);
const showModalLocationEdit = ref(false);
const showModalAcount = ref(false);
const slide = ref(0);
const sliding = ref(false);
const experiences = ref([
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
]);
const locationsList = ref([
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
]);
const acountsList = ref([
  {
    id: "1",
    value: "XXXX XXXX XXXX 7698",
  },
  {
    id: "2",
    value: "XXXX XXXX XXXX 1569",
  },
]);
const imageSelected = ref(0);
const formPresentation = ref({
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
});
const formGalery = ref({
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
});
const isModalProfessionEdit = ref(true);
const formProfession = ref({
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
    years: 2022,
    months: 12,
  },
});
const optionsProfessions = ref([
  { value: 0, text: "Pintor" },
  { value: 1, text: "Albañil" },
  { value: 3, text: "Carpintero" },
  { value: 4, text: "Lima" },
]);
const isModalLocationEdit = ref(true);
const formLocation = ref({
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
});
const optionsLocation = ref([
  { value: 0, text: "Lima Norte" },
  { value: 1, text: "Lima Sur" },
  { value: 3, text: "Lima Este" },
  { value: 4, text: "Lima Oeste" },
]);
const formAcount = ref({
  selectedAcount: 0,
  numAcount: "",
  cci: "",
});
const optionsAcount = ref([
  { value: 0, text: "Interbank" },
  { value: 1, text: "BCP" },
  { value: 3, text: "Scotiabank" },
  { value: 4, text: "Banbif" },
]);

const section1 = ref(0);
const section2 = ref(0);
const section3 = ref(0);
const section4 = ref(0);
const section5 = ref(0);

onMounted(() => {
  isLoading.value = false;
  const galeryBox: any = document.getElementById("galery__box");
  const experienceBox: any = document.getElementById("experience__box");
  const locationBox: any = document.getElementById("location__box");
  const acountBox: any = document.getElementById("acount__box");

  section2.value = galeryBox.offsetTop - 110;
  section3.value = experienceBox.offsetTop - 110;
  section4.value = locationBox.offsetTop - 10;
  section5.value = acountBox.offsetTop + 40;
  /*this.$nextTick(() => {
    this.section2 = (<HTMLInputElement>document.getElementById("galery__box")).offsetTop - 10;
    this.section3 = (<HTMLInputElement>document.getElementById("experience__box")).offsetTop - 10;
    this.section4 = (<HTMLInputElement>document.getElementById("location__box")).offsetTop - 10;
    this.section5 = (<HTMLInputElement>document.getElementById("acount__box")).offsetTop - 10;
  });*/
});

function showEditPresentacion() {
  showModalEditPresentacion.value = true;
}

function modalProfessionEdit() {
  isModalProfessionEdit.value = true;
  showModalExperience.value = true;
}

function modalProfessionCreate() {
  isModalProfessionEdit.value = false;
  showModalExperience.value = true;
}

function showModalLocation() {
  showModalLocationEdit.value = true;
}

function deleteLocation(id: number) {
  const index = locationsList.value.findIndex(
    (location) => Number(location.id) == id
  );
  locationsList.value.splice(index, 1);
}

function deleteAcount(id: string) {
  const index = acountsList.value.findIndex((acount) => acount.id == id);
  acountsList.value.splice(index, 1);
}

function deleteExperience(id: number) {
  const index = experiences.value.findIndex(
    (experience) => experience.id == id
  );
  experiences.value.splice(index, 1);
}

function onSlideStart() {
  sliding.value = true;
}

function onSlideEnd() {
  sliding.value = false;
}

function goBox(boxName: string) {
  const boxContainer: any = document.getElementById(`${boxName}`);
  const top: number = boxContainer.offsetTop - 110;
  section1.value = top;
  window.scroll({
    top,
    left: 0,
    behavior: "smooth",
  });
}

function addYear() {
  formProfession.value.workExperience.years++;
}

function substractYear() {
  if (formProfession.value.workExperience.years > 0) {
    formProfession.value.workExperience.years--;
  }
}

function addMonth() {
  if (formProfession.value.workExperience.months < 12) {
    formProfession.value.workExperience.months++;
  }
}

function substractMonth() {
  if (formProfession.value.workExperience.months > 0) {
    formProfession.value.workExperience.months--;
  }
}

function uploadImage(index: any) {
  imageSelected.value = index;
  const btnFile: any = document.getElementById(`portadaFile${index}`);
  btnFile.click();
}

function changeFileCover(event: any) {
  const index = imageSelected.value;
  const file: any = event.target.files[0];
  if (!file) {
    formGalery.value.imagesList[index].url = "";
    formGalery.value.imagesList[index].file = null;
    return;
  }
  console.log("changeFileCover");
  formGalery.value.imagesList[index].file = file;
  const fr = new FileReader();
  fr.onload = () =>
    (formGalery.value.imagesList[index].url = String(fr.result));
  fr.readAsDataURL(file);
  event.target.value = ""; // Restablecer valor del input
}

function deleteImage(index: any) {
  formGalery.value.imagesList[index].url = "";
  formGalery.value.imagesList[index].file = null;
}

function uploadPresentationImage() {
  const btnFile = presentationFile.value!;
  btnFile.click();
}

function changeFilePresentation(event: any) {
  const file = event.target.files[0];
  if (!file) {
    formPresentation.value.image.file = null;
    formPresentation.value.image.url = null;
    return;
  }

  formPresentation.value.image.file = file;
  const fr = new FileReader();
  fr.onload = () => (formPresentation.value.image.url = fr.result);
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
  if (!isLoading.value) {
    let footer: any = document.getElementById("footer__limit");
    let footerScrollY: number = Number(footer.offsetTop) - 320;

    if (window.scrollY > 70 && Number(window.scrollY) < footerScrollY) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
});

const isPresentationSection = computed(() => {
  return section1.value < section2.value ? true : false;
});

const isGalerySection = computed(() => {
  return section1.value >= section2.value && section1.value < section3.value
    ? true
    : false;
});
const isExperienceSection = computed(() => {
  return section1.value >= section3.value && section1.value < section4.value
    ? true
    : false;
});
const isLocationSection = computed(() => {
  return section1.value >= section4.value && section1.value < section5.value
    ? true
    : false;
});
const isAcountSection = computed(() => {
  return section1.value >= section5.value ? true : false;
  // if (!isLoading.value) {
  //   let footer: any = document.getElementById("footer__limit");
  //   let footerScrollY: number = Number(footer.offsetTop) - 320;
  //   console.log(footerScrollY);
  //   return section1.value >= section5.value && section1.value < footerScrollY
  //     ? true
  //     : false;
  // } else {
  //   return false;
  // }
});
</script>

<style lang="scss" scoped>
h4 {
  font-size: calc(0.4vw + 16px);
}
h3 {
  font-size: calc(0.4vw + 13px);
}
h1 {
  font-size: calc(0.4vw + 14px) !important;
}
h2 {
  font-size: calc(0.4vw + 11.5px) !important;
}
.profile-specialist__container {
  .profile__menu {
    .menu__container {
      z-index: 3;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
      position: fixed;
      width: 226px;

      hr {
        margin: 0;
      }

      div {
        padding: 10px 0;
        cursor: pointer;
      }

      .text-center:hover {
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
    font-size: calc(0.4vw + 10.4px);

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
        font-size: calc(0.4vw + 12px) !important;
        margin-bottom: 0;
      }
    }
    .acount__item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.342);

      .d-flex {
        display: flex !important;
        align-items: center !important;
      }
      .acount__image {
        width: 55px;
        height: 40px;
        margin: auto 0;

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
    position: relative;
    top: -10px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .work__buttons {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: rgb(145, 145, 145);
    color: white;
    border-radius: 100%;
    display: flex;
    cursor: pointer;
    position: absolute;
    top: 0px;
    bottom: 0px;
    align-items: center;
    justify-content: center;
  }

  .work__buttons:hover {
    background-color: #347bd8;
  }

  .work__buttons--left {
    top: 35.8%;
    margin: 0px -37px;
  }

  .work__buttons--right {
    top: 35.8%;
    margin: 0px 119px;
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
    text-align: center;
  }

  .form-image__file img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
  }

  .form-image__delete {
    position: relative;
    bottom: 195px;
    left: 186px;
    font-size: 24px;
    color: rgb(241, 46, 46);
    border-radius: 100%;
    z-index: 10;
    cursor: pointer;
    width: fit-content;

    i {
      background-color: white;
      border-radius: 100%;
      border: solid white 2px;
    }
  }
}
.menu-active {
  background-color: #3a88ec !important;
  color: white;
}
.modal-footer {
  padding: 1rem 0 0 0 !important;
  margin: 0.5rem -1rem -0.7rem 0 !important;
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
        padding-bottom: 0 !important;

        .ps-2:hover {
          background-color: #3a88ec;
          color: white;
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
    .form-image__delete {
      font-size: 20px;
      bottom: 146px;
      left: 125px;
    }
  }
}

@media (max-width: 767px) {
  #modal-galery {
    .form-image__delete {
      bottom: 145px;
      left: 160px;
    }
  }
  .mRes {
    top: 323px !important;
    left: 140px;
  }
  .mAdd {
    top: 323px !important;
    right: -16px;
  }
  .aRes {
    left: 140px;
    top: 194px !important;
  }
  .aAdd {
    top: 194px !important;
    right: -16px;
  }
}

@media (max-width: 575px) {
  #modal-galery {
    .form-image__delete {
      left: calc(100% - 31px);
    }
  }
  .menu__container {
    top: 54px;
  }
  .acount__image {
    height: 40px !important;
    width: auto !important;
  }

  .acount__item {
    padding: 10px 0 !important;
  }
  .center-resp {
    justify-content: center;
  }
  .form-control-lg {
    padding: 0 0 0 30px !important;
    margin-left: -13px;
  }
  .mRes {
    left: 27vw;
  }
  .mAdd {
    margin-right: 22.5vw !important;
  }
  .aRes {
    left: 27vw;
  }
  .aAdd {
    margin-right: 22.5vw !important;
  }
}

@media (max-width: 462px) {
  .acount__image {
    margin-top: -15px !important;
  }
}

.gallery-item {
  width: 100%;
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
