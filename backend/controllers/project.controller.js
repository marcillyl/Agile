const Project = require('../models/Project');
exports.createProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};
