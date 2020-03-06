import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
// import VueAnalytics from "vue-ua";
import VueGtm from 'vue-gtm'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(PrismicVue, {
    endpoint: 'https://eriksannecom.cdn.prismic.io/api/v2',
    linkResolver,
    runtimeCompiler: true
});
// Vue.use(VueAnalytics, {
//     appName: 'ErikSanne.com',
//     appVersion: '1.0',
//     trackingId: "UA-139713980-1",
//     vueRouter: router,
//     ignoredViews: ['prismic-preview', 'projects', 'blog'],
//     enabled: false
// })
Vue.use(VueGtm, {
    id: "GTM-W8XN4XT",
    vueRouter: router,
    ignoredViews: ['prismic-preview', 'projects', 'blog'],
    enabled: false,
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
