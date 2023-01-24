import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

// Home
import HomePage from '../views/Home/homepage.vue'
import HomePageIcon from '../views/Home/homepage.vue'

// job seeker
import JobSeeker from '../views/JobSeeker/jobseekerpage.vue'

// More
import Portal from '../views/More/portalpage.vue'
import Projects from '../views/More/projectspage.vue'

// services
import Services from '../views/Services/servicespage.vue'

// solutions
import Solutions from '../views/Solutions/solutionspage.vue'

// start up form
import StartUpForm from '../views/StartUpForm/startupformpage.vue'

Vue.use(VueRouter)

const routes = [
  // icon
  {
    path: '/home page',
    name: 'HomePageIcon',
    component: HomePageIcon
  },
  // home
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  // job seeker
  {
    path: '/jobseeker',
    name: 'JobSeeker',
    component: JobSeeker
  },
  // more
  {
    path: '/portal',
    name: 'Portal',
    component: Portal
  },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
// services
{
  path: '/services',
  name: 'Services',
  component: Services
},
// solutions
{
  path: '/solutions',
  name: 'Solutions',
  component: Solutions
},
// services
{
  path: '/startupform',
  name: 'StartUpForm',
  component: StartUpForm
},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
