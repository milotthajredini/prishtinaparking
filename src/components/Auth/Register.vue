<style src="../../assets/css/register.css"></style>
<style src="../../assets/css/roboto-font.css"></style>
<style src="../../assets/fonts/line-awesome/css/line-awesome.min.css"></style>


<template>
<div class="page-content">
		<div class="form-v2-content"> 
			<div v-if="error" class="alert alert-danger">{{error}}</div>
			<div class="form-left">
				<img src="../../assets/img/form-v2.jpg" alt="form">
				<div class="text-1">
					<p>Bring Your Music Along<span>try Unlimited</span></p>
				</div>
				<div class="text-2">
					<p><span>$9.99</span>/ Month</p>
				</div>
			</div>

			<form action="#" @submit.prevent="submit"  class="form-detail" id="myform">
				<h2>Registration Form</h2>
				<div class="form-row">
					<label for="full-name">Full Name:</label>
					<input type="name"  name="name" id="name" value required autofocus v-model="form.name" class="input-text" placeholder="ex: Lindsey Wilson"/>
				</div>
				<div class="form-row">
					<label for="your_email">Your Email:</label>
					<input type="email" name="email" id="email" value autofocus v-model="form.email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}">
				</div>
				<div class="form-row">
					<label for="password">Password:</label>
					<input type="password" name="password" id="password" value v-model="form.password"  class="input-text" required>
				</div>
				<div class="form-row">
					<label for="comfirm-password">Confirm Password:</label>
					<input type="password" name="confirm_password" id="confirm_password" class="input-text" required>
				</div>
				<div class="form-checkbox">
					<label class="container"><p>By signing up, you agree to the <a href="#" class="text">Play Term of Service</a></p>
	<input type="checkbox" name="agree" id="agree">
<span class="checkmark"></span>
					</label>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register">
				</div>
			</form>
		</div>
	</div>
</template>


<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
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
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>