const mongoose =require('mongoose');

const PayparkingSchema = mongoose.Schema({
    targat:String,
    numritel:String,
    qyteti:String,
    zona:String,
    updated_date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Payparking',PayparkingSchema);

