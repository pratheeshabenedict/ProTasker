const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const { protect, authorize } = require('../middleware/authMiddleware');

// Protect all routes
router.use(protect);

// @route   POST /api/tasks
// @desc    Create a new task (any logged-in user)
router.post('/', createTask);

// @route   GET /api/tasks
router.get('/', getAllTasks);

// @route   GET /api/tasks/:id
router.get('/:id', getTaskById);

// @route   PUT /api/tasks/:id
router.put('/:id', updateTask);

// @route   DELETE /api/tasks/:id
// Only admin can delete
router.delete('/:id', authorize('admin'), deleteTask);

module.exports = router;
