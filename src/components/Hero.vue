<template>
  <div>
    <section class="hero-section bg-pastel overflow-hidden">
      <div class="container">
        <div class="row align-items-center min-vh-100 flex-column-reverse flex-lg-row py-5">
          
          <div class="col-lg-6 text-center text-lg-start mt-5 mt-lg-0 z-index-2 animate-fade-in-up">
            <span class="badge bg-white text-pink px-3 py-2 rounded-pill shadow-sm mb-4 border-pink-subtle">
              ✨ New Y2K Collection Dropped
            </span>
            <h1 class="display-3 fw-bolder text-dark mb-3 lh-sm">
              GENZY <br>
              <span class="text-pink">ACCESSORIES</span>
            </h1>
            <p class="lead text-secondary mb-5 fw-normal pe-lg-5">
              <strong class="text-dark">NO ACCESSORIES NOT GENZY.</strong><br> 
              Elevate your fit with our curated collection of soft girl, Y2K essentials, and everyday cute aesthetics.
            </p>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
              <router-link to="/products" class="btn btn-pink btn-lg px-5 py-3 shadow-sm rounded-pill">Shop Now</router-link>
              <router-link to="/promotion" class="btn btn-outline-dark btn-lg px-4 py-3 shadow-sm rounded-pill">View Promos</router-link>
            </div>
          </div>

          <div class="col-lg-6 position-relative mb-5 mb-lg-0 animate-fade-in-left">
            <div class="hero-img-wrapper position-relative">
              <div class="position-absolute top-50 start-50 translate-middle bg-pink-glow rounded-circle blur-effect"></div>
              
              <img src="https://img.freepik.com/free-photo/stylish-woman-hands-using-smartphone_285396-6598.jpg?semt=ais_rp_progressive&w=740&q=80" 
                   alt="Genzy Style Accessories" 
                   class="img-fluid rounded-5 shadow-lg position-relative main-hero-img" />

              <div class="floating-card bg-white p-3 rounded-4 shadow-lg position-absolute bottom-0 start-0 translate-middle-x mb-5 ms-5 d-none d-md-flex align-items-center gap-3">
                <div class="bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center p-3">
                  <i class="bi bi-star-fill fs-5"></i>
                </div>
                <div>
                  <p class="mb-0 fw-bold fs-6 text-dark">Top Rated</p>
                  <small class="text-muted">10,000+ Happy GenZers</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-5 bg-white">
      <div class="container py-5">
        
        <div class="d-flex justify-content-between align-items-end mb-5 border-bottom pb-3 animate-fade-in-up" style="animation-delay: 0.3s;">
          <div>
            <h6 class="text-pink fw-bold text-uppercase tracking-wide mb-1">Must Haves</h6>
            <h2 class="fw-bolder mb-0 text-dark">Trending Right Now</h2>
          </div>
          <router-link to="/products" class="text-pink fw-semibold text-decoration-none d-none d-md-block hover-lift">
            View All Collection <i class="bi bi-arrow-right ms-1"></i>
          </router-link>
        </div>
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div class="col animate-fade-in-up" v-for="(product, index) in trendingProducts" :key="product.id" :style="`animation-delay: ${0.4 + (index * 0.1)}s`">
            <div class="card h-100 product-card shadow-sm border-0 bg-light rounded-4 overflow-hidden">
              <div class="position-relative overflow-hidden product-img-container">
                <img :src="product.image" class="card-img-top product-img" :alt="product.name">
                <span v-if="product.isHot" class="badge bg-pink text-white position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 shadow-sm">Hot 🔥</span>
              </div>
              <div class="card-body p-4 d-flex flex-column bg-white">
                <span class="small text-muted text-uppercase fw-semibold tracking-wide mb-2">{{ product.category }}</span>
                <h5 class="card-title fw-bold text-dark mb-3">{{ product.name }}</h5>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <span class="fs-5 fw-bolder text-pink">${{ product.price.toFixed(2) }}</span>
                  <button class="btn btn-outline-dark rounded-circle btn-cart p-2 d-flex align-items-center justify-content-center" title="Add to Cart">
                    <i class="bi bi-bag-plus fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5 d-md-none">
          <router-link to="/products" class="btn btn-outline-dark rounded-pill px-5 py-3 w-100 fw-bold">View All Products</router-link>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Trending Products Static Data
const trendingProducts = ref([
  { id: 1, name: "Y2K Layered Necklace", price: 12.99, image: "https://tr.rbxcdn.com/180DAY-68da33ab9ce3404f89ba5957f6efaa9a/420/420/NeckAccessory/Png/noFilter", category: "Jewelry", isHot: true },
  { id: 2, name: "Fluffy Pink Headband", price: 8.50, image: "https://png.pngtree.com/png-clipart/20250519/original/pngtree-fluffy-pink-headband-with-large-upright-bunny-ears-featuring-a-shiny-png-image_21033141.png", category: "Accessories", isHot: false },
  { id: 3, name: "Star Crystal Earrings", price: 9.99, image: "https://png.pngtree.com/png-vector/20250212/ourmid/pngtree-sparkling-crystal-star-earrings-with-dazzling-reflections-add-a-magical-and-png-image_15450839.png", category: "Jewelry", isHot: true },
  { id: 4, name: "Beaded Phone Charm", price: 6.99, image: "https://shopkaliuchis.com/cdn/shop/files/PRODUCT_UCHI_2023_ECOMM_KY_ORQUIDEASPHONECHARM_3_43_24_32.png?v=1705084598", category: "Accessories", isHot: false }
])
</script>

<style scoped>
/* Typography */
.tracking-wide {
  letter-spacing: 1.5px;
}
.lh-sm {
  line-height: 1.2 !important;
}

/* Colors & Buttons */
.text-pink { color: #ff69b4 !important; }
.bg-pastel { background-color: #fff0f5 !important; }
.bg-pink { background-color: #ff69b4 !important; }

.btn-pink {
  background-color: #ffb6c1 !important;
  color: #fff !important;
  border: none !important;
  font-weight: bold;
  transition: all 0.3s ease;
}
.btn-pink:hover {
  background-color: #ff69b4 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 105, 180, 0.4);
}

/* Hero Section Features */
.hero-section {
  position: relative;
  padding-top: 20px;
}
.border-pink-subtle {
  border: 1px solid rgba(255, 105, 180, 0.2);
}

.bg-pink-glow {
  background: radial-gradient(circle, #ffb6c1 0%, rgba(255, 182, 193, 0) 70%);
  width: 120%;
  height: 120%;
  z-index: 0;
}
.blur-effect {
  filter: blur(60px);
  opacity: 0.6;
}

.main-hero-img {
  object-fit: cover;
  height: 500px;
  width: 100%;
  z-index: 1;
}

/* Floating Animation */
.floating-card {
  z-index: 2;
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0% { transform: translate(-50%, 0px); }
  50% { transform: translate(-50%, -15px); }
  100% { transform: translate(-50%, 0px); }
}

/* Page Load Entrance Animations */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
.animate-fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Product Cards & Hover Effects */
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
}
.product-img-container {
  height: 300px;
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.product-card:hover .product-img {
  transform: scale(1.1);
}
.btn-cart {
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}
.btn-cart:hover {
  background-color: #ff69b4;
  border-color: #ff69b4;
  color: white;
  transform: scale(1.1);
}
.hover-lift {
  transition: transform 0.2s ease;
  display: inline-block;
}
.hover-lift:hover {
  transform: translateX(5px);
}
</style>