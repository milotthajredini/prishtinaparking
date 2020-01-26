<template>
  <div>
    <app-Header></app-Header>
    <router-view></router-view>
    <app-Footer></app-Footer>
     
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
   data(){
            return{
                text:'Hello World'
            }
        },filters:{
            toUpperCase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appHeader:Header,
             appFooter:Footer
        },directives:{
            'local-hightlight':{
                // eslint-disable-next-line no-unused-vars
                bind(el, binding, vnode){
                el.style.color='blue';
            }
        }
    }
  
}
</script>

<style>
/* @import url('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'); */
@import '../src/assets/style.css';
@import '../src/assets/footer.css';
@import '../src/assets/header.css';
@import '../src/assets/header-script.js';
/* @import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
</style>