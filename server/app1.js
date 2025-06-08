const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./src/routes/taskRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorHandler'); // ✅ Import
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes')

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',  // <-- frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// 404 Middleware (should come after routes)
app.use(notFound);

// Global Error Handler Middleware (last middleware)
app.use(errorHandler);

module.exports = app;
