<template>
<div style="padding-top:200px;margin-left:40%;width:350px;" class="container">
     <h2 style="margin-left:50px;margin-bottom:20px;">Edit Users Complains</h2>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
    <form @submit="onSubmit">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Name" v-model="contact.name">
    </div>
    <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" v-model="contact.email">
    </div>
    <div class="form-group">
    <textarea class="form-control" rows="4" placeholder="Enter your comments about site" v-model="contact.description"></textarea>
    </div>
      <div class="form-group">
    <input type="submit"  style="width:320px:font-size:12px;"  class="btn btn-secondary btn-block" value="Edit">
      </div>  
    </form>
    </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'EditContact',
  data () {
    return {
      contact: {}
    }
  },
  created () {
    axios.get(`http://localhost:4000/contact/` + this.$route.params.id)
    .then(response => {
      this.contact = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      axios.put(`http://localhost:4000/contact/` + this.$route.params.id, this.contact)
      .then(response => {
        this.$router.push({
          name: 'user',
          //params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>