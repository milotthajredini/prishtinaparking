<style  scoped href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" ></style>
<style  scoped href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.13.0/css/mdb.min.css" ></style>
<style scoped href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"></style>
<style  scoped href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" ></style>
<style  scoped href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" ></style>
<style  scoped src="../../assets/css/table.css" ></style>


<template>
<div class="container" style="padding-top:150px;" >
   
   <table  style="font-size:15px;margin-bottom:200px;" class="table table-striped">
  <thead>
    <tr style="text-align:center;" >
      <th scope="col">Targat</th>
      <th scope="col">Numri Tel</th>
      <th scope="col">Qyteti</th>
      <th scope="col">Zona</th>
       <th  scope="col">Cmimi</th>
      <th scope="col">Ora</th>
      <th scope="col">Actions</th>
     
    </tr>
  </thead>
  <tbody>
    <tr style="text-align:center;" v-for="payparking in payparking" :key="payparking._id">
                    <td>{{ payparking.targat }}</td>
                    <td>{{ payparking.numritel }}</td>
                    <td>{{ payparking.qyteti }}</td>
                      <td>{{payparking.zona }}</td>
                      <td>{{payparking.cmimi}}</td>
                    <td>{{moment(payparking. updated_date).format('DD/MM/YYYY hh:mm')}} </td>
                    <td><button type="button" style="margin-right:15px;width:50px;font-size:12px;margin-left:-65px" class="btn btn-warning"  @click.stop="editpayparking(payparking._id)">Edit</button>
                    <button type="button" class="btn btn-danger"  style="margin-right:-65px;width:50px;font-size:12px" @click.stop="deletepayparking(payparking._id)">Delete </button></td>
                    
                    
                </tr>
  </tbody>
</table>

<div class="card-footer pb-0 pt-3">
            <jw-pagination :items="exampleItems" @changePage="onChangePage"></jw-pagination>
        </div>
</div>
</template>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.13.0/js/mdb.min.js"></script>
<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import axios from 'axios';
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'payparking ' + (i+1) }));
    export default {
      name: 'ShowPayParking',
        data(){
            return{
                payparking: [],
                     exampleItems,
         
        };
        
            },

        computed:{
          ...mapGetters(["user"])
        },
        created () {
        axios.get(`http://localhost:4000/payparking/`)
        .then(response => {
          if(this.user.data.firebase_id === "7MLDzYN8U7gsQowp8wEZYbgJTr73"){
          this.payparking = response.data
          }else{
            var filter=response.data.filter(p=>p.firebase_id===this.user.data.firebase_id)
            this.payparking=filter
          }
        })
        .catch(e => {
    console.log(e.message)
            })
      },
        methods: {
            onChangePage(payparking) {
            // update page of items
            this.payparking = payparking;
        },
            editpayparking(payparkingid){
              this.$router.push({
              name: 'historyedit',
              params: { id: payparkingid }
            }) 
          }
        ,deletepayparking (payparkingid){
            axios.delete('http://localhost:4000/payparking/' + payparkingid)
            .then((result) => {
              //refresh on same page
              this.$router.push({name:'home'})
            })
            .catch(e => {
              console.log(e.message)
})
        },
      }
       }

</script>
