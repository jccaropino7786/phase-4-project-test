import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';

function App() {
  return (
    <div>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route path="/new_user" element={ <SignUp/> }/>
            <Route path="/log_in" element={ <LogIn/> }/>
            <Route path="new_project" element={ <ProjectForm/> }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;

