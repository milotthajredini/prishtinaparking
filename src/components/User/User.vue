<template>
  <div
    v-if="user.data.firebase_id==='7MLDzYN8U7gsQowp8wEZYbgJTr73'"
    class="container"
    style="padding-top:150px;"
  >
    <div style="width:150px;font-size:15px;" class="custom-control custom-switch">
      <input v-model="showTime" type="checkbox" class="custom-control-input" id="customSwitch1" />
      <label style="font-size:15px;" class="custom-control-label" for="customSwitch1">Show Ora</label>
    </div>
    <div style="overflow:auto;height:500px">
      <table style="font-size:15px;" class="table table-bordered">
        <thead>
          <tr style="text-align:center;">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Comments</th>
            <th v-if="showOra" scope="col">Ora</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="text-align:center;" v-for="contact in contact" :key="contact._id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.description }}</td>
            <td v-if="showOra">{{moment(contact.updated_date).format('DD/MM/YYYY hh:mm')}}</td>
            <td>
              <button
                type="button"
                style="margin-right:5px;width:50px;font-size:12px;margin-left:-65px"
                class="btn btn-info"
                @click.stop="editcontact(contact._id)"
              >Edit</button>
              <button
                type="button"
                class="btn btn-danger"
                style="margin-right:-65px;width:50px;font-size:12px"
                @click.stop="deletecontact(contact._id)"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <h1
      style="padding-top:15%;text-align:middle-center;align-content:middle-center;font-family:'Montserrat';font-size:35px;display:flex;justify-content:center;"
    >Acces Deined</h1>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "ShowContact",
  data() {
    return {
      contact: {},
      showTime: null
    };
  },
  computed: {
    ...mapGetters(["user", "showOra"])
  },
  async created() {
    this.showTime = this.showOra;
    await axios
      .get(`http://localhost:4000/contact/`)
      .then(response => {
        this.contact = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    ...mapActions(["updateShowOra"]),
    editcontact(contactid) {
      this.$router.push({
        name: "useredit",
        params: { id: contactid }
      });
    },
    deletecontact(contactid) {
      axios
        .delete("http://localhost:4000/contact/" + contactid)
        .then(result => {
          //refresh on same page
          this.$router.go();
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  },
  watch: {
    showTime: function() {
      this.updateShowOra(this.showTime);
    }
  }
};
</script>