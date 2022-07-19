const express = require('express');
const config = require('config');
// const NodeGeocoder = require('node-geocoder');
const bookingSlotRouter = express.Router();

const bookingSlot = require('../../models/bookingSlot');



bookingSlotRouter.route('/').get(function(req, res) {
    bookingSlot.find(function(err, bookingSlot) {
        if (err) {
            console.log(err);
        } else {
            res.json(bookingSlot);
        }
    });
});

/*bookingSlot.route(':id').get(function(req, res) {
    let id = req.params.id;
bookingSlot.findById(id, function(err, bookingSlot) {
        res.json(bookingSlot);
    });
});*/

bookingSlotRouter.route('/add').post(function(req, res) {
    
        //console.log("hello world");
        let book = new bookingSlot({
            username: req.body.username,
            user_gender: req.body.user_gender,
            user_contact: req.body.user_contact,
            user_address: req.body.user_address,
            booking_date: req.body.booking_date ,
            service_starttime: req.body.service_starttime,
            service_endtime: req.body.service_endtime
        });
        book.save()
        .then(book => {
           console.log("In response");
           //  console.log(res);
            console.log("Name is "+book.username);
            res.status(200).json({'bookingSlot': 'slot added successfully'});
        })
        .catch(err => {
            res.status(400).send(err);
        });
         
    })
        

    /*
choresRouter.route('/update/:id').post(function(req, res) {
    // console.log("route post: ");
    // console.log(req.params.id);
    Chore.findById(req.params.id, function(err, chore) {
        if (!chore)
            res.status(404).send('data is not found');
        else
            chore.chore_description = req.body.chore_description;
            chore.chore_responsible = req.body.chore_responsible;
            chore.chore_completed = req.body.chore_completed;
            chore.chore_address = req.body.chore_address;
            chore.chore_phone = req.body.chore_phone;
            chore.chore_accepted = req.body.chore_accepted;
            chore.save().then(chore => {
                res.json('chore updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});*/

module.exports = bookingSlotRouter;