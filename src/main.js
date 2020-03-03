import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import VueMeta from 'vue-meta'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(PrismicVue, {
  endpoint: 'https://eriksannecom.cdn.prismic.io/api/v2',
  linkResolver,
  runtimeCompiler: true
});
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
