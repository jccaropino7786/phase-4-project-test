import Card from "react-bootstrap/Card"

const ProjectMaterials = ({quantity, cost, name}) => {



    return(
        <>
        <div class="card">
        <ul class="mats">
            <li class="matsI">Material: {name}</li>
            <li class="matsI">Cost: ${cost}</li>
            <li class="matsI">Quantity: {quantity}</li>
        </ul>
        </div>
        
        
        

        </>

    )
}

export default ProjectMaterials