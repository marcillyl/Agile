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
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.params.id });
    console.log(projects);
    if (!projects) {
      res.status(404).json({ message: 'Not found!' });
      return;
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getOneProject = async (req, res) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json(error));
};
exports.updateOneProject = async (req, res) => {};
exports.deleteOneProject = async (req, res) => {};
