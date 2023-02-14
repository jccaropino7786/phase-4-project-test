import { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const UseContext = createContext()

const LogIn = ({children}) => {

    const initialFormValues = {
        email:'',
        password:'',
    }  

    const [User, setUser] = useState ([])
    const [formData, setFormData]= useState(initialFormValues);

    function validateForm() {
        return formData.email.length > 0 && formData.password.length > 0;
    }

    useEffect ( ( ) => {
        fetch("/authorized_user")
        .then ((res) => {
            if (res.ok) {
                res.json()
                .then ((user) => {
                    setUser (user);
                });
            } else {
                res.json ()
                .then( (errorObj) => alert (errorObj.errors) )
            }
        })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };


  function handleSubmit(event) {
    event.preventDefault()
    
    fetch("log_in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(resp => {
        if (resp.ok) {
            resp.json().then(userObj => {
                setUser(userObj)
                alert("User logged in!")
            })
        } else{
            // resp.json().then( = alert())
        }
    })
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>

  );

}

export default LogIn