const mongoose = require('mongoose');
const projectSchema = mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: { type: String, required: true, trim: true },
    status: { type: Boolean, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Project', projectSchema);
