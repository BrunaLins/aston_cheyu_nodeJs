const express = require('express');
const router = express.Router();
const agent_controller = require('../controllers/agent.controller');

router.get('/',agent_controller.list_agent);
router.get('/:id',agent_controller.detail_agent);
router.post('/',agent_controller.add_agent);
router.put('/:id',agent_controller.edit_agent);
router.delete('/:id',agent_controller.delete_agent);

module.exports = router;
