const mongoose = require('mongoose');

// Create Task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
