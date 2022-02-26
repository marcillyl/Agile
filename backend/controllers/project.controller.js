const Project = require('../models/Project');
exports.addProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getAllProjects = async (req, res) => {};
exports.getOneProject = async (req, res) => {};
exports.updateOneProject = async (req, res) => {};
exports.deleteOneProject = async (req, res) => {};
