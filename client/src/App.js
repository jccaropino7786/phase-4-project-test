import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import Auth from './Components/Auth';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
    })
  },[])

  if(!currentUser) return <Auth setCurrentUser={setCurrentUser} />
  return (
    <div>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route path="/auth" element={ <Auth setCurrentUser={setCurrentUser} /> }/>
            <Route path="new_project" element={ <ProjectForm/> }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;

