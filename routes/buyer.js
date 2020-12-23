const express = require('express');
const router = express.Router();
const buyer_controller = require('../controllers/buyer.controller');

router.get('/',buyer_controller.list_buyer);
router.get('/:id',buyer_controller.detail_buyer);
router.post('/',buyer_controller.add_buyer);
router.put('/:id',buyer_controller.edit_buyer);
router.delete('/:id',buyer_controller.delete_buyer);

module.exports = router;
