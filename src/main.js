import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {routes} from './routes';

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


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})