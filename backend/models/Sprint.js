const mongoose = require('mongoose');
const sprintSchema = mongoose.Schema(
  {
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Sprint', sprintSchema);
