import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {routes} from './routes';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from "./store";
import { FormRadioPlugin } from 'bootstrap-vue';
Vue.use(FormRadioPlugin)
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});


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
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
store,
router,
  render: h => h(App)
})


