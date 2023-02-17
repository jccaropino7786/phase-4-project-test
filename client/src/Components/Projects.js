import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"

const Projects = ({projects, setProjects, projectId, summary, status, project_materials}) => {

  const handleDelete = () => {

  }

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
 
  return(
    <div class="card">
        <h2 class="card-header">{summary}</h2>
        <div class="card-body">
            <select onChange={handleChange} name="dropDown" id="statusDropdown">
              <option value="{status}">{status}</option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
              <option value="rejected">rejected</option>
            </select>
        <p class="card-text">{project_materials}</p>
        <Button onClick={handleDelete} >Delete Project</Button>
</div>
</div>
)
}


export default Projects;