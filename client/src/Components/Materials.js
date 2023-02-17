import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"

const Materials  = ({name, cost, description}) => {

    const updateProject = () => {
        alert(`added ${name} to project`)
    }


    return(
        <div class="card">
            <h5 class="card-header">{name}</h5>
            <div class="card-body">
            <h5 class="card-title">${cost}</h5>
            <p class="card-text">{description}</p>
            <Button onClick={updateProject} >Add to Project</Button>
  </div>
</div>
    )
}

export default Materials