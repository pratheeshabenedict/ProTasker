import React from 'react'
import { Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import TasksPage from '../pages/TaskPage';
import TaskList from '../pages/TaskList';
export const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/tasksform" element={<TasksPage/>}/>
      <Route path="/tasks" element={<TaskList/>}/>
    </>
  );
};

export default PublicRoutes;