<style scoped href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></style>
<style scoped href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></style>
<style scoped href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></style>
<template>
<div>
<nav class="nav">
        <div class="container">
            <div class="logo" >
                <router-link to="/">
              <img id="logoblack" src="../assets/logo.png" width="200px" height="35px" alt="">
               <img id="logowhite" src="../assets/logowhite.png" width="200px" height="35px" alt="">
               </router-link>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                   <router-link class="nav-link" to="/">
                    <li><a href="#">Home</a></li>
                    </router-link>
                     <router-link class="nav-link" to="/buyticket">
                    <li><a href="#">Pay Ticket</a></li>
                     </router-link>
                      <router-link class="nav-link" to="/services">
                    <li><a href="#">Services</a></li>
                      </router-link>
                       <router-link class="nav-link" to="/about">
                    <li><a href="#">About</a></li>
                    </router-link>
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


