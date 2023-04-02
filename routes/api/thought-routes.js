const router = require('express').Router();

const {
  getThoughts,
  getThoughtSingle,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');


router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtSingle).put(updateThought).delete(deleteThought);


module.exports = router;
