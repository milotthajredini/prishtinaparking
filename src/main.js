import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';
import VueRouter from 'vue-router'
import * as firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {routes} from './routes';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-table/dist/bootstrap-table.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.js'
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export.js'
import store from "./store";
import 'bootstrap-table/dist/themes/materialize/bootstrap-table-materialize.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FormRadioPlugin } from 'bootstrap-vue';
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
Vue.use(FormRadioPlugin)

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});

Vue.prototype.moment = moment;

//regjistrimi i direktives globable highlight 
Vue.directive('highlight',{

  /* eslint-disable */
  bind(el, binding, vnode){
    //el.style.backgroundColor='blue';
    //el.style.backgroundColor=binding.value;
    if(binding.arg=='background'){
      el.style.backgroundColor=binding.value;
    }else{
      el.style.color=binding.value;
    }
  }
});



const firebaseConfig = {
  apiKey: "AIzaSyC1lsjUwwwSCZmy6WdwCNQspliFZdJj8SQ",
  authDomain: "parking-849a8.firebaseapp.com",
  databaseURL: "https://parking-849a8.firebaseio.com",
  projectId: "parking-849a8",
  storageBucket: "parking-849a8.appspot.com",
  messagingSenderId: "857068251153",
  appId: "1:857068251153:web:f11185434b9616061929b0",
  measurementId: "G-MRNDH2LFZF"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.use(FormRadioPlugin)
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.use(moment);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
store,
router,
  render: h => h(App)
})


