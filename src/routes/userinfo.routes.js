const express = require( 'express' );
const {createuserinfo, getUserInfo} = require('../controllers/userinfo.controller');
const router = express.Router();

/**Definir las rutas para la entidad usuario 
 * http://localhost:3000/api/auth
*/

// Crear un usuario --> http://localhost:3000/api/auth/register
router.post( '/', createuserinfo );
router.get('/', getUserInfo);


module.exports = router;