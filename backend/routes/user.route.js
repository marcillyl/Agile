const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
router.get('/:id', userCtrl.getOneUser);
router.put('/:id', userCtrl.updateOneUser);
router.delete('/:id', userCtrl.deleteOneUser);
module.exports = router;
