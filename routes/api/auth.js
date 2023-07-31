const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/Users');

//@route    Get api/auth
//@desc     Test route
//@access   Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(401).send('Server error');
  }
});

module.exports = router;
