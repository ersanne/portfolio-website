import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import PrismicVue from '@prismicio/vue'
import linkResolver from './service/prismic/link-resolver'
// import VueGtag from "vue-gtag";
import VueHighlightJS from 'vue-highlightjs'
import VueDisqus from "vue-disqus";

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(PrismicVue, {
    endpoint: 'https://eriksannecom.cdn.prismic.io/api/v2',
    linkResolver,
    runtimeCompiler: true
});

// Vue.use(VueGtag, {
//     config: { id: "UA-139713980-1" },
//     bootstrap: false,
// }, router)

Vue.use(VueHighlightJS)

Vue.use(VueDisqus, {
    shortname: 'erik-sanne'
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
