<template>
   <div class="form-v2">
        <div class="side">
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<form action="#" @submit.prevent="submit" class="login100-form validate-form">
					<span class="login100-form-title p-b-70">
						Welcome
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

					<ul class="login-more p-t-190">
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

<script>
</script>

<script src="../../assets/js/main.js"></script>

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
  }
};
</script>