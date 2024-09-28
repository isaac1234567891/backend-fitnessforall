const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { createRoutine, updatedRoutinePatch, deleteRoutine } = require('../controllers/routine.controller');
const { deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

router.post('/', authUser, createRoutine);

router.patch('/:id',authUser, updatedRoutinePatch);

router.delete('/:id', authUser, deleteRoutine);


module.exports = router;