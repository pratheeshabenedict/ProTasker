const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// @route   POST /api/tasks
// @desc    Create a new task
router.post('/', createTask);

// @route   GET /api/tasks
// @desc    Get all tasks
router.get('/', getAllTasks);

// @route   GET /api/tasks/:id
// @desc    Get task by ID
router.get('/:id', getTaskById);

// @route   PUT /api/tasks/:id
// @desc    Update task by ID
router.put('/:id', updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete task by ID
router.delete('/:id', deleteTask);

module.exports = router;
