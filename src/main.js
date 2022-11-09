import Vue from 'vue'
import App from './App.vue'

// Dependencias:

// Bootstrap ("npm i bootstrap@4 jquery popper.js")
// https://getbootstrap.com/docs/4.6/getting-started/introduction/
import './bootstrap'

// Router ("npm i vue-router@3")
// https://v3.router.vuejs.org/
import { router } from './router'

// VueForm ("npm i vue-form")
// https://www.npmjs.com/package/vue-form
import './form'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
