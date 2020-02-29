<style src="../assets/css/contact.css"></style>
<style scoped src="../assets/css/scroll-footer.css"></style>
<style src="../assets/css/Footer-Basic.css" scoped></style>
<style src="../../node_modules/ionicons/dist/css/ionicons.min.css" scoped></style>
<style src="../../node_modules/ionicons/dist/css/ionicons-core.css" scoped></style>

<template>
  <div>
    <div id="site-content">
      <div class="back">
        <div class="container">
          <div class="contact-clean">
            <form action="#" @submit.prevent="onSubmit">
              <h2 class="text-center">Contact us</h2>
              <div class="form-group">
                <input
                  class="form-control"
                  v-model="contact.name"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control is-invalid"
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="contact.email"
                />
                <small class="form-text text-danger">Please enter a correct email address.</small>
              </div>
              <div class="form-group">
                <textarea
                  v-model="contact.description"
                  class="form-control"
                  name="message"
                  placeholder="Message"
                  rows="14"
                ></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">send</button>
              </div>
            </form>
          </div>
          <div id="dropDownSelect1"></div>
        </div>

        <div class="side">
          <img id="kontakti" src="../assets/img/kontakti1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/main1.css" scoped></style>
<style src="../assets/css/util1.css" scoped></style>
<style src="../assets/vendor/bootstrap/css/bootstrap.min.css" scoped></style>
<style src="../assets/fonts/iconic/css/material-design-iconic-font.min.css" scoped></style>
<style src="../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css" scoped></style>
<style src="../assets/vendor/animate/animate.css" scoped></style>
<style src="../assets/vendor/css-hamburgers/hamburgers.min.css" scoped></style>
<style src="../assets/vendor/animsition/css/animsition.min.css" scoped></style>
<style src="../assets/vendor/select2/select2.min.css" scoped></style>
<style src="../assets/vendor/daterangepicker/daterangepicker.css" scoped></style>
<style src="../assets/vendor/perfect-scrollbar/perfect-scrollbar.css" scoped></style>


<script>
/* eslint-disable*/
import axios from "axios";

export default {
  name: "CreateContact",
  data() {
    return {
      contact: {}
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post(`http://localhost:4000/contact`, this.contact)
        .then(response => {
          //console.log(response);
          this.$router.push({
            name: "user"
            //params: { id: response.data._id }
          });
        });
    }
  },
  mounted() {
    (function($) {
      "use strict";

      /*==================================================================
    [ Validate ]*/
      var input = $(".validate-input .input100");

      $(".validate-form").on("submit", function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
      });

      $(".validate-form .input100").each(function() {
        $(this).focus(function() {
          hideValidate(this);
        });
      });

      function validate(input) {
        if (
          $(input).attr("type") == "email" ||
          $(input).attr("name") == "email"
        ) {
          if (
            $(input)
              .val()
              .trim()
              .match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
              ) == null
          ) {
            return false;
          }
        } else {
          if (
            $(input)
              .val()
              .trim() == ""
          ) {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
      }
    })(jQuery);
  }
};
</script>