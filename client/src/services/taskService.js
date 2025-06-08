// src/services/taskService.js
import API from '../api/api';

export const getTasks = async () => {
    const response = await API.get('/tasks');
    return response.data;
};

export const createTask = async (taskData) => {
    const response = await API.post('/tasks', taskData);
    return response.data;
};

export const updateTask = async (id, taskData) => {
    const response = await API.put(`/tasks/${id}`, taskData);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await API.delete(`/tasks/${id}`);
    return response.data;
};
