const router = require('express-promise-router')();

const {
  getUsers,
  addUser,
  getUserId,
  replaceUser,
  updateUser,
  delUser
} = require('../controllers/userController');

router
  .route('/')
  .get(getUsers)
  .post(addUser);

router
  .route('/:id')
  .get(getUserId)
  .put(replaceUser)
  .patch(updateUser)
  .delete(delUser);

module.exports = router;
