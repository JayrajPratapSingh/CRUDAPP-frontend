import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container className='d-flex justify-content-between'>
          <NavLink to="/" className="text-decoration-none text-light mx-2 h3" style={{"fontFamily": "cursive","fontSize":"bold"}}  >CRUDAPP</NavLink>
          <div className=' text-white'>MERN Stack Developer Practical task</div>
          <Nav className="">
            <NavLink to="/" className=" btn btn-danger text-light mx-3 ">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers