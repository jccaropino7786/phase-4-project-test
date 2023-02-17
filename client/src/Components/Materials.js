import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"
import { useState } from "react";


const Materials  = ({name, cost, description, setMaterials, materialId, setProjects}) => {

    


    const updateProject = () => {
        alert(`added ${name} to project`)
    }

    const handleDelete = () => {
        // Simple DELETE request with fetch
        fetch(`/materials/${materialId}`, { method: 'DELETE' })
            .then(() => { 
                    setMaterials(currentMaterials => currentMaterials.filter(material => material.id !== materialId)) 
                    // setProjects(current => current.map( p =>  p.project_materials.map( pm => pm.quantity * pm.cost))) 
                }
            )
    }


    return(
        <div class="card">
            <h5 class="card-header">{name}</h5>
            <div class="card-body">
            <h5 class="card-title">${cost}</h5>
            <p class="card-text">{description}</p>
            <Button onClick={updateProject} >Add to Project</Button>
            <Button onClick={handleDelete} >Delete Material from the database</Button>
  </div>
</div>
    )
}

export default Materials