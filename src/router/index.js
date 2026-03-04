import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Promotion from '../components/Promotion.vue'
import Products from '../components/Products.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Hero },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { path: '/promotion', name: 'Promotion', component: Promotion },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
  // I removed the linkActiveClass line here!
})

export default router