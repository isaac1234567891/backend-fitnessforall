const express = require( 'express' );
const { register } = require('../controllers/auth.controller');
const createuserinfo = require('../controllers/userinfo.controller');
const { authUser } = require('../middlewares/auth-user.middleware');
const router = express.Router();

/**Definir las rutas para la entidad usuario 
 * http://localhost:3000/api/auth
*/

// Crear un usuario --> http://localhost:3000/api/auth/register
router.post( '/', createuserinfo );



module.exports = router;