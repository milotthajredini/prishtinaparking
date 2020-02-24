<template>
   <div class="form-v2">
        <div class="side">
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
             <div v-if="error" class="alert alert-danger">{{error}}</div>
				<form action="#" @submit.prevent="submit" class="login100-form validate-form">
					<span style="margin-top:100px;" class="login100-form-title p-b-70">
						Login
					</span>
							<span class="login100-form-avatar">
						<img src="../../assets/img/avatar.png" alt="AVATAR">
					</span>
					<div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Enter email">
						<input class="input100" type="email" v-model="form.email" autofocus required id="email"  name="email"/>
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						<input class="input100" v-model="form.password" required id="password"  type="password" name="password"/>
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<ul style="margin-top:-80px;" class="login-more p-t-190">
						<li class="m-b-8">
							<span class="txt1">
								Forgot
							</span>

							<a href="#" class="txt2">
								Username / Password?
							</a>
						</li>

						<li>
							<span class="txt1">
								Don’t have an account?
							</span>

							<a href="#" class="txt2">
								Sign up
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
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push({name: 'home',})
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