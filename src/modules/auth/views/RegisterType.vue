<template>
  <div>
    <div class="register-type-container">
      <div class="container blog-container">
        <div class="blog-title-section">
          <h2 class="blog-title">Únete a nosotros como</h2>
        </div>
        <div class="blog-posts-section">
          <b-row>
            <b-col>
              <div
                class="blog-post-card-container"
                @click="$router.push({ name: 'register-client' })"
              >
                <div class="blog-post-card blog-post-card--type">
                  <div class="blog-post-icon">
                    <img src="@/assets/img/blog-card-1.png" />
                  </div>
                  <h3 class="blog-post-title">Cliente</h3>
                  <p class="blog-post-text">Quiero realizar un proyecto</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div
                class="blog-post-card-container"
                @click="$router.push({ name: 'register-specialist' })"
              >
                <div class="blog-post-card blog-post-card--type">
                  <div class="blog-post-icon">
                    <img src="@/assets/img/blog-card-2.png" />
                  </div>
                  <h3 class="blog-post-title">Especialista</h3>
                  <p class="blog-post-text">
                    Quiero buscar nuevas oportunidades
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.register-type-container {
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
  position: relative;
  min-height: calc(100vh - 85px);
}
</style>
