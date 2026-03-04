<template>
  <footer class="bg-dark text-white text-center py-5">
    <div class="container">
      <h4 class="fw-bold mb-3">GENZY ACCESSORIES SHOP</h4>
      <div class="d-flex justify-content-center gap-4 mb-4">
        <a href="#" class="text-white fs-4 hover-pink"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white fs-4 hover-pink"><i class="bi bi-tiktok"></i></a>
        <a href="#" class="text-white fs-4 hover-pink"><i class="bi bi-instagram"></i></a>
      </div>
      <p class="mb-0 text-secondary">&copy; {{ new Date().getFullYear() }} Genzy Accessories Shop. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.hover-pink {
  transition: color 0.3s ease;
}
.hover-pink:hover {
  color: #ff69b4 !important;
}
</style>