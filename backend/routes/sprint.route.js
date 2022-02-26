const express = require('express');
const router = express.Router();
const sprintCtrl = require('../controllers/sprint.controller');
router.post('/', sprintCtrl.addSprint);
router.get('/:id', sprintCtrl.getAllSprints);
router.delete('/:id', sprintCtrl.deleteOneSprint);
module.exports = router;
