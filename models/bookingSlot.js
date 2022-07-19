const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingSlot = new Schema({
    username: {
        type: String
    },
    user_gender: {
        type: String
    },
    
    user_contact: {
        type: String
    },
    
    user_address:{
        type: String
    },
    
    booking_date:{
        type: String
    },
    
    service_starttime:{
        type: String
    },

    service_endtime: {
        type: String
    }

	
});

module.exports = mongoose.model('bookingSlot', bookingSlot);