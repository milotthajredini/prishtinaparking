<template>
  <div style="padding-top:200px;margin-left:40%;width:350px;" class="container">
    <h2 style="margin-left:50px;margin-bottom:20px;">Edit the Ticket History</h2>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <form @submit="onSubmit">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Targat"
              v-model="payparking.targat"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Numri Telefonit"
              v-model="payparking.numritel"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Qyteti"
              v-model="payparking.qyteti"
            />
          </div>

          <div class="form-group">
            <input
              type="submit"
              style="width:320px:font-size:12px;"
              class="btn btn-secondary btn-block"
              value="Edit"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  name: "EditTicketHistory",
  data() {
    return {
      payparking: {}
    };
  },
  created() {
    axios
      .get(`http://localhost:4000/payparking/` + this.$route.params.id)
      .then(response => {
        this.payparking = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    onSubmit() {
      axios
        .put(
          `http://localhost:4000/payparking/` + this.$route.params.id,
          this.payparking
        )
        .then(response => {
          this.$router.push({
            name: "history"
            //params: { id: this.$route.params.id }
          });
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>