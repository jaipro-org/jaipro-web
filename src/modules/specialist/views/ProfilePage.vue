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
              <img
                :src="
                  formPresentation.profilePhoto ||
                  require('@/assets/img-delete/profile.jpg')
                "
                alt="imagen user"
              />
            </div>
            <div
              class="button__action button__action--float text-warning"
              @click="showEditPresentacion()"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h4>
              {{ formPresentation.name + " " + formPresentation.lastName }}
              <span class="profile__status ms-2"
                ><i class="fa-solid fa-circle-check"></i> Perfil
                verificado</span
              >
            </h4>
            <hr class="mt-0" />
            <div class="mb-1">Pintor, albañil, Carpintero</div>
            <div>{{ formPresentation.direction }}</div>
            <div>{{ formPresentation.phone }}</div>
            <span class="d-block mt-2"><b>Acerca de ti</b></span>
            <p>
              {{
                verAbout
                  ? formPresentation.about
                  : formPresentation.about.substring(0, aboutLength)
              }}
              <a
                class="vermas"
                @click="verAbout = !verAbout"
                v-if="formPresentation.about.length > aboutLength"
              >
                {{ verAbout ? "Ver menos" : "Ver más" }}</a
              >
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
              <div class="button__action text-warning" @click="showGalery()">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <hr class="mt-0" />
            <div class="py-2">
              <div v-if="loadingModal.gallery">
                <p>Cargando...</p>
              </div>
              <div v-else-if="galleryPhotos.length">
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
                        :src="photo.url"
                        :alt="photo.name"
                      />
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation />
                    <Pagination />
                  </template>
                </Carousel>
              </div>
              <div v-else>
                <p>No hay fotos para mostrar.</p>
              </div>
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
              <div v-if="loadingModal.experience">Cargando datos...</div>
              <div v-else-if="experiences.length === 0">
                <p>No hay datos para mostrar.</p>
              </div>
              <div
                class="experience__item p-3 mb-3"
                v-for="(experience, id) in experiences"
                :key="id"
                v-else
              >
                <b-row class="mx-0">
                  <b-col
                    cols="12"
                    class="px-0 d-flex justify-content-end mb-2 d-block d-md-none"
                  >
                    <div
                      class="button__action text-warning me-2"
                      @click="modalProfessionEdit(experience.id, id)"
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
                        AÑOS EN EL SECTOR: {{ experience.years }} años y
                        {{ experience.months }} meses
                      </h2>
                    </div>
                  </b-col>
                  <b-col
                    cols="2"
                    class="px-0 d-none d-md-flex justify-content-end"
                  >
                    <div
                      class="button__action text-warning me-3"
                      @click="modalProfessionEdit(experience.id, id)"
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
                v-show="locationsList?.length === 4 ? false : true"
                class="button__action button__action--success"
                @click="(isModalLocationEdit = false), showModalLocation(null)"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0" />
            <div>
              <div v-if="loadingModal.workLocation">Cargando datos...</div>
              <div v-else-if="locationsList.length === 0">
                <p>No hay datos para mostrar.</p>
              </div>
              <div class="px-4 py-2" v-else>
                <b-row
                  class="mx-0 locattion__item mb-3"
                  v-for="(location, index) in locationsList"
                  :key="index"
                >
                  <b-col cols="10">
                    <h1 class="locattion__title">
                      <b>{{ location.zona }}:</b> {{ location.value }}
                    </h1>
                  </b-col>
                  <b-col
                    cols="2"
                    class="d-flex justify-content-around flex-wrap"
                  >
                    <div
                      class="button__action text-warning"
                      @click="
                        (isModalLocationEdit = true),
                          showModalLocation(location.id)
                      "
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div class="button__action text-danger">
                      <i
                        class="fa-solid fa-circle-xmark"
                        @click="deleteLocation(index)"
                      ></i>
                    </div>
                  </b-col>
                </b-row>
              </div>
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
                v-if="acountsList.length < 2"
                class="button__action button__action--success"
                @click="showAccount()"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <hr class="mt-0" />
            <div>
              <div v-if="loadingModal.bank">Cargando datos...</div>
              <div v-else-if="acountsList.length === 0">
                <p>No hay datos para mostrar.</p>
              </div>
              <div class="px-0 py-0" v-else>
                <b-row
                  class="acount__item mx-0 mb-3 py-3"
                  v-for="acount in acountsList"
                  :key="acount.id"
                >
                  <b-col cols="10" class="d-flex align-items-center">
                    <b-form-checkbox
                      :id="`${acount.id}`"
                      size="lg"
                      class="check"
                      v-model="acount.preferred"
                      @change="updatePreferredBank(acount.id)"
                    ></b-form-checkbox>
                    <div class="d-flex flex-wrap center-resp">
                      <div class="acount__image ms-2 mb-2 mb-md-0">
                        <img src="@/assets/img-delete/visa-logo.jpg" alt="" />
                      </div>
                      <h3 class="mb-0 ms-2" for="checkbox-1">
                        {{ acount.accountNumber }} ({{ acount.nameBank }})
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
      <b-form>
        <b-row class="justify-content-around px-0 px-lg-2 mx-0">
          <b-col cols="12" lg="8" class="mb-4 mx-auto">
            <div
              class="form-image__file mt-2 mx-auto mb-1"
              :class="!profilePhoto.value.value ? 'form-image__file--aux' : ''"
            >
              <img
                @click="uploadPresentationImage"
                :src="
                  !profilePhoto.value.value
                    ? require('@/assets/img-delete/fileimage-up.png')
                    : profilePhoto.value.value
                "
                alt="image"
              />
              <div
                v-if="profilePhoto.value.value"
                class="deleteImagePresentation"
                @click="deleteImagePhotoPresentation()"
              >
                <i class="fa-solid fa-circle-xmark"></i>
              </div>
            </div>

            <input
              type="file"
              style="display: none"
              ref="presentationFile"
              accept=".png, .jpg"
              hidden
              @change="changeFilePresentation"
            />
            <span class="d-block text-center"
              ><i class="fa-solid fa-info-circle text-primary"></i> Seleccionar
              la imagen para actualizarla</span
            >
          </b-col>
          <b-form-invalid-feedback :state="profilePhoto.errorMessage.value">
            {{ profilePhoto.errorMessage.value }}
          </b-form-invalid-feedback>
          <b-col cols="12">
            <hr />
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Nombres" label-for="input-pres-1">
              <b-form-input
                v-model="name.value.value"
                :state="
                  validate(
                    currentPresentation.name,
                    name.value.value,
                    name.errorMessage.value
                  )
                "
                id="input-pres-1"
                placeholder="Ingrese su nombre"
                class="rounded-pill"
              ></b-form-input>
              <b-form-invalid-feedback :state="name.errorMessage.value">
                {{ name.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Apellidos" label-for="input-pres-2">
              <b-form-input
                id="input-pres-2"
                v-model="lastName.value.value"
                :state="
                  validate(
                    currentPresentation.lastName,
                    lastName.value.value,
                    lastName.errorMessage.value
                  )
                "
                placeholder="Ingrese su apellido"
                class="rounded-pill"
              ></b-form-input>
              <b-form-invalid-feedback :state="lastName.errorMessage.value">
                {{ lastName.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="11" class="mb-3">
            <b-form-group label="Acerca de mi" label-for="input-pres-3">
              <b-form-textarea
                id="input-pres-3"
                v-model="about.value.value"
                :state="
                  validate(
                    currentPresentation.about,
                    about.value.value,
                    about.errorMessage.value
                  )
                "
                placeholder="Redacta acerca de tu experiencia"
                rows="4"
                max-rows="6"
                :style="{ height: '230px' }"
                class="rounded-right rounded-left"
              ></b-form-textarea>
              <b-form-invalid-feedback :state="about.errorMessage.value">
                {{ about.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="11" class="mb-3">
            <b-form-group label="Dirección" label-for="input-pres-4">
              <b-form-input
                id="input-pres-4"
                v-model="direction.value.value"
                :state="
                  validate(
                    currentPresentation.direction,
                    direction.value.value,
                    direction.errorMessage.value
                  )
                "
                placeholder="Ingrese su dirección"
                class="rounded-pill"
              ></b-form-input>
              <b-form-invalid-feedback :state="direction.errorMessage.value">
                {{ direction.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Teléfono Principal" label-for="input-pres-5">
              <b-form-input
                id="input-pres-5"
                v-model="phone.value.value"
                :state="
                  validate(
                    currentPresentation.phone,
                    phone.value.value,
                    phone.errorMessage.value
                  )
                "
                placeholder="Ingrese su teléfono"
                class="rounded-pill"
                oninput="this.value = value.replace(/[^0-9]/g, '')"
              ></b-form-input>
              <b-form-invalid-feedback :state="phone.errorMessage.value">
                {{ phone.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="5" class="mb-3">
            <b-form-group label="Teléfono Secundario" label-for="input-pres-6">
              <b-form-input
                id="input-pres-6"
                v-model="secondPhone.value.value"
                :state="
                  validate(
                    currentPresentation.secondPhone,
                    secondPhone.value.value,
                    secondPhone.errorMessage.value
                  )
                "
                placeholder="Ingrese su teléfono secundario"
                class="rounded-pill"
                oninput="this.value = value.replace(/[^0-9]/g, '')"
              ></b-form-input>
              <b-form-invalid-feedback :state="secondPhone.errorMessage.value">
                {{ secondPhone.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
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
            <b-button variant="primary" @click="editPresentation()"
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
          v-for="(image, index) in formGalery?.imagesList"
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
        <b-form-invalid-feedback :state="imagesList.errorMessage.value">
          {{ imagesList.errorMessage.value }}
        </b-form-invalid-feedback>
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
            <b-button variant="primary" @click="editGallery()"
              >Guardar</b-button
            >
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
      <b-form>
        <div class="row mx-0 px-0 px-lg-2">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Profesion:</h6>
            <hr />
            <div class="row mx-0 mt-2">
              <b-col cols="12" lg="4" class="px-0 my-auto mb-3">
                <b-form-select
                  v-model="idProfession.value.value"
                  :state="
                    validateState(
                      idProfession.value.value,
                      idProfession.errorMessage.value
                    )
                  "
                  @input="filterForProfession(idProfession.value.value)"
                  :options="listProfessions"
                  id="input-experience-1"
                >
                  <option disabled selected hidden value="">Seleccione</option>
                </b-form-select>
                <b-form-invalid-feedback
                  :state="idProfession.errorMessage.value"
                >
                  {{ idProfession.errorMessage.value }}
                </b-form-invalid-feedback>
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
                        v-model="workExperience.years"
                        :state="
                          validateState(
                            expProfession.value.value?.años,
                            expProfession.errorMessage.value
                          )
                        "
                        placeholder="0"
                        class="rounded-pill text-center"
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
                        v-model="workExperience.months"
                        :state="
                          validateState(
                            expProfession.value.value?.meses,
                            expProfession.errorMessage.value
                          )
                        "
                        placeholder="0"
                        class="rounded-pill text-center"
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
                <b-form-invalid-feedback
                  :state="expProfession.errorMessage.value"
                >
                  {{ expProfession.errorMessage.value }}
                </b-form-invalid-feedback>
              </b-col>
            </div>
          </b-col>

          <b-col
            cols="12"
            lg="11"
            class="mt-4 mx-auto"
            v-show="specialistForProfession.length > 0"
          >
            <h6>Especialidades</h6>
            <hr />
            <b-row class="mx-0 justify-content-around">
              <b-col
                cols="12"
                lg="6"
                class="mb-3 mb-lg-2"
                v-for="(specialty, index) in specialistForProfession"
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
              <b-form-invalid-feedback :state="countEspBoolean">
                Selecciona una especialidad como minimo
              </b-form-invalid-feedback>
            </b-row>
          </b-col>
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
            <b-button variant="primary" @click="editExperience()"
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
            <b-button variant="primary" @click="editLocation()"
              >Guardar</b-button
            >
          </b-col>
        </b-row>
      </template>
      <b-form>
        <b-row class="mx-0">
          <b-col cols="12" lg="11" class="mx-auto">
            <h6>Zona:</h6>
            <hr />
            <b-row class="mx-0 mt-2">
              <b-col cols="12" lg="5" class="px-0">
                <b-form-select
                  v-model="zona.value.value"
                  :options="optionsLocation"
                  @input="filterForZone(zona.value.value)"
                  id="input-location-1"
                  :state="
                    validateState(zona.value.value, zona.errorMessage.value)
                  "
                >
                  <option disabled selected hidden value="">Seleccione</option>
                </b-form-select>
                <b-form-invalid-feedback :state="zona.errorMessage.value">
                  {{ zona.errorMessage.value }}
                </b-form-invalid-feedback>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            cols="12"
            lg="11"
            class="mt-5 mx-auto"
            v-show="districtForZone.length > 0"
          >
            <h6>Distritos disponibles</h6>
            <hr />
            <b-row class="mx-0 justify-content-around">
              <b-col
                cols="12"
                lg="6"
                class="mb-3 mb-lg-2"
                v-for="(district, index) in districtForZone"
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
            <b-form-invalid-feedback :state="groupLocation.errorMessage.value">
              {{ groupLocation.errorMessage.value }}
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
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
            <b-button variant="primary" @click="editAcount()">Guardar</b-button>
          </b-col>
        </b-row>
      </template>
      <b-form>
        <b-row class="mx-0 justify-content-around">
          <b-col cols="12" class="mb-3">
            <b-form-group label="Banco:" label-for="input-acount-1">
              <b-form-select
                v-model="bankId.value.value"
                :state="
                  validateState(bankId.value.value, bankId.errorMessage.value)
                "
                :options="optionsAcount"
                id="input-acount-1"
                class="rounded-pill"
              >
                <option disabled selected hidden value="">Seleccione</option>
              </b-form-select>
              <b-form-invalid-feedback :state="bankId.errorMessage.value">
                {{ bankId.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" class="mb-3">
            <b-form-group label="Número de cuenta:" label-for="input-acount-2">
              <b-form-input
                v-model="accountNumber.value.value"
                :state="
                  validateState(
                    accountNumber.value.value,
                    accountNumber.errorMessage.value
                  )
                "
                id="input-pres-2"
                placeholder="Ingrese su número de cuenta"
                class="rounded-pill"
              ></b-form-input>
              <b-form-invalid-feedback
                :state="accountNumber.errorMessage.value"
              >
                {{ accountNumber.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="CCI:" label-for="input-pres-2">
              <b-form-input
                v-model="cci.value.value"
                :state="validateState(cci.value.value, cci.errorMessage.value)"
                id="input-pres-2"
                placeholder="Ingrese su CCI"
                class="rounded-pill"
              ></b-form-input>
              <b-form-invalid-feedback :state="cci.errorMessage.value">
                {{ cci.errorMessage.value }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </b-row>
</template>

<script setup lang="ts">
import { encryptAuthStorage } from "@/utils/Storage";
import "vue3-carousel/dist/carousel.css";
import {
  alertSuccessButton,
  alertLoading,
  alertError,
} from "@/utils/SweetAlert";
import { computed, onMounted, ref, watch } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { SpecialistServices } from "@/services/api/specialistProfileServices";
import { GeneralServices } from "@/services/api/generalServices";
import { validateState } from "@/validate/globalValidate";
import useProfileSpecialistValidate from "@/validate/profileSpecialistValidate";
import { object } from "yup";

const authData: string = window.localStorage.getItem("@AUTH:security") || "";

const specialistServices = new SpecialistServices();
const generalServices = new GeneralServices();

const {
  profilePhoto,
  name,
  lastName,
  about,
  direction,
  phone,
  secondPhone,
  imagesList,
  idProfession,
  groupSpecialist,
  expProfession,
  zona,
  groupLocation,
  bankId,
  accountNumber,
  cci,
  validateProfile,
  validateGallery,
  validateExperience,
  validateWorkLocation,
  validateAccount,
  inputValidate,
  inputReset,
} = useProfileSpecialistValidate();

const verAbout = ref(false);
const aboutLength = ref(420);
interface galleryShow {
  url: string;
  name: string;
}
const galleryPhotos = ref<Array<galleryShow>>([]);
const imgExtensions: string = process.env.VUE_APP_IMG_EXTENSIONS;
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
const idEspecialist = ref("");
const isLoading = ref(true);
const isShowMenuDesk = ref(true);
const isShowMenuResponsive = ref(false);
const showModalEditPresentacion = ref(false);
const showModalGalery = ref(false);
const showModalExperience = ref(false);
const showModalLocationEdit = ref(false);
const showModalAcount = ref(false);

const loadingModal = ref({
  gallery: true,
  experience: true,
  bank: true,
  workLocation: true,
});
const sliding = ref(false);
const experiences = ref<Array<forExperiences>>([]);
interface forExperiences {
  id: number;
  months: number;
  specialities: Array<forSpecialities>;
  title: string;
  years: number;
}
interface forSpecialities {
  id: number;
  name: string;
}

const imageSelected = ref(0);
const currentPresentation = ref({
  name: "",
  lastName: "",
  about: "",
  direction: "",
  phone: "",
  secondPhone: "",
});
const formPresentation = ref({
  profilePhoto: "",
  name: "",
  lastName: "",
  about: "",
  direction: "",
  phone: "",
  secondPhone: "",
  cv: {
    experienceTimes: [],
  },
});
interface gallery {
  imagesList: Array<{
    id: number;
    url: string;
  }>;
}
const formGalery = ref<gallery>({ imagesList: [] });
const imgGaleryRemove = ref<Array<string>>([]);
//activa el titulo Editar Experiencia
const isModalProfessionEdit = ref(false);
const workExperience = ref({
  years: 0,
  months: 0,
});
//Lista de todas las profesiones
const AllProfessions = ref();
//Lista de las profesiones a mostrar
const listProfessions = ref();
interface forSpecialist {
  active: boolean;
  id: number;
  name: string;
  professionId: number;
}
//Todas las especialidades
const specialization = ref();
const listSpecialist = ref();
//id Index para editar experiencia
const indexExperience = ref();
//Especialidades filtradas por profesion
const specialistForProfession = ref<Array<forSpecialist>>([]);
//Especialidades filtrados no modificables
const specialistForProfessionOld = ref();
//Especialidades con active=true para ser enviado
const specialistTrueForAdd = ref();
//Especialidades con active=false para ser enviado
const specialistFalseForAdd = ref();
//activa el titulo editar locaciones de trabajo
const isModalLocationEdit = ref(true);
//locaciones de trabajo del especialista
const listWorkLocation = ref();
//Lista de cuentas bancarias del especialista
const acountsList = ref<Array<AccountList>>([]);
interface AccountList {
  id: string;
  accountNumber: string;
  preferred: boolean;
  bankId: number;
  cci: string;
  specialistId: string;
  nameBank: string;
}
//datos para enviar a NEW_ACCOUNT_SPECIALIST
const formAcount = ref({
  accountNumber: "",
  cci: "",
  currency: 1,
  preferred: false,
  specialistId: idEspecialist.value,
  bankId: 1,
});
//Lista de Locaciones de trabajo del especialista
const locationsList = ref<Array<LocationWork>>([]);
interface LocationWork {
  id: number;
  value: string;
  zona: string;
  groupID: Array<number>;
}
//Lista de todos los distritos
const districtList = ref();
//Distritos filtrados por zona
const districtForZone = ref<Array<LocationActiveForZone>>([]);
interface LocationActiveForZone {
  active: boolean;
  id: number;
  name: string;
  zone: number;
}
//Distritos filtrados no modificables
const districtForZoneOld = ref();
//Distritos con active=true para ser enviado
const districtTrueForAdd = ref();
//Distritos con active=false para ser eliminado
const districtFalseForAdd = ref();
//Modelo de referencia para las zonas a mostrar
const optionsLocationModel = ref([
  { value: 1, text: "Lima Norte" },
  { value: 2, text: "Lima Sur" },
  { value: 3, text: "Lima Este" },
  { value: 4, text: "Lima Oeste" },
]);
//Lista de las zonas a mostrar
const optionsLocation = ref();
//Lista de los bancos - Account
const optionsAcount = ref();
//Lista de los bancos copiaSeguridad
const currentOptionsAcount = ref();

const section1 = ref(0);
const section2 = ref(0);
const section3 = ref(0);
const section4 = ref(0);
const section5 = ref(0);

//GH
const flagUpdate = ref(false);
const extension = ref("");
//Contador especialidades registradas por profesion
const countEsp = ref(0);
//true si el contador es mayor a cero y false si es lo contrario
const countEspBoolean = ref(false);

//funcion para filtrar distritos por zona
function filterForZone(idZone: number) {
  let copiaDistrict = JSON.parse(JSON.stringify(districtList.value));
  districtForZone.value = copiaDistrict.filter(
    (data: any) => data.zone == idZone
  );
  districtForZoneOld.value = JSON.parse(JSON.stringify(districtForZone.value));
}
//funcion para filtrar especialidades por profesion
function filterForProfession(idProfession: number) {
  let copiaSpecialist = JSON.parse(JSON.stringify(listSpecialist.value));
  specialistForProfession.value = copiaSpecialist.filter(
    (data: any) => data.professionId == idProfession
  );
  specialistForProfessionOld.value = JSON.parse(
    JSON.stringify(specialistForProfession.value)
  );
}

//Observador true or false en districtForZone
watch(
  () => districtForZone.value,
  () => {
    var newa = districtForZone.value;
    var old = districtForZoneOld.value;
    let trueChanges = [];
    let falseChanges = [];
    if (old && newa) {
      for (let i = 0; i < old.length; i++) {
        const originalActive = old[i]?.active;
        const changedActive = newa[i]?.active;
        if (originalActive && !changedActive) {
          falseChanges.push(newa[i]);
        } else if (!originalActive && changedActive) {
          trueChanges.push(newa[i]);
        }
      }
      groupLocation.value.value = {
        objetosAAgregar: trueChanges,
        objetosAEliminar: falseChanges,
      };
      districtTrueForAdd.value = trueChanges;
      districtFalseForAdd.value = falseChanges;
    }
  },
  {
    deep: true,
  }
);
//Observador true or false en specialistForProfession
watch(
  () => specialistForProfession.value,
  () => {
    var newa = specialistForProfession.value;
    var old = specialistForProfessionOld.value;
    let trueChanges = [];
    let falseChanges = [];
    if (old && newa) {
      for (let i = 0; i < old.length; i++) {
        const originalActive = old[i]?.active;
        const changedActive = newa[i]?.active;
        if (originalActive && !changedActive) {
          falseChanges.push(newa[i]);
        } else if (!originalActive && changedActive) {
          trueChanges.push(newa[i]);
        }
      }
      groupSpecialist.value.value = {
        objetosAAgregar: trueChanges,
        objetosAEliminar: falseChanges,
      };
      specialistTrueForAdd.value = trueChanges;
      specialistFalseForAdd.value = falseChanges;
    }
  },
  {
    deep: true,
  }
);

//Observador meses y años Experiencia
watch(
  () => groupSpecialist.value.value,
  () => {
    const a = groupSpecialist.value.value?.objetosAAgregar.length || 0;
    const b = groupSpecialist.value.value?.objetosAEliminar.length || 0;
    const count = countEsp.value + a - b;
    debugger;
    if (!count) {
      countEspBoolean.value = false;
    } else {
      countEspBoolean.value = true;
    }
  },
  {
    deep: true,
  }
);

//Observador meses y años Experiencia
watch(
  () => workExperience.value,
  () => {
    expProfession.value.value = {
      años: workExperience.value.years,
      meses: workExperience.value.months,
    };
  },
  {
    deep: true,
  }
);

function validate(current: any, value: any, error: any) {
  if (current === value) {
    return null;
  } else {
    return validateState(value, error);
  }
}

onMounted(async () => {
  if (Boolean(authData)) {
    let data = encryptAuthStorage.decryptValue(authData);
    idEspecialist.value = data.id;
  }
  isLoading.value = false;
  const galeryBox: any = document.getElementById("galery__box");
  const experienceBox: any = document.getElementById("experience__box");
  const locationBox: any = document.getElementById("location__box");
  const acountBox: any = document.getElementById("acount__box");
  section2.value = galeryBox.offsetTop - 110;
  section3.value = experienceBox.offsetTop - 110;
  section4.value = locationBox.offsetTop - 10;
  section5.value = acountBox.offsetTop + 40;
  await Promise.all([
    fetchEspecialidades(), // obtiene todas las especializaciones
    fetchProfession(), // obtiene todas las profesiones
    fetchDistrict(), // obtiene todos los distritos
    fetchListNameBank(), //obtiene nombre de los bancos
  ]);
  await fetchDataSpecialist(); // obtiene datos personales del especialista
  await fetchSpecialization(); // obtiene especialidades del especialista
  await FormatoExperiencia(); // Procesa Experiencia para Front
  await fetchWorkLocation(); // Procesa WorkLocation para Front
  await fetchAccountBank(); // Procesa AccountBank para Front
});

//CARGAR Profesiones
async function fetchProfession() {
  let dataProfession = await generalServices.getProfessionList(); //Obtiene lista de las profesiones
  AllProfessions.value = dataProfession.map((data: any) => {
    return {
      value: data.id,
      text: data.name,
    };
  });
}
//CARGAR Especialidades
async function fetchEspecialidades() {
  let dataSpecialist = await generalServices.getSpecializationList(); //Obtiene lista de las especialidades
  listSpecialist.value = dataSpecialist.map((data: any) => {
    return {
      id: data.id,
      name: data.name,
      active: false,
      professionId: data.professionId,
    };
  });
}
//CARGAR Distritos
async function fetchDistrict() {
  let dataDistrictList = await generalServices.getDistrictList(); //Obtiene lista de los Distritos
  districtList.value = dataDistrictList.map((data: any) => {
    return {
      id: data.id,
      name: data.name,
      active: false,
      zone: data.zone,
    };
  });
}
//CARGAR Nombres de los bancos
async function fetchListNameBank() {
  let dataBank = await generalServices.getBank(); //Obtiene lista de los bancos
  let listBank = dataBank.map((data: any) => {
    return {
      value: data.id,
      text: data.name,
    };
  });
  currentOptionsAcount.value = [...listBank];
}
//CARGAR Datos del especialista
async function fetchDataSpecialist() {
  const data = await specialistServices.getDataSpecialist(idEspecialist.value);

  const photo = data.cv.gallery || [];
  galleryPhotos.value = [...photo];

  const photoAccount = data.cv.profilePhoto
    ? data.cv.profilePhoto?.url + `?v=${new Date()}`
    : "";

  formPresentation.value = {
    name: data.specialist.name,
    lastName: data.specialist.lastName,
    about: data.cv.about || "No tienes datos sobre ti, agregalos...",
    direction: data.specialist.address,
    phone: data.specialist.phone,
    secondPhone: data.specialist.secondaryPhone,
    profilePhoto: photoAccount,
    cv: data.cv,
  };
  currentPresentation.value = {
    name: data.specialist.name,
    lastName: data.specialist.lastName,
    about: data.cv.about,
    direction: data.specialist.address,
    phone: data.specialist.phone,
    secondPhone: data.specialist.secondaryPhone,
  };

  localStorage.setItem("photoAccount", photoAccount);

  window.dispatchEvent(
    new CustomEvent("photoAccount-localstorage-changed", {
      detail: {
        storage: localStorage.getItem("photoAccount"),
      },
    })
  );
  cargarGallery();
}

function cargarGallery() {
  const currentGalery = galleryPhotos.value;
  formGalery.value = {
    imagesList: [
      {
        id: 0,
        url: currentGalery[0] ? currentGalery[0].url : "",
      },
      {
        id: 1,
        url: currentGalery[1] ? currentGalery[1].url : "",
      },
      {
        id: 2,
        url: currentGalery[2] ? currentGalery[2].url : "",
      },
      {
        id: 3,
        url: currentGalery[3] ? currentGalery[3].url : "",
      },
      {
        id: 4,
        url: currentGalery[4] ? currentGalery[4].url : "",
      },
      {
        id: 5,
        url: currentGalery[5] ? currentGalery[5].url : "",
      },
    ],
  };
  loadingModal.value.gallery = false;
}

//CARGAR Experiencia del especialista
async function fetchSpecialization() {
  specialization.value = await specialistServices.getSpecialization(
    idEspecialist.value
  );

  listSpecialist.value.forEach((ele: any) => {
    ele.active = false;
  });
  // establece true a las especialidades registradas en el especialista
  specialization.value.forEach((item1: any) => {
    const item2 = listSpecialist.value.find(
      (item: any) => item.id === item1.specializationId
    );
    if (item2) {
      item2.active = true;
    }
  });
}
async function FormatoExperiencia() {
  let value = formPresentation.value.cv.experienceTimes.map((x: any) => {
    return {
      id: x.professionId,
      title: x.professionName,
      years: Math.floor(x.time / 12),
      months: x.time % 12,
      specialities: [],
    };
  });

  const resultado = value.map((obj: any) => {
    const profesionEspecialidad = specialization.value.filter(
      (item: any) => item.professionId === obj.id
    );
    const specialities = listSpecialist.value
      .filter((especialidad: any) =>
        profesionEspecialidad.some(
          (a: any) => a.specializationId === especialidad.id
        )
      )
      .map(({ id, name }: any) => ({ id, name }));
    return {
      ...obj,
      specialities,
    };
  });
  experiences.value = resultado;
  loadingModal.value.experience = false;
}
//CARGAR Localizaciones de trabajo
async function fetchWorkLocation() {
  //localizaciones en crudo.
  listWorkLocation.value = await specialistServices.getWorkLocation(
    idEspecialist.value
  );
  const idsSet = new Set(
    listWorkLocation.value.map((obj: any) => obj.districtId)
  );
  districtList.value.forEach((obj: any) => {
    if (idsSet.has(obj.id)) {
      obj.active = true;
    }
  });
  //lista de todas las localizaciones anteriormente cargadas de la BD
  let listDistricSpecialist = districtList.value.filter((data: any) =>
    listWorkLocation.value.some((dwork: any) => dwork.districtId === data.id)
  );
  //formateo de datos para mostrarse en localizaciones de trabajo
  const objetosPorZona = listDistricSpecialist.reduce(
    (acumulador: any, objeto: any) => {
      const zona: any = optionsLocationModel.value.find(
        (zona: any) => zona.value === objeto.zone
      );
      if (!acumulador[zona.value]) {
        acumulador[zona.value] = {
          groupID: [],
          value: "",
          zona: zona.text,
          id: zona.value,
        };
      }
      acumulador[zona.value].groupID.push(objeto.id);
      acumulador[zona.value].value += `${objeto.name}, `;
      return acumulador;
    },
    []
  );
  const nuevosObjetos = Object.values(objetosPorZona).map((obj: any) => {
    obj.value = obj.value.slice(0, -2); // Eliminar la última coma
    return obj;
  });
  locationsList.value = nuevosObjetos;
  loadingModal.value.workLocation = false;
}
//CARGAR Cuentas bancarias Especialista
async function fetchAccountBank() {
  let dataBank = await specialistServices.getBankAccount(idEspecialist.value);
  dataBank.reverse();

  acountsList.value = dataBank.map((data: any) => {
    const name = currentOptionsAcount.value.filter(
      (obj: any) => obj.value === data.bankId
    );
    return {
      id: data.id,
      accountNumber: data.accountNumber,
      preferred: data.preferred,
      cci: data.cci,
      bankId: data.bankId,
      specialistId: data.specialistId,
      nameBank: name[0].text,
    };
  });
  let bancosRegistrados = acountsList.value.map((obj: any) => obj.bankId);
  let bancosDisponibles = currentOptionsAcount.value.filter(
    (obj: any) => !bancosRegistrados.includes(obj.value)
  );
  optionsAcount.value = bancosDisponibles;
  loadingModal.value.bank = false;
}

//ENVIAR DATOS PERFIL
async function editPresentation() {
  const fields = {
    name: name.value.value,
    lastName: lastName.value.value,
    about: about.value.value,
    direction: direction.value.value,
    phone: phone.value.value,
    secondPhone: secondPhone.value.value,
    profilePhoto: profilePhoto.value.value,
  };

  const isValid = await validateProfile(fields);
  if (!isValid) inputValidate();
  if (isValid) {
    const payload = {
      name: fields.name,
      lastName: fields.lastName,
      ...(fields.about !== currentPresentation.value.about && {
        about: fields.about,
      }),
      address: fields.direction,
      phone: fields.phone,
      secondaryPhone: fields.secondPhone === "" ? null : fields.secondPhone,
      ...(flagUpdate.value && {
        filePhoto: fields.profilePhoto.split(",")[1] || "",
        filePhotoExtension: extension.value,
        flagUpdatePhoto: flagUpdate.value,
      }),
    };
    try {
      alertLoading("Actualizando...");
      await specialistServices.putPresentation(idEspecialist.value, payload);
      await fetchDataSpecialist();
      showModalEditPresentacion.value = false;
      alertSuccessButton("Datos actualizados...");
    } catch (error: any) {
      showModalEditPresentacion.value = false;
      alertError(error.response.data.message);
    }
  }
}
//ENVIAR GALERIA
async function editGallery() {
  const fields = {
    imagesList: imagesList.value.value,
  };

  const imagesRemove = galleryPhotos.value
    .filter(
      (modifiedObj) =>
        !formGalery.value.imagesList.some(
          (currentObj) => currentObj.url === modifiedObj.url
        )
    )
    .map((obj) => obj.url);

  if (fields.imagesList) {
    const inputFile: File[] = fields.imagesList
      .filter((data: any) => data.url !== "")
      .map((data: any) => data.file)
      .filter((file: File | undefined) => file !== undefined);

    const payload = {
      specialistGallery: {
        specialistId: idEspecialist.value,
        fileIdsToRemove: imagesRemove,
      },
      images: inputFile,
    };

    try {
      alertLoading("Guardando...");
      const data = await specialistServices.postGallery(payload);
      galleryPhotos.value = [...data.gallery];
      cargarGallery();
      showModalGalery.value = false;
      alertSuccessButton("Se realizo la operación exitosamente");
    } catch (error) {
      showModalGalery.value = false;
      alertSuccessButton("fallo algo");
    }
  } else {
    try {
      alertLoading("Guardando...");
      for (const data of imagesRemove) {
        let url = data.split("/");
        let image = url[url.length - 1];
        await specialistServices.deleteGallery(idEspecialist.value, image);
      }
      await fetchDataSpecialist();
      showModalGalery.value = false;
      alertSuccessButton("Se realizo la operación exitosamente");
    } catch (error) {
      showModalGalery.value = false;
      alertSuccessButton("fallo algo");
    }
  }
  imagesList.resetField();
}
//ENVIAR EXPERIENCIA
async function editExperience() {
  const fields = {
    idProfession: idProfession.value.value,
    groupSpecialist: groupSpecialist.value.value,
    expProfession: expProfession.value.value,
  };
  let experienceTime = {
    professionId: fields.idProfession,
    professionName: listProfessions.value.find(
      (obj: any) => obj.value === fields.idProfession
    ).text,
    time: fields.expProfession.años * 12 + fields.expProfession.meses,
  };

  const isValid = await validateExperience(fields);

  if (!isValid) inputValidate();

  if (isModalProfessionEdit.value) {
    let updateProfession = {
      index: indexExperience.value,
      professionId: experienceTime.professionId,
      time: experienceTime.time,
    };
    let oldTimeExp: any =
      formPresentation.value.cv.experienceTimes[indexExperience.value];
    let specializationsToAdd = fields.groupSpecialist.objetosAAgregar.map(
      (x: any) => {
        return {
          specializationId: x.id,
          professionId: fields.idProfession,
          specialistId: idEspecialist.value,
        };
      }
    );
    let specializationsToDelete = fields.groupSpecialist.objetosAEliminar.map(
      (x: any) => {
        return {
          specializationId: x.id,
          professionId: fields.idProfession,
          specialistId: idEspecialist.value,
        };
      }
    );
    try {
      const count =
        countEsp.value +
        specializationsToAdd.length -
        specializationsToDelete.length;
      if (count > 0) {
        if (
          oldTimeExp.time !== updateProfession.time ||
          specializationsToAdd.length > 0 ||
          specializationsToDelete.length > 0
        ) {
          alertLoading("Guardando...");
          if (oldTimeExp.time !== updateProfession.time) {
            await specialistServices.putExperienceTime(
              idEspecialist.value,
              updateProfession
            );
          }
          if (specializationsToAdd.length > 0) {
            await specialistServices.postExperience(specializationsToAdd);
          }
          if (specializationsToDelete.length > 0) {
            await specialistServices.deleteSpecializations(
              specializationsToDelete
            );
          }
          await fetchDataSpecialist(); // obtiene datos personales del especialista
          await fetchSpecialization(); // obtiene especialidades del especialista
          await FormatoExperiencia(); // Procesa Experiencia para Front
          showModalExperience.value = false;
          alertSuccessButton("Se realizo la operación exitosamente");
        }
      }
    } catch (error: any) {
      showModalExperience.value = false;
      alertError(error.response.data.message);
    }
  }
  if (isValid && !isModalProfessionEdit.value) {
    let value = fields.groupSpecialist.objetosAAgregar.map((x: any) => {
      return {
        specializationId: x.id,
        professionId: fields.idProfession,
        specialistId: idEspecialist.value,
      };
    });

    try {
      alertLoading("Guardando...");
      await Promise.all([
        specialistServices.postExperience(value),
        specialistServices.postExperienceTime(
          idEspecialist.value,
          experienceTime
        ),
      ]);
      await fetchDataSpecialist(); // obtiene datos personales del especialista
      await fetchSpecialization(); // obtiene especialidades del especialista
      await FormatoExperiencia(); // Procesa Experiencia para Front
      showModalExperience.value = false;
      alertSuccessButton("Se realizo la operación exitosamente");
    } catch (error) {
      showModalExperience.value = false;
      alertSuccessButton("fallo algo");
    }
  }
}
//ENVIAR Locaciones de Trabajo
async function editLocation() {
  const fields = {
    zona: zona.value.value,
    groupLocation: groupLocation.value.value,
  };
  const isValid = await validateWorkLocation(fields);
  if (!isValid) {
    inputValidate();
  }

  let numAdd = districtTrueForAdd.value.length;
  let numDel = districtFalseForAdd.value.length;
  if (isValid) {
    if (numAdd > 0 || numDel > 0) {
      alertLoading("Guardando...");
      if (numAdd) {
        console.log("Agregando...");
        for (const district of districtTrueForAdd.value) {
          try {
            let data = {
              specialistId: idEspecialist.value,
              districtId: district.id,
              countryId: "PER",
            };
            await specialistServices.postWorkLocation(data);
          } catch (error: any) {
            console.error(error.response.data.message);
          }
        }
      }
      if (numDel) {
        console.log("Eliminando...");
        try {
          for (const district of districtFalseForAdd.value) {
            await specialistServices.deleteWorkLocation(
              idEspecialist.value,
              district.id
            );
          }
        } catch (error: any) {
          console.error(error.response.data.message);
        }
      }
      await fetchDistrict();
      await fetchWorkLocation();
      showModalLocationEdit.value = false;
      alertSuccessButton("Se realizo la operación exitosamente");
    }
  }
}
//ENVIAR Cuentas bancarias Especialista
async function editAcount() {
  const dataBank = await specialistServices.getBankAccount(idEspecialist.value);
  const fields = {
    bankId: bankId.value.value,
    accountNumber: accountNumber.value.value,
    cci: cci.value.value,
    specialistId: idEspecialist.value,
  };
  const isValid = await validateAccount(fields);
  if (!isValid) inputValidate();

  if (isValid) {
    formAcount.value = { ...formAcount.value, ...fields };
    const value = formAcount.value;
    if (dataBank.length < 2) {
      try {
        alertLoading("Guardando...");
        await specialistServices.postBankAccount(value);
        await fetchAccountBank();
        showModalAcount.value = false;
        alertSuccessButton("Se realizo la operación exitosamente");
      } catch (error: any) {
        showModalAcount.value = true;
        alertError(error.response.data.message);
      }
    } else {
      showModalAcount.value = false;
      alertError("Solo puedes registrar 2 cuentas");
    }
  }
}

//#region PUT - UPDATE
//ACTUALIZAR ACCOUNT-BANK => PREFERRED
async function updatePreferredBank(id: string) {
  let newDato = acountsList.value.filter((data: any) => data.id === id);
  let oldDato = acountsList.value.filter(
    (data: any) => data.id !== id && data.preferred === true
  );
  try {
    if (oldDato.length > 0) {
      oldDato[0].preferred = false;
      await specialistServices.putBankAccount(oldDato[0]);
    }
    await specialistServices.putBankAccount(newDato[0]);
    await fetchAccountBank();
  } catch (error) {
    throw error;
  }
}
//#endregion

//Muestra Modal WORK-LOCATION
function showModalLocation(idLocation: number | null) {
  inputReset();
  if (idLocation) {
    optionsLocation.value = optionsLocationModel.value.filter(
      (data: any) => data.value == idLocation
    );
    setTimeout(() => {
      zona.value.value = idLocation;
      filterForZone(idLocation);
    }, 10);
  } else {
    let filterZone = optionsLocationModel.value.filter(
      (data: any) =>
        !locationsList.value.some((value: any) => value.id == data.value)
    );
    optionsLocation.value = filterZone;
  }
  showModalLocationEdit.value = true;
  districtForZone.value = [];
}
//Muestra Modal ACCOUNT-BANK
function showAccount() {
  showModalAcount.value = true;
  inputReset();
}

function showEditPresentacion() {
  showModalEditPresentacion.value = true;
  const data = formPresentation.value;

  flagUpdate.value = false;
  extension.value = "";

  data.name && (name.value.value = data.name);
  data.lastName && (lastName.value.value = data.lastName);
  data.about && (about.value.value = data.about);
  data.direction && (direction.value.value = data.direction);
  data.phone && (phone.value.value = data.phone);
  data.secondPhone && (secondPhone.value.value = data.secondPhone);
  profilePhoto.value.value = "";
  data.profilePhoto && (profilePhoto.value.value = data.profilePhoto);
}

function modalProfessionEdit(id: number, index: number) {
  indexExperience.value = index;
  let data = experiences.value.find((obj: any) => obj.id === id);
  listProfessions.value = AllProfessions.value.filter(
    (data: any) => data.value == id
  );

  countEsp.value = data?.specialities.length || 0;

  setTimeout(() => {
    if (data) {
      filterForProfession(id);
      idProfession.value.value = id;
      workExperience.value.years = data.years;
      workExperience.value.months = data.months;
      expProfession.value.value = {
        años: data.years,
        meses: data.months,
      };
    }
  }, 10);
  isModalProfessionEdit.value = true;
  showModalExperience.value = true;
}

function modalProfessionCreate() {
  inputReset();
  let filterProfession = AllProfessions.value.filter(
    (data: any) =>
      !specialization.value.some(
        (value: any) => value.professionId == data.value
      )
  );
  listProfessions.value = filterProfession;
  specialistForProfession.value = [];
  workExperience.value = {
    years: 0,
    months: 0,
  };
  isModalProfessionEdit.value = false;
  showModalExperience.value = true;
}

async function deleteLocation(id: number) {
  let listIdDistritic = locationsList.value[id].groupID;
  try {
    alertLoading("Eliminando...");
    for (const id of listIdDistritic) {
      await specialistServices.deleteWorkLocation(idEspecialist.value, id);
    }
    await fetchDistrict();
    await fetchWorkLocation();
    alertSuccessButton("Se realizo la eliminación exitosamente");
  } catch (error: any) {
    alertError(error.response.data.message);
  }
}

// ELIMINAR CUENTA BANCARIA
async function deleteAcount(id: string) {
  try {
    alertLoading("Eliminando...");
    await specialistServices.deleteBankAccount(id);
    await fetchAccountBank();
    alertSuccessButton("Se elimino exitosamente");
  } catch (error: any) {
    alertError(error.response.data.message);
  }
}

// ELIMINAR EXPERIENCIA COMPLETA DE UNA PROFESION
async function deleteExperience(id: number) {
  try {
    alertLoading("Eliminando...");
    await specialistServices.deleteExperienceForProfessionId(
      idEspecialist.value,
      id
    );
    await fetchDataSpecialist(); // obtiene datos personales del especialista
    await FormatoExperiencia(); // Procesa Experiencia para Front
    alertSuccessButton("Se elimino exitosamente");
  } catch (error: any) {
    alertError(error.response.data.message);
  }
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
  workExperience.value.years++;
}

function substractYear() {
  if (workExperience.value.years > 0) {
    workExperience.value.years--;
  }
}

function addMonth() {
  if (workExperience.value.months < 12) {
    workExperience.value.months++;
  }
}

function substractMonth() {
  if (workExperience.value.months > 0) {
    workExperience.value.months--;
  }
}

//#region GalleryImage
function showGalery() {
  showModalGalery.value = true;
  imagesList.resetField();
  cargarGallery();
}

function uploadImage(index: any) {
  imageSelected.value = index;
  const btnFile: any = document.getElementById(`portadaFile${index}`);
  btnFile.click();
}

function changeFileCover(event: any) {
  if (imagesList.value.value === undefined) {
    imagesList.value.value = formGalery.value.imagesList;
  }

  const index = imageSelected.value;
  const file: any = event.target.files[0];

  if (!file) {
    imagesList.value.value[index].url = "";
    return;
  }

  if (!imgExtensions.split(",").includes(file.type)) {
    alertError("Por favor subir una imagen con extensión 'png' o 'jpg'");
    return;
  }

  imagesList.value.value[index].file = file;
  const fr = new FileReader();
  fr.onload = () => (imagesList.value.value[index].url = String(fr.result));
  fr.readAsDataURL(file);
  event.target.value = ""; // Restablecer valor del input
}

function deleteImage(index: any) {
  formGalery.value.imagesList[index].url = "";
}
//#endregion

//#region PhotoPresentation
function uploadPresentationImage() {
  const btnFile = presentationFile.value!;
  btnFile.click();
}

function deleteImagePhotoPresentation() {
  flagUpdate.value = true;
  profilePhoto.value.value = "";
}

function changeFilePresentation(event: any) {
  if (profilePhoto.value.value === "") {
    profilePhoto.value.value = formPresentation.value.profilePhoto;
  }
  const file = event.target.files[0];
  if (!file) {
    profilePhoto.value.value = null;
    return;
  }
  if (!imgExtensions.split(",").includes(file.type)) {
    alertError("Por favor subir una imagen con extensión 'png' o 'jpg'");
    return;
  }
  flagUpdate.value = true;
  extension.value = file.type.split("/")[1];
  const fr = new FileReader();
  fr.onload = () => (profilePhoto.value.value = String(fr.result));
  fr.readAsDataURL(file);
  event.target.value = "";
}
//#endregion

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
});
</script>

<style lang="scss" scoped>
.vermas {
  cursor: pointer;
}
.deleteImagePresentation {
  position: absolute;
  margin-left: 175px;
  margin-top: -170px;
  font-size: 24px;
  color: rgb(241, 46, 46);
  border-radius: 100%;
  z-index: 10;
  cursor: pointer;
}

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
    top: 132px;
    bottom: 0px;
    align-items: center;
    justify-content: center;
  }

  .work__buttons:hover {
    background-color: #347bd8;
  }

  .work__buttons--left {
    margin: 0px -37px;
  }

  .work__buttons--right {
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
  #modal-experience {
    .work__buttons {
      top: 188px;
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
    top: 315px !important;
    left: 140px;
  }
  .mAdd {
    top: 315px !important;
    right: -16px;
  }
  .aRes {
    left: 140px;
    top: 188px !important;
  }
  .aAdd {
    top: 188px !important;
    right: -16px;
  }
  #modal-experience {
    .work__buttons {
      top: 188px;
    }
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
