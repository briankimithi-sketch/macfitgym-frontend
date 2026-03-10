import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Admin from '@/Components/Admin.vue'
import Bundles from '@/components/Bundles.vue'
import Profile from '@/components/Profile.vue'
import SignUp from '@/components/SignUp.vue'
import HomePage from '@/components/Homepage.vue'
import GymLocations from '@/components/GymLocations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  path:'/',
  name: 'landingpage',
  component: LandingPage,
},
{
  path:'/login',
  name: 'login',
  component: Login,
},
{
  path:'/admin',
  name: 'admin',
  component: Admin,
},
{
  path:'/bundles',
  name: 'bundles',
  component: Bundles,
},
{
  path:'/profile',
  name: 'Profile',
  component: Profile,
},
{
  path:'/signup',
  name: 'signup',
  component: SignUp,
},
{
  path:'/homepage',
  name: 'homepage',
  component: HomePage,
},
{
  path:'/gymlocations',
  name: 'gymlocations',
  component: GymLocations,
},

  ],
})

export default router
