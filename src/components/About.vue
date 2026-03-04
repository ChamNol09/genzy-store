<template>
  <section class="about-section bg-white overflow-hidden py-5 min-vh-100 d-flex align-items-center">
    <div class="container py-5">
      <div class="row align-items-center">
        
        <div class="col-lg-5 mb-5 mb-lg-0 animate-fade-in-left position-relative">
          <div class="image-wrapper position-relative z-index-1">
            <div class="position-absolute top-50 start-50 translate-middle bg-pink-blob blur-effect"></div>
            
            <img src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/629278642_1203706768641271_464474817028731763_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEv3XV34nMBRbNcQP5eDB7Bz4PrYu-GuyvPg-ti74a7K8cOdtnvZYNVfOQg0dDlmu1DGtT-HXmNV9rXKJFIkAE8&_nc_ohc=w2Y1KcPjj8YQ7kNvwHYJQT8&_nc_oc=Adlk9ZLnaw_mZ3k0BiGi_lbilZcrladz80EOYUyjMyOPskA0xu1jL5xy8N5Np1YhvnI&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=Y0PHSn59JOljXC63g_O9CA&_nc_ss=8&oh=00_Afz4tTTsqUM7sWWNVA90e7_VX5TgJYmn_htFOaHX-2hfCQ&oe=69ADC498" 
                 alt="Genzy Owner" 
                 class="img-fluid rounded-5 shadow-lg position-relative main-img" />

            <div class="floating-card bg-white p-3 rounded-4 shadow-sm position-absolute bottom-0 end-0 translate-middle-y me-n4 d-none d-md-flex align-items-center gap-3 border-pink-subtle">
              <div class="bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center" style="width: 45px; height: 45px;">
                <i class="bi bi-heart-fill fs-5"></i>
              </div>
              <div class="pe-3">
                <p class="mb-0 fw-bold fs-6 text-dark">Khon Sokheny</p>
                <small class="text-muted">Founder & CEO</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 offset-lg-1 animate-fade-in-up" style="animation-delay: 0.2s;">
          <h6 class="text-pink fw-bold text-uppercase tracking-wide mb-2">Our Story</h6>
          <h2 class="display-5 fw-bolder mb-4 text-dark lh-sm">Curating <span class="text-pink">Aesthetics</span> for the Gen Z Soul.</h2>
          
          <p class="lead text-secondary mb-4 fs-5">
            <strong>Genzy Accessories Shop</strong> is an accessories store for young people that focuses on Y2K, Soft Girl, and everyday Cute Fashion styles. 
          </p>
          <p class="text-muted mb-4">
            Our shop sources products from reliable and high-quality suppliers, carefully selecting each item to ensure safe, durable, and long-lasting pieces that elevate your daily outfits.
          </p>

          <div class="p-4 bg-pastel rounded-4 mb-5 border-start border-4 border-pink shadow-sm">
            <p class="mb-0 fw-semibold text-dark fst-italic fs-5">
              "We are committed to trendy products, excellent quality, reasonable prices, and respectful customer service."
            </p>
          </div>

          <div class="row g-4">
            <div class="col-sm-6 d-flex align-items-center gap-3 hover-lift">
              <div class="icon-box bg-white text-pink rounded-circle shadow-sm d-flex align-items-center justify-content-center">
                <i class="bi bi-gem fs-4"></i>
              </div>
              <span class="fw-bold text-dark">High Quality</span>
            </div>
            <div class="col-sm-6 d-flex align-items-center gap-3 hover-lift">
              <div class="icon-box bg-white text-pink rounded-circle shadow-sm d-flex align-items-center justify-content-center">
                <i class="bi bi-stars fs-4"></i>
              </div>
              <span class="fw-bold text-dark">Trendy Styles</span>
            </div>
            <div class="col-sm-6 d-flex align-items-center gap-3 hover-lift">
              <div class="icon-box bg-white text-pink rounded-circle shadow-sm d-flex align-items-center justify-content-center">
                <i class="bi bi-tag fs-4"></i>
              </div>
              <span class="fw-bold text-dark">Affordable</span>
            </div>
            <div class="col-sm-6 d-flex align-items-center gap-3 hover-lift">
              <div class="icon-box bg-white text-pink rounded-circle shadow-sm d-flex align-items-center justify-content-center">
                <i class="bi bi-balloon-heart fs-4"></i>
              </div>
              <span class="fw-bold text-dark">Friendly Service</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Typography & Colors */
.tracking-wide { letter-spacing: 1.5px; }
.lh-sm { line-height: 1.2 !important; }
.text-pink { color: #ff69b4 !important; }
.bg-pastel { background-color: #fff0f5 !important; }
.border-pink { border-color: #ff69b4 !important; }
.border-pink-subtle { border: 1px solid rgba(255, 105, 180, 0.2) !important; }

/* Image Styling & Backgrounds */
.main-img {
  width: 100%;
  max-width: 450px;
  object-fit: cover;
  z-index: 2;
  border: 8px solid white;
}
.bg-pink-blob {
  width: 110%;
  height: 110%;
  background: radial-gradient(circle, #ffb6c1 0%, rgba(255, 182, 193, 0) 70%);
  z-index: 0;
}
.blur-effect {
  filter: blur(50px);
  opacity: 0.7;
}

/* Icons */
.icon-box {
  width: 60px;
  height: 60px;
  min-width: 60px;
  transition: all 0.3s ease;
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
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Hover & Floating Effects */
.hover-lift {
  transition: transform 0.3s ease;
  cursor: default;
}
.hover-lift:hover {
  transform: translateY(-5px);
}
.hover-lift:hover .icon-box {
  background-color: #ff69b4 !important;
  color: white !important;
}

.floating-card {
  z-index: 3;
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}

/* Responsive fixes */
@media (max-width: 991.98px) {
  .me-n4 {
    margin-right: 0 !important;
    right: 50% !important;
    transform: translateX(50%) !important;
  }
}
</style>