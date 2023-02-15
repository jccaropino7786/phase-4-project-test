import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
    })
  },[])

  // if(!currentUser) return <LogIn />
  return (
    <div>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route path="/login" element={ <LogIn setCurrentUser={setCurrentUser} /> }/>
            <Route path="/signup" element={ <SignUp setCurrentUser={setCurrentUser} /> }/>
            <Route path="/new_project" element={ <ProjectForm/> }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;

