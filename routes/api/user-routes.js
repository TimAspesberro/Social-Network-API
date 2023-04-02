const router = require('express').Router();

const {
  getUsers,
  getUserSingle,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUserSingle).put(updateUser).delete(deleteUser);


module.exports = router;
