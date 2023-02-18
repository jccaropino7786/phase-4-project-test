

const ProjectMaterials = ({quantity, cost, name}) => {



    return(
        <>
        <div className="card">
        <ul className="mats">
            <li className="matsI">Material: {name}</li>
            <li className="matsI">Cost: ${cost}</li>
            <li className="matsI">Quantity: {quantity}</li>
        </ul>
        </div>
        
        
        

        </>

    )
}

export default ProjectMaterials