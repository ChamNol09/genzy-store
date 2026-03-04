<template>
  <section class="promotions-section py-5 bg-pastel min-vh-100 d-flex align-items-center">
    <div class="container py-5">
      
      <div class="text-center mb-5 animate-fade-in-up">
        <h6 class="text-pink fw-bold text-uppercase tracking-wide mb-2">Special Offers</h6>
        <h2 class="display-5 fw-bolder text-dark mb-3">Genzy Perks & Promos</h2>
        <p class="lead text-muted mx-auto" style="max-width: 600px;">
          We love treating our besties. Check out all the ways you can save and score free cute stuff when you shop with us!
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-12 col-md-6 col-lg-4 animate-fade-in-up" 
             v-for="(promo, index) in promotions" 
             :key="index"
             :style="`animation-delay: ${0.2 + (index * 0.1)}s`">
             
          <div class="card h-100 promo-card border-0 shadow-sm bg-white rounded-4 overflow-hidden position-relative p-4">
            
            <i :class="promo.icon" class="position-absolute watermarked-icon text-pink opacity-10"></i>

            <div class="card-body position-relative z-index-1 d-flex flex-column align-items-center text-center p-0">
              <div class="icon-box bg-pastel text-pink rounded-circle d-flex align-items-center justify-content-center mb-4 shadow-sm">
                <i :class="promo.icon" class="fs-2"></i>
              </div>
              
              <h5 class="card-title fw-bold text-dark mb-3">{{ promo.title }}</h5>
              <p class="text-muted small mb-0">{{ promo.desc }}</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Added a short 'desc' to make the cards look like a professional e-commerce site
const promotions = ref([
  { 
    title: 'Social Media Drops', 
    desc: 'Follow us on Facebook, TikTok, and Instagram for exclusive discount codes.', 
    icon: 'bi bi-phone-vibrate' 
  },
  { 
    title: 'Live Selling Specials', 
    desc: 'Join our live streams to claim flash deals and limited-time offers.', 
    icon: 'bi bi-broadcast' 
  },
  { 
    title: 'Bundle & Save', 
    desc: 'Mix and match your favorite Y2K pieces to unlock automatic discounts.', 
    icon: 'bi bi-tags' 
  },
  { 
    title: 'Seasonal Discounts', 
    desc: 'Huge markdowns during holidays and end-of-season sales events.', 
    icon: 'bi bi-percent' 
  },
  { 
    title: 'Surprise Free Gifts', 
    desc: 'Get a cute surprise freebie included with every qualifying order!', 
    icon: 'bi bi-gift' 
  }
])
</script>

<style scoped>
/* Typography & Themes */
.tracking-wide { letter-spacing: 1.5px; }
.text-pink { color: #ff69b4 !important; }
.bg-pastel { background-color: #fff0f5 !important; }
.opacity-10 { opacity: 0.05; }

/* Icon Box */
.icon-box {
  width: 70px;
  height: 70px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy hover transition */
}

/* Card Styling & Hover Effects */
.promo-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.promo-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(255, 105, 180, 0.15) !important;
}
.promo-card:hover .icon-box {
  background-color: #ff69b4 !important;
  color: white !important;
  transform: scale(1.1);
}

/* Decorative Background Icon */
.watermarked-icon {
  font-size: 150px;
  bottom: -30px;
  right: -30px;
  transform: rotate(-15deg);
  transition: transform 0.5s ease;
  pointer-events: none;
}
.promo-card:hover .watermarked-icon {
  transform: rotate(0deg) scale(1.1);
}

/* Entrance Animations */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>