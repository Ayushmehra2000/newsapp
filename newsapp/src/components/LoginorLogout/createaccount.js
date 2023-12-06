import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { createRef } from 'react';
import { useValue } from '../../contextAPI/newsappContext';

const Createaccount = () => {
    const name = createRef();
    const password = createRef();
    const email = createRef();
    const { createNewUser } = useValue();
    const createUser = (name,email,password) => {
        console.log(name,email,password);
        createNewUser(name,email,password);
        cleanup();
    }
    const cleanup = () => {
        name.current.value = '';
        password.current.value = '';
        email.current.value = '';
    }
    return (<>
        <div className="container">
            <Form style={{ marginTop: "10%" }}>
                <h1 style={{ textAlign: "center" }}>Create Account</h1>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" ref={name} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={password} required />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ margin: "auto auto" }} onClick={()=>createUser(name.current.value, email.current.value, password.current.value)}>
                    Create New Account
                </Button>
                <Form.Text>
                    Already have Account? <NavLink to="/login">Login!</NavLink>
                </Form.Text>
            </Form>
        </div>
    </>)
}

export default Createaccount;