import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const ProjectForm  = ({setProjects}) => {

    const initialFormValues = {
        summary: 'Demolition job to tear down react',
    };

    const [formData, setFormData] = useState(initialFormValues)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/projects", {replace: true})

        const newProject = {
            summary: formData.summary
        };
        
        fetch("/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
        })
        .then(response => response.json())
        .then(newData => setProjects(currentProjects => [ newData, ...currentProjects ]))

        setFormData(initialFormValues);
    }


    return(
    <div className="NewProject">
      <h1>New Project Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="summary">
            <Form.Label>Project summary</Form.Label>
            <Form.Control
                autoFocus
                name="summary"
                type="text"
                value={formData.summary}
                onChange={handleChange}
            />
            </Form.Group>
            <Button block size="lg" type="submit">
                Create New Project
            </Button>
        </Form>
      </div>
    )
}

export default ProjectForm