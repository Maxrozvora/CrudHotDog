import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyAgS1wJBvIYgNvf8V3jX9TH4ABWHvObiDk",
      authDomain: "hotdog-10c9d.firebaseapp.com",
      databaseURL: "https://hotdog-10c9d.firebaseio.com",
      projectId: "hotdog-10c9d",
      storageBucket: "hotdog-10c9d.appspot.com",
      messagingSenderId: "206340798640",
      appId: "1:206340798640:web:bd7352b7d80228ec"
    }
    fb.initializeApp(firebaseConfig)
  }
}).$mount('#app')
