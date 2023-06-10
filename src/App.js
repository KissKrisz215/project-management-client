import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Route ,Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectListPage } from './pages/ProjectListPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ErrorPage } from './pages/ErrorPage';
import {EditProjectPage} from './pages/EditProjectPage';
import { TasksDetailsPage } from './pages/TasksDetailsPage';

function App() {

  return (
    <div className="App">
    <Navbar />

    <Routes>
      <Route  path="/" element={<HomePage />}></Route>
      <Route path="/projects" element={<ProjectListPage/>}></Route>
      <Route path="/projects/:id" element={<ProjectDetailsPage />}></Route>
      <Route path="/projects/edit/:id" element={<EditProjectPage />}></Route>
      <Route path="/tasks/:id" element={<TasksDetailsPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
