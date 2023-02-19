
import Button from "react-bootstrap/esm/Button"
import { useState } from "react"
import Form from "react-bootstrap/Form";
import ProjectMaterials from "./ProjectMaterials";


const Projects = ({singleProject, projects, setProjects, projectId, summary, status, projectMaterials, totalCost, materials, materialNames, setMaterialNames}) => {

// console.log(materialNames.map(MN => MN.name))
// console.log(materials)


 const [ isFlipped, setIsFlipped] = useState(true)
 const [ summaryInput, setSummaryInput] = useState(summary)
 const [quantityInput, setQuantityInput] = useState("")
 const [materialInput, setMaterialInput] = useState("")

                        
 const materialsList = projectMaterials.map((projectMaterial) =>(
    <ProjectMaterials
    key={projectMaterial.id}
    quantity={projectMaterial.quantity}
    cost={projectMaterial.cost}
    name={projectMaterial.name}
    ></ProjectMaterials>
 ))


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


  const  dropDownOptions = materialNames.length > 0 && materialNames.map((materialName) => (
    <option 
    key={materialName.id} 
    value={materialName.id} 
    >
      {materialName.name} 
    </option>
    ));

   const handleAddMaterialToProject = (e) => {
        e.preventDefault()

        const addProjectMaterial = {
          quantity: quantityInput,
          material_id: materialInput,
          project_id: projectId
      }

      // console.log(addMaterial)

      fetch("/project_materials", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addProjectMaterial),
    })
    .then(response => response.json())
    .then(newData => console.log(newData))
      // setProjects(currentMaterials => [ newData, ...currentMaterials ]))

  }
   
  return(
    
    <>
    {isFlipped ? 
    <div className="card">
        <Button onClick={flip}>Edit Project</Button>

       <h2 className="card-header">{summary}</h2>
       <div className="card-body">{status}
       <p className="card-text">Total Project Cost: ${totalCost}</p>
       </div>


        <Form onSubmit={handleAddMaterialToProject}>
          <Form.Select onChange = {(e) => 
            setMaterialInput(e.target.value)}>
            {dropDownOptions}           
          </Form.Select>
          <Form.Control
            name="quantity"
            type="number"
            value={quantityInput}
            onChange={(e) => setQuantityInput(e.target.value)}
          />
          <Button type="submit" >Add Material</Button>
        </Form>

      <div>
       {materialsList}
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