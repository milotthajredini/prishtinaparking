<style  scoped href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" ></style>
<style  scoped href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.13.0/css/mdb.min.css" ></style>
<style scoped href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"></style>
<style  scoped href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" ></style>
<style  scoped href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" ></style>
<style  scoped src="../../assets/css/table.css" ></style>


<template >
  <div v-if="user.loggedIn" class="container" style="padding-top:150px;">
    <div style="width:150px;font-size:15px;" class="custom-control custom-switch">
      <input v-model="showTime" type="checkbox" class="custom-control-input" id="customSwitch1" />
      <label style="font-size:15px;" class="custom-control-label" for="customSwitch1">Show Ora</label>
    </div>

    <div style="overflow:auto;height:500px;">
      <table style="font-size:15px;" class="table table-striped">
        <thead>
          <tr class="sticky-top" style="text-align:center;">
            <th scope="col">Targat</th>
            <th scope="col">Numri Tel</th>
            <th scope="col">Qyteti</th>
            <th scope="col">Cmimi</th>
            <th v-if="showOra" scope="col">Ora</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr style="text-align:center;" v-for="payparking in payparking" :key="payparking._id">
            <td>{{ payparking.targat }}</td>
            <td>{{ payparking.numritel }}</td>
            <td>{{ payparking.qyteti }}</td>
            <td>{{payparking.cmimi}}</td>
            <td v-if="showOra">{{moment(payparking. updated_date).format('DD/MM/YYYY hh:mm')}}</td>
            <td>
              <button
                type="button"
                style="margin-right:15px;width:50px;font-size:12px;margin-left:-65px"
                class="btn btn-info"
                v-if="user.data.firebase_id==='7MLDzYN8U7gsQowp8wEZYbgJTr73'"
                @click.stop="editpayparking(payparking._id)"
              >Edit</button>
              <button
                type="button"
                class="btn btn-danger"
                style="margin-right:-65px;width:50px;font-size:12px"
                @click.stop="deletepayparking(payparking._id)"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <vue-good-table :columns="columns" :rows="rows" styleClass="vgt-table condensed striped" :pagination-options="{ enabled: true, mode: 'records'}">
	<div slot="table-actions">
		<div class="button-group">
			<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog" aria-hidden="true"></i> <span class="caret"></span></button>
			<ul class="dropdown-menu" style="top: auto; left: auto;">
				<li v-for="(column, index) in columns" :key="index">
					<a href="#" class="small" tabIndex="-1" @click.prevent="toggleColumn( index, $event )"><input :checked="!column.hidden" type="checkbox"/>&nbsp;{{column.label}}</a>
				</li>
			</ul>
		</div>
	</div>
	<div slot="emptystate">
		No records found
	</div>
    </vue-good-table>-->
  </div>
  <div v-else>
    <h1
      style="padding-top:15%;text-align:middle-center;align-content:middle-center;font-family:'Montserrat';font-size:35px;display:flex;justify-content:center;"
    >Acces Deined</h1>
  </div>
</template>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.13.0/js/mdb.min.js"></script>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "ShowPayParking",
  data() {
    return {
      payparking: {},
      showTime: null
    };
  },

  computed: {
    ...mapGetters(["user", "showOra"])
  },
  async created() {
    this.showTime = this.showOra;
    await axios
      .get(`http://localhost:4000/payparking/`)
      .then(response => {
        if (this.user.data.firebase_id === "7MLDzYN8U7gsQowp8wEZYbgJTr73") {
          this.payparking = response.data;
        } else {
          var filter = response.data.filter(
            p => p.firebase_id === this.user.data.firebase_id
          );
          this.payparking = filter;
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  },
  methods: {
    ...mapActions(["updateShowOra"]),
    onChangePage(payparking) {
      // update page of items
      this.payparking = payparking;
    },
    toggleColumn(index, event) {
      // Set hidden to inverse of what it currently is
      this.$set(this.columns[index], "hidden", !this.columns[index].hidden);
    },
    editpayparking(payparkingid) {
      this.$router.push({
        name: "historyedit",
        params: { id: payparkingid }
      });
    },
    deletepayparking(payparkingid) {
      axios
        .delete("http://localhost:4000/payparking/" + payparkingid)
        .then(result => {
          //refresh on same page
          this.$router.push({ name: "home" });
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
