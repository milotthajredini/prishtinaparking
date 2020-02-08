<style src="../assets/css/payparking.css" ></style>
<style scoped src="../assets/css/scroll-footer.css"></style>
<style src="../assets/css/Footer-Basic.css" scoped></style>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>
<template>
<div id="site-content">
<div class="backgroundi">
        
   <div id="forma1" class="d-xl-flex justify-content-xl-center align-items-xl-center">
       <h1 id="parkingslog">Paguaj parkingun</h1>
        <form action="#" @submit="onSubmit"   style="width: 600px;height: 200px;">
          <input v-model="payparking.targat"  required class="form-control d-inline" type="text" id="targat" pattern="[0-9]{2}-[0-9]{3}-[a-zA-Z]{2}"  placeholder="Targat" style="font-family: Montserrat, sans-serif;font-size: 15px;width: 315px;margin-right: 15px;text-transform: uppercase;padding-left:15px;">
          <button type="button" id="shto" class="btn" style="background-color: #ffffff;color: ;border-radius: 30px;border-color: rgb(206,212,218);border-width: 3px;background-image: url(&quot;https://img.icons8.com/cotton/2x/plus--v3.png&quot;);background-size: 30px 30px;width: 108px;background-repeat: no-repeat;background-position: 5px center;text-align: right;height: 47px;font-weight: bold;font-family: Montserrat, sans-serif;font-size: 15px;margin-top: -4px;padding-right: 20px;">Shto</button>
            <input v-model="payparking.numritel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="Numri i telefonit" type="phone" class="form-control" style="width: 438px;font-size: 15px;color: #666666;font-family: Montserrat, sans-serif;height: 47px;" required>
<select required class="form-control" style="width: 438px;font-size: 15px;color: #666666;font-family: Montserrat, sans-serif;height:47px;">
                <option  disabled  selected>Qyteti:</option>
                <option value="01">Prishtinë</option>
                <option value="04">Prizren</option>
                <option value="05">Ferizaj</option>
                   <option value="03">Pejë</option>
                      <option value="07">	Gjakovë</option>
                         <option value="06">Gjilan</option>
                            <option value="02">Mitrovicë</option>
                               <option value="01">Podujeva</option>
                                  <option value="02">Vushtrri</option>
                </select>
                <label style="color: #84bcfd;font-family: Montserrat, sans-serif;font-size: 18px;width: 200px;font-weight: bold;">Zgjith zonën:</label>
             <div class="radiobtn" style="margin-bottom:10px;margin-top:5px;">
            
  <b-form-radio style="margin-right:15px;font-size:15px;" required  name="radio-size" v-model="payparking.zona" v- value="2€"  size="lg">Zona I 2€/h</b-form-radio>
  <b-form-radio   style="margin-right:15px;font-size:15px;" name="radio-size"  v-model="payparking.zona"  value="1€" size="lg">Zona II 1€/h</b-form-radio>
  <b-form-radio  style="margin-right:15px;font-size:15px;" name="radio-size" v-model="payparking.zona"  value="0.50€"  size="lg">Zona III 0.50€/h</b-form-radio>
             
</div>
<div class="btnpay">
<button disabled class="btn btn-primary" id="totalibtn" type="button" style="width: 210px;border-width: 3px;border-radius: 30px;background-color: #fff;font-size: 20px;color: #252525;font-family: Montserrat, sans-serif;font-weight: bold;height: 47px;margin-right: 15px;border-color: #8ed2c0;">Totali:<strong>{{ selected }}</strong></button> 

   
    <button
        class="btn btn-primary" id="paguajbtn" type="submit" style="width: 210px;height: 47px;border-radius: 30px;font-size: 20px;font-family: Montserrat, sans-serif;font-weight: bold;background-color: #84bcdf;border-color: #84bcdf;">Paguaj</button>
      </div>  </form>
        </div>
</div>
</div>

</template>



<script>
/* eslint-disable*/
import axios from 'axios'

export default {
  name: 'CreatePayparking',
  data () {
    return {
      payparking:{},
      selected:' '
    }
  },
  methods: {
    onSubmit () {
       axios.post(`http://localhost:4000/payparking`, this.payparking)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'user',
          //params: { id: response.data._id }
        })
        })
      
    }
  }
  }
</script>

