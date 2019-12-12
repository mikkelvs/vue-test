import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Checkbox from './components/Checkbox.vue';

Vue.config.productionTip = false

new Vue({
  components: { Checkbox },
  router,
  render: h => h(App)
}).$mount('#app')
