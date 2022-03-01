const mongoose = require('mongoose');
const projectSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      default: 'http://localhost:4000/assets/images/IMG_0030.jpg',
    },
    isDone: {
      type: Boolean,
      required: true,
      default: 0,
    },
    usedBy: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Project', projectSchema);
