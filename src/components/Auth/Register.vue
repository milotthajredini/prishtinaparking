<template>
   <div class="form-v2">
        <div class="side">
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
             <div v-if="error" class="alert alert-danger">{{error}}</div>
				<form action="#" @submit.prevent="submit" class="login100-form validate-form">
					<span style="margin-top:100px;" class="login100-form-title p-b-70">
						Register
					</span>
							<span class="login100-form-avatar">
						<img src="../../assets/img/avatar.png" alt="AVATAR">
					</span>
					
					<div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Enter Name">
						<input class="input100" type="name" v-model="form.name" autofocus required id="name"  name="name"/>
						<span class="focus-input100" data-placeholder="Full Name"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50" data-validate="Enter Email">
						<input class="input100" v-model="form.email" required id="email"  type="email" name="email"/>
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>
						<div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						<input class="input100" v-model="form.password" required id="password"  type="password" name="password"/>
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>
						<div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						<input class="input100" required id="password"  type="password" name="password"/>
						<span class="focus-input100" data-placeholder="Confirm Password"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Register
						</button>
					</div>

					<ul style="margin-top:-80px;" class="login-more p-t-190">
				

						<li>
							<span class="txt1">
								Do you have Account?
							</span>

							<a href='login' class="txt2">
								Login
							</a>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
        </div>
        

    </div>
</template>




<style src="../../assets/css/main.css" scoped></style>
<style src="../../assets/css/util.css" scoped></style>
<style src="../../assets/vendor/bootstrap/css/bootstrap.min.css" scoped></style>
<style src="../../assets/fonts/iconic/css/material-design-iconic-font.min.css" scoped></style>
<style src="../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css" scoped></style>
<style src="../../assets/vendor/animate/animate.css" scoped></style>
<style src="../../assets/vendor/css-hamburgers/hamburgers.min.css" scoped></style>
<style src="../../assets/vendor/animsition/css/animsition.min.css" scoped></style>
<style src="../../assets/vendor/select2/select2.min.css" scoped></style>
<style src="../../assets/vendor/daterangepicker/daterangepicker.css" scoped></style>
<style src="../../assets/vendor/perfect-scrollbar/perfect-scrollbar.css" scoped></style>

<script>
/* eslint-disable*/
import firebase from "firebase";
import axios from 'axios'
import { mapGetter, mapGetters } from "vuex"
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
   submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
             .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'home',
          //params: { id: response.data._id }
        })
        })
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  
  },
  mounted(){

(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
})(jQuery);
  }
}

</script>