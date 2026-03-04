<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    
    <main class="flex-grow-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Keep all your previous global CSS and Y2K theme styles here! */
:root {
  --y2k-pink: #ffb6c1;
  --y2k-pink-dark: #ff69b4;
  --y2k-bg: #fff0f5;
}
body {
  background-color: #fdfdfd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.bg-pastel { background-color: var(--y2k-bg); }
.text-pink { color: var(--y2k-pink-dark) !important; }
.btn-pink {
  background-color: var(--y2k-pink);
  color: #fff;
  border-radius: 25px;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
}
.btn-pink:hover {
  background-color: var(--y2k-pink-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
}
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 182, 193, 0.3);
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 182, 193, 0.2) !important;
}
section { padding: 80px 0; }
</style>