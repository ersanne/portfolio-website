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
        usePreferredColorScheme: true,
        darkMode: false,
        navLinks: [
            // {
            //     path: '/',
            //     name: 'Home'
            // },
            // {
            //     path: '/about',
            //     name: 'About'
            // },
            // {
            //     path: '/projects',
            //     name: 'Projects'
            // },
            // {
            //
            //     path: '/blog',
            //     name: 'Blog'
            // },
        ]
    },
    getters: {
        darkMode: state => {
            return state.darkMode
        },
        usePreferredColorScheme: state => {
            return state.usePreferredColorScheme
        },
    },
    mutations: {
        disablePreferredColorScheme(state) {
            state.usePreferredColorScheme = false
        },
        toggleDarkMode(state) {
            // Update state and vuetify theme
            state.darkMode = !state.darkMode
            Vuetify.framework.theme.dark = state.darkMode
        },
        setDarkMode(state) {
            state.darkMode = true
            Vuetify.framework.theme.dark = true
        }
    },
    actions: {
        disablePreferredColorScheme({commit}) {
            commit('disablePreferredColorScheme')
        },
        toggleDarkMode({commit}) {
            commit('toggleDarkMode')
        },
        setDarkMode({commit}) {
            commit('setDarkMode')
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
})
