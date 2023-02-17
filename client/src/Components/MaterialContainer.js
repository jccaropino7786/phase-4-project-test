import Materials from "./Materials";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MatrialsContainer =({materials, setMaterials}) => {

    const [showForm, setShowForm] = useState(false)
    const [btnTxt, setBtnTxt] = useState(true)

    const flipForm = () => {
        setShowForm(currentValue => !currentValue)
        setBtnTxt(currentValue => !currentValue)
      }

    const initialFormValues = {
        name: "",
        cost: "",
        description: "",
    };

    const [formData, setFormData] = useState(initialFormValues)

    function validateForm() {
        return formData.name.length > 1 && formData.cost.length > 0;
    }

    const materialList = materials.map((material) => (
        <Materials
        key={material.id} 
        materialId={material.id}
        name={material.name}
        cost={material.cost}
        description={material.description}
        setMaterials={setMaterials}
        
        ></Materials>
      ))
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const newMaterial = {
            name: formData.name,
            cost: formData.cost,
            description: formData.description
        };
        console.log(newMaterial)

        fetch("/materials", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMaterial),
        })
        .then(response => response.json())
        .then(newData => setMaterials(currentMaterials => [ newData, ...currentMaterials ]))

        setFormData(initialFormValues);
    }

    return(
        <div>
            <Button onClick={flipForm} > {btnTxt ? "Add Materials": "Hide Form"}</Button>
            {showForm ?
            <>
                <h1>New Material Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="materialForm">
                        <Form.Label></Form.Label>
                        <Form.Control
                            placeholder="Name..."
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                            placeholder="Cost..."
                            name="cost"
                            type="number"
                            value={formData.cost}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                            placeholder="Description..."
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Form>
                    </>
                     : (
            <></>
        )
}



            {materialList}
        </div>
    )
}

export default MatrialsContainer