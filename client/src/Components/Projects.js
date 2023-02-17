
import Button from "react-bootstrap/esm/Button"
import { useState } from "react"
import Form from "react-bootstrap/Form";

const Projects = ({projects, setProjects, projectId, summary, status, projectMaterials}) => {

 const [ isFlipped, setIsFlipped] = useState(true)
 const [ summaryInput, setSummaryInput] = useState(summary)

 
 const materialsList = projectMaterials.map(project => [project.id, project.cost])
//  console.log(materialsList)

  const handleChange = (e) => {
   
    const newValue = e.target.value
      
    fetch(`/projects/${projectId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: newValue })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }

  const handleDelete = () => {
    // Simple DELETE request with fetch
    fetch(`/projects/${projectId}`, { method: 'DELETE' })
        .then(() => setProjects(currentProjects => currentProjects.filter(project => project.id !== projectId)))
}

  const flip = () => {
    setIsFlipped(currentValue => !currentValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newProject = {
      summary: summaryInput
      };
    
  fetch(`/projects/${projectId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( newProject )
  })
    .then(response => {
      
      if (response.status === 202) {
        response.json().then(data => {
          // console.log(data)
          const index = projects.findIndex(project => project.id === data.id)
          setProjects( currentProjects => [...currentProjects.slice(0,index), data, ...currentProjects.slice(index +1)])
        })
      } else {
        response.json().then(error => alert(error.errors))
      }
    })
    .catch(error => alert(error));
    flip()

  }
  
  return(
    
    <>
    {isFlipped ? 
    <div class="card">
        <Button onClick={flip}>Edit Project</Button>

       <h2 class="card-header">{summary}</h2>
       <div class="card-body">{status}
       <p class="card-text">{materialsList}</p>
       </div>
   </div> 

   :(

<> 
    <Button onClick={flip}>Cancel Changes</Button>
    <Form onSubmit={handleSubmit}>
    <div class="card">
    <Button type="submit" >Save Project</Button>
      
          <Form.Control
            name="summary"
            type="text"
            value={summaryInput}
            onChange={(e) => setSummaryInput(e.target.value)}
          />
        <div class="card-body">
            <select onChange={handleChange} name="dropDown" id="statusDropdown">
              <option value="{status}">{status}</option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
              <option value="rejected">rejected</option>
            </select>
        <p class="card-text">{materialsList}</p>
        
        </div>
      </div>
    </Form> 
    <Button onClick={handleDelete} >Delete Project</Button>
    </>
    )
  }
</>
)
}


export default Projects;