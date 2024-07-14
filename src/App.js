import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import FixNav from './pages/FixNav';
import Company from './pages/Company';
import Contacts from './pages/Contacts';
import Features from './pages/Features';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';
import Faqs from './pages/Faqs';
import OverPeople from './pages/OverPeople';
import Pricing from './pages/Pricing';
import Servicesall from './pages/Servicesall'
import SingalNew from './pages/SingalNew';

function App() {
  return (
    <div className="App">
      <FixNav />
      <div className='mt-2'>
        <Navbar expand="lg" className="navbar-custom" >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="nav-link-custom text-uppercase fw-bold">Home</Nav.Link>

                <NavDropdown title="Company" id="company-dropdown" className=" nav-link-custom nav-link-custom-dropdown text-uppercase fw-bold">
                  <NavDropdown.Item as={Link} to="/company" className="dropdown-item-custom nav-link-custom-dropdown">About us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/overpeople" className="dropdown-item-custom nav-link-custom-dropdown">Over Peoples</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/faqs" className="dropdown-item-custom nav-link-custom-dropdown">Faqs</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pricing" className="dropdown-item-custom nav-link-custom-dropdown">pricing</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Projects" id="projects-dropdown" className="nav-link-custom text-uppercase fw-bold">
                  <NavDropdown.Item as={Link} to="/projects" className="dropdown-item-custom ">Projects</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Services" id="services-dropdown" className="nav-link-custom text-uppercase fw-bold">
                  <NavDropdown.Item as={Link} to="/services" className="dropdown-item-custom">Services</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicesall" className="dropdown-item-custom"> Singal Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/features" className="nav-link-custom text-uppercase fw-bold">Features</Nav.Link>

                <NavDropdown title="Services" id="services-dropdown" className="nav-link-custom text-uppercase fw-bold">
                  <NavDropdown.Item as={Link} to="/news" className="dropdown-item-custom">News</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/singalNew" className="dropdown-item-custom"> Singal News</NavDropdown.Item>
                </NavDropdown>
               
               
                <Nav.Link as={Link} to="/contacts" className="nav-link-custom text-uppercase fw-bold">Contacts</Nav.Link>
                
              </Nav>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/overpeople" element={<OverPeople />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/servicesall" element={<Servicesall/>} />
          <Route path="/singalNew" element={<SingalNew/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
