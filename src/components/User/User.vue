<template>
<div class="container" style="padding-top:150px;">
    <table class="table" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="contact in contact" :key="contact._id">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.description }}</td>
                    <button type="button" class="btn btn-warning"  @click.stop="editcontact(contact._id)">Edit</button>
                    <button type="button" class="btn btn-danger"  @click.stop="deletecontact(contact._id)">Delete </button>
                </tr>
  </tbody>
</table>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
    export default {
      name: 'ShowContact',
        data(){
            return{
                contact: {}
            }
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
          }
        ,deletecontact (contactid){
            axios.delete('http://localhost:4000/contact/' + contactid)
            .then((result) => {
              //refresh on same page
              this.$router.go({
               
              })
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
      }
  }

</script>