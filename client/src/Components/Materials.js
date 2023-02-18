
import Button from "react-bootstrap/esm/Button"



const Materials  = ({name, cost, description, setMaterials, materialId, setProjects}) => {


    const updateProject = () => {
        alert(`added ${name} to project`)
    }

    const handleDelete = () => {
        // Simple DELETE request with fetch
        fetch(`/materials/${materialId}`, { method: 'DELETE' })
            .then(() => { 
                    setMaterials(currentMaterials => currentMaterials.filter(material => material.id !== materialId)) 
                    setProjects(current => current.map( p => ({...p, project_materials: p.project_materials.filter( pm => pm.name !== name ), total_cost: p.project_materials.filter( pm => pm.name !== name ).reduce((total, pm )=> total + pm.quantity * pm.cost, 0) } ))) 
                }
            )
    }


    return(
        <div className="card">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
            <h5 className="card-title">${cost}</h5>
            <p className="card-text">{description}</p>
            <Button onClick={updateProject} >Add to Project</Button>
            <Button onClick={handleDelete} >Delete Material from the database</Button>
  </div>
</div>
    )
}

export default Materials