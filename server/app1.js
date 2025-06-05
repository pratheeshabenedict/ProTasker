const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./src/routes/taskRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorHandler'); // ✅ Import

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// 404 Middleware (should come after routes)
app.use(notFound);

// Global Error Handler Middleware (last middleware)
app.use(errorHandler);

module.exports = app;
