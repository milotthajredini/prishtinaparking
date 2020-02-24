<style scoped href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></style>
<style scoped href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></style>
<style scoped href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></style>
<template>
<div>
<nav class="nav">
        <div class="container">
            <div class="logo" >
                <router-link to="/">
              <img id="logoblack" src="../assets/img/logo.png" width="200px" height="35px" alt="">
               <img id="logowhite" src="../assets/img/logowhite.png" width="200px" height="35px" alt="">
               </router-link>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                   <router-link class="nav-link" to="/">
                    <li><a href="#">Home</a></li>
                    </router-link>
                     <router-link v-if="user.loggedIn" class="nav-link" to="/payparking">
                    <li><a href="#">Pay Parking</a></li>
                     </router-link>
                        <router-link v-else class="nav-link" to="/login">
                    <li><a href="#">Pay Parking</a></li>
                     </router-link>
                     <router-link  class="nav-link" to="/services">
                    <li><a href="#">Services</a></li>
                     </router-link>
                       <router-link class="nav-link" to="/contact">
                    <li><a href="#">Contact</a></li>
                    </router-link>
                    <template v-if="user.loggedIn">
                            <router-link v-if="user.data.firebase_id==='7MLDzYN8U7gsQowp8wEZYbgJTr73'"  class="nav-link" to="/user">
                    <li><a href="#">User</a></li>
                    </router-link>
                    </template>
                      <!-- <router-link v-if="user.loggedIn" class="nav-link" to="/dashboard">
                    <li><a href="#">Parking History</a></li>
                    </router-link> -->
          
                      <router-link v-if="user.loggedIn" class="nav-link" to="">
                     <li><a>{{user.data.displayName}}</a></li>  </router-link>
                      
                      <router-link v-if="user.loggedIn" class="nav-link" to="">
                        <li  v-if="user.loggedIn"><a  @click.prevent="signOut">Sign Out</a></li>
                          </router-link>
                    <template v-else>
                         <router-link class="nav-link" to="/login">
                    <li><a href="#">Login</a></li>
                      </router-link>
                          <router-link class="nav-link" to="/register">
                    <li><a href="#">Register</a></li>
                      </router-link>
                    </template>
              
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters(["user"])
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