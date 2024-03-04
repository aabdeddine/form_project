import React, { useEffect } from "react";
//import ProjectList from "./components/ProjectList";
//import ProjectForm from "./components/ProjectForm";
import ProjectList from './components/ProjectList';
import ProjectPage from './components/ProjectPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ProjectContext} from "./components/context"
import './App.css'
import ProjectForm from "./components/ProjectForm";
//import { response } from "express";




const App = () => {

  const [projects, setProjects] = React.useState([]);
  //const url = import.meta.env.VITE_DATABASE_URL

  const getProject = async () => {
    const response = await fetch("http://localhost:8080/projects");
    const project = await response.json();
    console.log(project);
    return project;

  }

  useEffect(()=> {
    getProject().then(response => {setProjects(response)})
  }, [])

  return (
    <>
      
      { projects && projects.map( (project, key) => {
        console.log("reussi");
        return(
          <div key={key}> {project.title}</div>
          
        )
      })}


      <ProjectContext.Provider value={{projects, setProjects}}>
            <Router>
                <Routes>
                    <Route path="/" element={<ProjectList/>} />

                    <Route path="/project/:projectId" element={<ProjectPage/>} />
                </Routes>
            </Router>
          
          <ProjectForm/>
      </ProjectContext.Provider>
      
      
    </>
  )
}

export default App
