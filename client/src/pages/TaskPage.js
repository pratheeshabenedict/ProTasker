// src/pages/TaskForm.jsx
import { useState } from 'react';
import { createTask } from '../services/taskService';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [form, setForm] = useState({ title: '', description: '', status: 'pending' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(form);
      navigate('/tasks'); 
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to create task');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Task
        </button>
        
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => navigate('/tasks')}
          className="text-blue-600 hover:underline"
        >
          📋 View My Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskForm;