import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'
import BlogPost from "../views/BlogPost.vue";
import LandingPage from "@/views/LandingPage";

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
        name: 'landing-page',
        component: LandingPage
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/Blog.vue')
    },
    {
        path: '/blog/:slug',
        name: 'blog-post',
        component: BlogPost
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
