import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { useEffect, useState } from 'react';
import Projects from './Components/Projects';

import MatrialsContainer from './Components/MaterialContainer';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [materialNames, setMaterialNames] = useState([])
  const [errors, setErrors] = useState([])
  const [login, setLogin] = useState(true)

  useEffect(() => {
    const fetchData = () =>
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
      // else {
      //   const error = res.json().then(error = setError(error))
      // }
    })
    if (!currentUser)
    {fetchData() } 
  },[currentUser])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("/projects")
        const projectsList = await resp.json()
        setProjects(projectsList)
      } catch (error) {
        alert(error)
      }
     }
  
     if (currentUser)
    {fetchData() } 
  },[currentUser])


  const filteredProjects =  currentUser ? projects.filter(project => project.user.id === currentUser.id) : []

  const projectList = filteredProjects.map((project) => (
    <Projects
    key={project.id}
    singleProject={project}
    projectId={project.id} 
    summary={project.summary}
    totalCost={project.total_cost}
    projectMaterials={project.project_materials}
    materials={project.materials}
    status={project.status}
    projects={projects}
    setProjects={setProjects}
    materialNames={materialNames}
    setMaterialNames={setMaterialNames}
    ></Projects>
  ))

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("/materials")
            const materialsList = await res.json()
            setMaterialNames(materialsList)
            } catch(error){
                alert(error)
            }
        }
        if (currentUser)
    {fetchData() } 
  },[currentUser])

      
 


  if(!currentUser) {
    return login ? <LogIn setLogin={setLogin} setCurrentUser={setCurrentUser} /> : <SignUp setLogin={setLogin} setCurrentUser={setCurrentUser} /> 
  }
  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="App">
          <Routes>
            
            {/* <Route path="/login" element={ <LogIn setCurrentUser={setCurrentUser} /> }/>
            <Route path="/signup" element={ <SignUp setCurrentUser={setCurrentUser} /> }/> */}
            <Route path="/projects" element={ projectList }/>
            <Route path="/new_project" element={ <ProjectForm setProjects={setProjects}/> }/>
            <Route path="/materials" element= {<MatrialsContainer materialNames={materialNames} setProjects={setProjects} setMaterialNames={setMaterialNames}/> } />
          </Routes>
      </div>
    </div>
  );
}

export default App;

