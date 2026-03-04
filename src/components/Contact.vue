<template>
  <section
    class="contact-section py-5 bg-pastel min-vh-100 d-flex align-items-center overflow-hidden">
    <div class="container py-5">
      <div class="text-center mb-5 animate-fade-in-up">
        <h6 class="text-pink fw-bold text-uppercase tracking-wide mb-2">
          Get In Touch
        </h6>
        <h2 class="display-5 fw-bolder text-dark mb-3">
          We'd Love to Hear From You
        </h2>
        <p class="lead text-muted mx-auto" style="max-width: 600px">
          Have a question about our Y2K collection, need help with an order, or
          just want to say hi? Drop us a line or visit us!
        </p>
      </div>

      <div class="row g-5 align-items-center">
        <div
          class="col-lg-5 animate-fade-in-left"
          style="animation-delay: 0.2s">
          <div class="d-flex flex-column gap-4">
            <div
              class="contact-card bg-white p-4 rounded-4 shadow-sm d-flex align-items-center gap-4 hover-lift border-pink-subtle">
              <div
                class="icon-box bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                <i class="bi bi-telephone-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-2 text-dark">Call Us</h5>
                <ul class="list-unstyled mb-0 contact-links">
                  <li>
                    <a
                      href="tel:0972148664"
                      class="text-muted text-decoration-none fw-semibold"
                      >097 214 8664</a
                    >
                  </li>
                  <li>
                    <a
                      href="tel:0978986313"
                      class="text-muted text-decoration-none fw-semibold"
                      >097 898 6313</a
                    >
                  </li>
                  <li>
                    <a
                      href="tel:0122148664"
                      class="text-muted text-decoration-none fw-semibold"
                      >012 214 8664</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="contact-card bg-white p-4 rounded-4 shadow-sm d-flex align-items-center gap-4 hover-lift border-pink-subtle">
              <div
                class="icon-box bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                <i class="bi bi-geo-alt-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-2 text-dark">Visit Us</h5>
                <p class="text-muted mb-0 fw-semibold">Phnom Penh, Cambodia</p>
                <small class="text-secondary"
                  >Come check out our cute aesthetics in person!</small
                >
              </div>
            </div>

            <div
              class="contact-card bg-white p-4 rounded-4 shadow-sm d-flex align-items-center gap-4 hover-lift border-pink-subtle">
              <div
                class="icon-box bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                <i class="bi bi-envelope-heart-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-2 text-dark">Email Us</h5>
                <a
                  href="mailto:hello@genzyshop.com"
                  class="text-muted text-decoration-none fw-semibold contact-links">
                  hello@genzyshop.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="map-wrapper position-relative z-index-1">
            <div
              class="position-absolute top-50 start-50 translate-middle bg-pink-blob blur-effect z-n1"></div>

            <div class="bg-white p-2 rounded-5 shadow-lg border-pink-subtle">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5253.227597312291!2d104.82065607619514!3d11.5246702886733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094fbd312449f5%3A0xaf3393bc9eda7678!2sBELTEI%20International%20University%20(Campus%202%2C%20Chaom%20Chao%20Flyover)!5e1!3m2!1sen!2skh!4v1772612467632!5m2!1sen!2skh"
                width="600"
                class="w-100 rounded-4 map-iframe"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Typography & Themes */
.tracking-wide {
  letter-spacing: 1.5px;
}
.text-pink {
  color: #ff69b4 !important;
}
.bg-pastel {
  background-color: #fff0f5 !important;
}
.border-pink-subtle {
  border: 1px solid rgba(255, 105, 180, 0.2) !important;
}

/* Contact Cards & Icons */
.icon-box {
  width: 60px;
  height: 60px;
  min-width: 60px;
  transition: all 0.3s ease;
}
.contact-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}
.contact-links a {
  transition: color 0.3s ease;
}
.contact-links a:hover {
  color: #ff69b4 !important;
}

/* Map Styling & Glow */
.map-iframe {
  height: 450px;
}
.bg-pink-blob {
  width: 105%;
  height: 105%;
  background: radial-gradient(circle, #ffb6c1 0%, rgba(255, 182, 193, 0) 70%);
  z-index: -1;
}
.blur-effect {
  filter: blur(40px);
  opacity: 0.6;
}

/* Animations */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
.animate-fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover Effects */
.hover-lift {
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  border-color: #ff69b4 !important;
}
.hover-lift:hover .icon-box {
  background-color: #ff69b4 !important;
  color: white !important;
  transform: scale(1.1);
}

/* Responsive Map Adjustments */
@media (max-width: 991.98px) {
  .map-iframe {
    height: 350px;
  }
}
</style>
