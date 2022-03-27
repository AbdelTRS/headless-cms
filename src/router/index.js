import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import NewCourseView from '../views/NewCourse.vue'

import { supabase } from '../supabase'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/new-course',
    name: 'newCourse',
    component: NewCourseView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/new-course/:id',
    name: 'updateCourse',
    component: NewCourseView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      requireAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  let user = await supabase.auth.user();
  store.dispatch("setUser", user)
  if (user) {
    next();
  } else if (to.meta.requireAuth && !user) {
    next({ name: "login" });
  }
  else {
    next();
  }
})

export default router