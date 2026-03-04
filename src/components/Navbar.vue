<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3 custom-navbar">
    <div class="container">
      
      <router-link class="navbar-brand fw-bolder text-pink d-flex align-items-center gap-2" to="/">
        <i class="bi bi-stars fs-4"></i> 
        <span class="brand-text">GENZY</span>
      </router-link>
      
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-lg-3">
          <li class="nav-item">
            <router-link class="nav-link fw-semibold px-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-semibold px-3" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-semibold px-3" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-semibold px-3" to="/promotion">Promotion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-semibold px-3" to="/contact">Contact</router-link>
          </li>
        </ul>
        
        <div class="d-flex ms-lg-4 mt-3 mt-lg-0">
           <router-link to="/products" class="btn btn-pink rounded-pill px-4 py-2 shadow-sm">Shop Now</router-link>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Frosted glass effect */
.custom-navbar {
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);
}

.brand-text {
  letter-spacing: 1.5px;
}

/* Base link styling */
.nav-link {
  color: #666 !important;
  position: relative;
  transition: color 0.3s ease;
}

/* Modern Animated Underline */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0px;
  left: 50%;
  background-color: var(--y2k-pink-dark, #ff69b4);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Hover and Active states */
.nav-link:hover,
.router-link-active {
  color: var(--y2k-pink-dark, #ff69b4) !important;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 70%;
}

/* Mobile responsive adjustments */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
  
  .nav-link::after {
    display: none; /* Hide underline on mobile to keep it uncluttered */
  }
  
  .nav-link {
    padding-left: 0 !important;
    margin-bottom: 0.5rem;
  }
  
  .router-link-active {
    padding-left: 10px !important;
    border-left: 3px solid var(--y2k-pink-dark, #ff69b4);
    background: var(--y2k-bg, #fff0f5);
    border-radius: 0 8px 8px 0;
  }
}
</style>