import { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/taskService';
import { useAuth } from '../context/AuthContext';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', status: 'pending' });
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      setTasks(data);
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || "Failed to delete");
    }
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditForm({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(editingTaskId, editForm);
      const updatedTasks = tasks.map((task) =>
        task._id === editingTaskId ? { ...task, ...editForm } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } catch (err) {
      alert(err.response?.data?.error || "Failed to update task");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Your Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id} className="bg-white p-4 rounded shadow mb-4">
          {editingTaskId === task._id ? (
            <form onSubmit={submitEdit} className="space-y-2">
              <input
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                className="w-full px-2 py-1 border rounded"
              />
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                className="w-full px-2 py-1 border rounded"
              />
              <select
                name="status"
                value={editForm.status}
                onChange={handleEditChange}
                className="w-full px-2 py-1 border rounded"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingTaskId(null)}
                  className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-sm text-gray-500 mb-2">Status: {task.status}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(task)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  disabled={user.role !== 'admin'}
                  className={`px-3 py-1 rounded text-white ${
                    user.role === 'admin'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
