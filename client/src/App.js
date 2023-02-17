import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { useEffect, useState } from 'react';
import Projects from './Components/Projects';
import Materials from './Components/Materials';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])
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

  const projectList = projects.map((project) => (
    <Projects
    key={project.id}
    projectId={project.id} 
    summary={project.summary}
    projectMaterials={project.project_materials}
    status={project.status}
    projects={projects} 
    setProjects={setProjects}
    ></Projects>
  ))

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("/materials")
            const materialsList = await res.json()
            setMaterials(materialsList)
            } catch(error){
                alert(error)
            }
        }
        if (currentUser)
    {fetchData() } 
  },[currentUser])

      const materialList = materials.map((material) => (
        <Materials
        key={material.id} 
        name={material.name}
        cost={material.cost}
        description={material.description}
        
        ></Materials>
      ))
 


  if(!currentUser) {
    return login ? <LogIn setCurrentUser={setCurrentUser} /> :<SignUp setCurrentUser={setCurrentUser} /> 
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
            <Route path="/materials" element={ materialList }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;

