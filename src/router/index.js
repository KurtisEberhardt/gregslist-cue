import { createRouter, createWebHashHistory } from 'vue-router'
import HousePage from '../pages/HousePage'
import AboutPage from '../pages/AboutPage.vue'
import HouseDetails from '../pages/HouseDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Houses',
    component: HousePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/house/:id',
    name: 'House Details',
    component: HouseDetails
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
