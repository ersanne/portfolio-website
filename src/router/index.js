import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'
import BlogPost from "../views/BlogPost.vue";

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
    {
        path: '*',
        name: 'Not Found',
        component: () => import('../views/NotFound.vue'),
        alias: '/not-found'
    },
    {
        path: '/preview',
        name: 'prismic-preview',
        component: () => import('../views/prismic/Preview.vue')
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
