const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project.controller');
router.post('/', projectCtrl.addProject);
router.get('/', projectCtrl.getAllProjects);
router.get('/:id', projectCtrl.getOneProject);
router.put('/:id', projectCtrl.updateOneProject);
router.delete('/:id', projectCtrl.deleteOneProject);
module.exports = router;
