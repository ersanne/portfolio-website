import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinks: [
            {
                path: '/',
                name: 'Home'
            },
            {
                path: '/projects',
                name: 'Projects'
            },
            {
                path: '/blog',
                name: 'Blog'
            },
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})
