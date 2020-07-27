// Paquetes de npm
import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom directives
import './directives'

// Archivos locales
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl'

// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
