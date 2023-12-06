import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GrLogout } from "react-icons/gr";

import "./Navbar.css";
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useValue } from '../../contextAPI/newsappContext';

function NavbarComponent() {
    const {toogleDataView, setToogleDataView,Logout} = useValue();
    const navigate = useNavigate();
    const handleLogout = ()=>{
      Logout();
      return navigate("/login");
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id="navbar">
        <Container>
          <Navbar.Brand href="/">News-Wala</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favourite">Favourite</Nav.Link>
          </Nav>
        </Container>
        <Container className='container'>
            <div id={toogleDataView? "toogle-true" : "toogle-false"}>
                <div id={toogleDataView? "mid-circle-true" : "mid-circle-false"} onClick={()=>setToogleDataView(!toogleDataView)}></div>
            </div>
            <div id="Logout">
                <GrLogout className='logout-icon' onClick={handleLogout}/>
            </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarComponent;