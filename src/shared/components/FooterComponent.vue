<template>
  <div class="footer-section">
    <div class="footer-section-bg-graphics">
      <img src="@/assets/img/footer-section-bg.png" />
    </div>
    <!-- Footer Column 1 -->
    <div class="container footer-container">
      <div class="col-lg-3 col-md-6 footer-logo">
        <img src="@/assets/img/logo_footer.png" />
        <p class="footer-susection-text">
          A beautiful landing page template by Codefest.
        </p>
      </div>
      <div class="col-lg-3 col-md-6 footer-subsection">
        <div class="footer-subsection-2-1">
          <h3 class="footer-subsection-title">About</h3>
          <p class="footer-subsection-text">
            We like to do business at Codelander HQ to our clients'
            satisfaction.
          </p>
        </div>
      </div>
      <!-- Footer Column 2 -->
      <div class="col-lg-3 col-md-6 footer-subsection">
        <h3 class="footer-subsection-title">Contact Us</h3>
        <ul class="footer-subsection-list">
          <li>123 Business Centre<br />London SW1A 1AA</li>
          <li>0123456789</li>
          <li>mail@domain.com</li>
        </ul>
      </div>
      <!-- Footer Column 3 -->
      <div class="col-lg-3 col-md-6 footer-subsection">
        <div class="footer-subsection-2-2">
          <h3 class="footer-subsection-title">Socials</h3>
          <div class="footer-social-media-icons-section">
            <a href="#top" class="footer-social-media-icon"
              ><i class="fa fa-twitter"></i
            ></a>
            <a href="#top" class="footer-social-media-icon"
              ><i class="fa fa-instagram"></i
            ></a>
            <a href="#top" class="footer-social-media-icon"
              ><i class="fa fa-facebook"></i
            ></a>
            <a href="#top" class="footer-social-media-icon"
              ><i class="fa fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER CREDITS -->
    <div class="container footer-credits">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <!-- <a href="https://www.codefest.co.uk" target="_blank" title="Codefest">HogarEP</a> -->
        HogarEP &trade;. Todos los derechos reservados.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
