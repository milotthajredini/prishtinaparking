<style scoped src="../assets/css/buttonhome.css"></style>
<style scoped src="../assets/css/scroll-footer.css"></style>
<style src="../assets/css/Footer-Basic.css" scoped></style>
<style src="../../node_modules/ionicons/dist/css/ionicons.min.css" scoped></style>
<style src="../../node_modules/ionicons/dist/css/ionicons-core.css" scoped></style>
<style scoped src="../assets/css/buttonhome.css"></style>
<template>
 <div id="site-content">
    <h1 id="slogan">Paguaj parkingun online në <br/> komunën tuaj!</h1>
       <section class="home">
    </section>
   <template v-if="user.loggedIn">
   <div class="buttonslogin">
      <div class="bs-example">
        <router-link class="nav-link" to="/payparking">
    <button type="button" class="btn btn-primary btn-lg btn-block" id="button3pay" style="margin-top:-120px;">Pay Parking</button>
    </router-link>
  
</div>
    </div>   

   </template>
   <template v-else>
          <div class="buttonslogin">
      <div class="bs-example">
        <router-link class="nav-link" to="/register">
    <button type="button" class="btn btn-primary btn-lg btn-block" id="button1register">Regjistrohu</button>
    </router-link>
    <router-link class="nav-link" to="/login">
    <button type="button" class="btn btn-primary btn-lg btn-block" id="button2login">Identifikohu</button>
    </router-link>
</div>
    </div>   
   </template>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

