const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: String,
    email:String,
    description:String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Contact', ContactSchema);