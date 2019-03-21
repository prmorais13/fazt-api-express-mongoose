const router = require('express-promise-router')();

const { getUsers, addUser } = require('../controllers/userController');

router
  .route('/')
  .get(getUsers)
  .post(addUser);

module.exports = router;
