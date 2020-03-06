import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import Vuetify from "../plugins/vuetify";
// import {common} from "prismic-vue/components";

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        darkMode: false,
        navLinks: [
            {
                path: '/',
                name: 'Home'
            },
            // {
            //     path: '/projects',
            //     name: 'Projects'
            // },
            // {
            //     path: '/blog',
            //     name: 'Blog'
            // },
        ]
    },
    getters: {
        darkMode: state => {
            return state.darkMode
        }
    },
    mutations: {
        toggleDarkMode(state) {
            // Update state and vuetify theme
            state.darkMode = !state.darkMode
            Vuetify.framework.theme.dark = state.darkMode
        }
    },
    actions: {
        toggleDarkMode({commit}) {
            commit('toggleDarkMode')
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
})
