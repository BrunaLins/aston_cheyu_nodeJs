const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const property_controller = require('../controllers/property.controller');

router.get('/',auth(),agent_controller.agent_list)
router.post('/register',agent_controller.agent_register)
router.post('/login',agent_controller.agent_login)
router.get('/',property_controller.list_property);
router.get('/keyword',property_controller.keyword_property);
router.get('/caracter',property_controller.caracter_property);
router.get('/:id',property_controller.detail_property);
router.post('/',property_controller.add_property);
router.put('/:id',property_controller.edit_property);
router.delete('/:id',property_controller.delete_property);

module.exports = router;

