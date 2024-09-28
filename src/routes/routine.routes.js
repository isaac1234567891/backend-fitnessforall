const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { createRoutine, updatedRoutinePatch } = require('../controllers/routine.controller');
const router = express.Router();

router.post('/', authUser, createRoutine);

router.patch('/:id',authUser, updatedRoutinePatch);


module.exports = router;