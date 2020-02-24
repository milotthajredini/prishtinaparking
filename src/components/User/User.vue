<template>
<div   v-if="user.data.firebase_id==='7MLDzYN8U7gsQowp8wEZYbgJTr73'" class="container" style="padding-top:150px;">
     <table style="font-size:15px;margin-bottom:200px;" class="table table-bordered">
  <thead>
  <tr style="text-align:center;" >
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Comments</th>
      <th scope="col">Ora</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align:center;" v-for="contact in contact" :key="contact._id">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.description }}</td>
                   <td>{{moment(contact.updated_date).format('DD/MM/YYYY hh:mm')}} </td>
                    <td><button type="button" style="margin-right:5px;width:50px;font-size:12px;margin-left:-65px" class="btn btn-warning"  @click.stop="editcontact(contact._id)">Edit</button>
                    <button type="button" class="btn btn-danger"  style="margin-right:-65px;width:50px;font-size:12px" @click.stop="deletecontact(contact._id)">Delete </button></td>
                    
                </tr>
  </tbody>
</table>
</div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import axios from 'axios';
    export default {
      name: 'ShowContact',
        data(){
            return{
                contact: {}
            }
        },
        computed:{
        ...mapGetters(["user"])
        },
        created () {
        axios.get(`http://localhost:4000/contact/`)
        .then(response => {
          this.contact = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
        methods: {
            editcontact(contactid){
              this.$router.push({
              name: 'useredit',
              params: { id: contactid }
            })
          } ,
          deletecontact (contactid){
            axios.delete('http://localhost:4000/contact/' + contactid)
            .then((result) => {
              //refresh on same page
              this.$router.go()
            })
            .catch(e => {
              console.log(e.message)
})
        }
      }
  }

</script>