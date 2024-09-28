const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { createRoutine, updatedRoutinePatch, deleteRoutine, getRoutines } = require('../controllers/routine.controller');
const { deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getRoutines);

router.get('/:id',)

router.post('/', authUser, createRoutine);

router.patch('/:id',authUser, updatedRoutinePatch);

router.delete('/:id', authUser, deleteRoutine);


module.exports = router;