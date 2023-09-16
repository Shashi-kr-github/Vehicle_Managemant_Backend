
const express = require('express');
const router = express.Router();
const User = require('../../model/serviceBooking.model');
const _ = require('lodash');



router.get('/random-number', (req, res) => {
    const randomNumber = _.random(1, 10000);
    let x = 100000000;
    let y = -10000000;
    while(y < x){
        y = y+1;
    }
    res.json({ randomNumber });
});

module.exports = router;
