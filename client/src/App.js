import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProjectForm from './Components/ProjectForm';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div>
      <NavBar/>
        <div className="App">
          <Routes>
            <Route path="/" element={ <SignIn/> }/>
            <Route path="new_project" element={ <ProjectForm/> }/>
          </Routes>
      </div>
    </div>
  );
}

export default App;

