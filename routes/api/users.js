const express = require('express');

const router = express.Router();

//@route    POSt api/users
//@desc     Register user
//@access   Public

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
