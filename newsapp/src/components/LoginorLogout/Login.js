import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { createRef, useEffect } from 'react';
import { useValue } from '../../contextAPI/newsappContext';

function Login() {
    const email = createRef();
    const password = createRef();
    const {Login,checkuserloggedIn} = useValue();
    const navigate = useNavigate();
    const userLogin = (email,password) =>{
        Login(email,password)
        cleanup();
        return navigate("/");
    }
    const cleanup = () => {
        password.current.value = '';
        email.current.value = '';
    }
    useEffect(()=>{
        checkuserloggedIn();
    },[])
    return (<>
    <div className="container">
        <Form>
            <h1 style={{textAlign:"center"}}>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password} required/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{ margin: "auto auto" }} onClick={()=>userLogin(email.current.value, password.current.value)}>
                Login
            </Button>
            <Form.Text>
                Don't have an account? <NavLink to="/signup">Sign up!</NavLink>
            </Form.Text>
        </Form>
    </div>
    </>)
}

export default Login;