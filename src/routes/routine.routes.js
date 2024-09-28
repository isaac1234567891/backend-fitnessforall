const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { createRoutine } = require('../controllers/routine.controller');
const router = express.Router();

router.post('/', authUser, createRoutine);


module.exports = router;