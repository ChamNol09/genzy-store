<template>
  <section class="products-section py-5 bg-white min-vh-100">
    <div class="container py-5">
      
      <div class="text-center mb-5 animate-fade-in-up">
        <h6 class="text-pink fw-bold text-uppercase tracking-wide mb-2">Our Collection</h6>
        <h2 class="display-5 fw-bolder text-dark mb-3">Shop Genzy Aesthetics</h2>
        <p class="lead text-muted mx-auto" style="max-width: 600px;">
          Explore our hand-picked selection of trendy jewelry and cute accessories.
        </p>
      </div>
      
      <div class="text-center mb-5 animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="d-inline-flex gap-2 p-1 bg-pastel rounded-pill shadow-sm">
          <button class="btn rounded-pill px-4 fw-semibold filter-btn" 
                  :class="{ 'active-filter': selectedCategory === 'All' }"
                  @click="selectedCategory = 'All'">All</button>
          <button class="btn rounded-pill px-4 fw-semibold filter-btn"
                  :class="{ 'active-filter': selectedCategory === 'Jewelry' }"
                  @click="selectedCategory = 'Jewelry'">Jewelry</button>
          <button class="btn rounded-pill px-4 fw-semibold filter-btn"
                  :class="{ 'active-filter': selectedCategory === 'Accessories' }"
                  @click="selectedCategory = 'Accessories'">Accessories</button>
        </div>
      </div>

      <transition-group name="product-list" tag="div" class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 position-relative">
        <div class="col" v-for="product in filteredProducts" :key="product.id">
          
          <div class="card h-100 product-card shadow-sm border-0 bg-light rounded-4 overflow-hidden">
            <div class="position-relative overflow-hidden product-img-container">
              <img :src="product.image" class="card-img-top product-img" :alt="product.name">
            </div>
            
            <div class="card-body p-4 d-flex flex-column bg-white text-center">
              <span class="small text-muted text-uppercase fw-semibold tracking-wide mb-2">{{ product.category }}</span>
              <h5 class="card-title fw-bold text-dark mb-1">{{ product.name }}</h5>
              <p class="fs-5 fw-bolder text-pink mb-4">${{ product.price.toFixed(2) }}</p>
              
              <button class="btn btn-pink mt-auto w-100 rounded-pill py-2 shadow-sm d-flex justify-content-center align-items-center gap-2">
                <i class="bi bi-cart2 fs-5"></i> Add to Cart
              </button>
            </div>
          </div>

        </div>
      </transition-group>
      
      <div v-if="filteredProducts.length === 0" class="text-center py-5 text-muted animate-fade-in-up">
        <i class="bi bi-emoji-frown display-1 mb-3"></i>
        <h4>No products found in this category.</h4>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')

// Updated with cleaner placehold.co images and consistent aesthetic
const products = ref([
  { id: 1, name: "Y2K Butterfly Necklace", price: 8.99, image: "https://swagychic.com/cdn/shop/products/rosegold-triple-butterfly-necklace_1800x1800.png?v=1756740927", category: "Jewelry" },
  { id: 2, name: "Cute Hair Clips", price: 4.50, image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjbGlwc19oYWlyX2NsaXBzX2hhaXItaW1hZ2Uta3liZHpyY3kuanBn.jpg", category: "Accessories" },
  { id: 3, name: "Soft Girl Bracelet", price: 6.99, image: "https://commoncircus.com.au/cdn/shop/files/261-10-12_Under_the_Sun_Bracelet_Gold_WEB.jpg?v=1770079479&width=2000", category: "Jewelry" },
  { id: 4, name: "Phone Charm", price: 5.99, image: "https://shopsonix.com/cdn/shop/files/Beaded_Phone_Charm_Blue2_WEB_22ba530d-dc30-436e-8fc5-b736284c1304.jpg?crop=center&height=1200&v=1738853285&width=1200", category: "Accessories" },
  { id: 5, name: "Pop Socket", price: 3.99, image: "https://www.spigen.com/cdn/shop/files/detail_web_nanopop_magnetic_phone_grip_blueberry_navy_02.jpg?v=1739219330&width=1946", category: "Accessories" },
  { id: 6, name: "Pink Headband", price: 7.50, image: "https://m.media-amazon.com/images/I/71iBt2mrvpL._AC_UF1000,1000_QL80_.jpg", category: "Accessories" },
  { id: 7, name: "Mini Keychain", price: 4.99, image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/5320431/1.jpg?5535", category: "Accessories" },
  { id: 8, name: "Star Earrings", price: 5.50, image: "https://png.pngtree.com/png-vector/20250212/ourmid/pngtree-sparkling-crystal-star-earrings-with-dazzling-reflections-add-a-magical-and-png-image_15450839.png", category: "Jewelry" },
  { id: 9, name: "Heart Ring", price: 6.50, image: "https://www.ainabarcelona.com/cdn/shop/files/webrenovades_1_e885b9b5-e0a8-4bf5-89ab-04e8c4a82291_1024x.jpg?v=1758623706", category: "Jewelry" },
  { id: 10, name: "Phone Case", price: 12.99, image: "https://www.skinnydiplondon.com/cdn/shop/files/paddington-x-skinnydip-since-1958-shock-iphone-case-phone-cases-skinnydip-london-1144421026.jpg?v=1741966370", category: "Accessories" }
])

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products.value
  }
  return products.value.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
/* Typography & Colors */
.tracking-wide { letter-spacing: 1.5px; }
.text-pink { color: #ff69b4 !important; }
.bg-pastel { background-color: #fff0f5 !important; }

/* Filter Buttons Styling */
.filter-btn {
  color: #6c757d;
  transition: all 0.3s ease;
  border: none;
}
.filter-btn:hover {
  color: #ff69b4;
}
.active-filter {
  background-color: #ff69b4 !important;
  color: white !important;
  box-shadow: 0 4px 10px rgba(255, 105, 180, 0.3);
}

/* Add to Cart Button */
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

/* Product Cards & Image Hover */
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
}
.product-img-container {
  height: 280px; /* Modern aspect ratio */
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.product-card:hover .product-img {
  transform: scale(1.1); /* Zoom effect */
}

/* Page Load Animation */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Vue Transition Group Animations for Filtering */
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.5s ease;
}
.product-list-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}
.product-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
/* Ensure smooth moving when items leave the DOM */
.product-list-leave-active {
  position: absolute;
}
</style>