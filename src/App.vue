<template>
  <div>
    <app-Header></app-Header>
    <router-view></router-view>
    <app-Footer></app-Footer>
  </div>
</template>
<script src="./src/assets/js/scroll.js"></script>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
/* @import url('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'); */
@import "../src/assets/css/style.css";
@import "../src/assets/css/header.css";
@import "../src/assets/js/header-script.js";
@import "../src/assets/css/Footer-Basic.css";
@import "../src/assets/css/scroll-footer.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

/* @import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
</style>
