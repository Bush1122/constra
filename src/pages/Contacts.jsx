import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './pages.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faBell } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../componenets/ContactForm';
import Footer from '../componenets/Footer'


function Contacts() {
  return (
    <div>
      <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Contact Us</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Contact</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>

      
      <div className='container'>
      <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={4}>
          <Card className="text-center text-light bg-warning">
            <Card.Body>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="mb-3" />
              <Card.Title>VISIT OUR OFFICE</Card.Title>
              <Card.Text>
                <small>9051 Constra Incorporate, USA</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center text-light bg-warning">
            <Card.Body>
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3" />
              <Card.Title>EMAIL US</Card.Title>
              <Card.Text>
                <small>office@Constra.com</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center text-light bg-warning">
            <Card.Body>
              <FontAwesomeIcon icon={faBell} size="3x" className="mb-3" />
              <Card.Title>CALL US</Card.Title>
              <Card.Text>
                <small>(+9) 847-291-4353</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </div>

       <div className='conatainer mt-4'> 
        <h3 className=' fw-bold  '>WE LOVE TO HEAR</h3>
        <div className=' text-left' > 
        <ContactForm/>
        </div>
       
       </div>
       <Footer/>


      
    </div>
  );
}

export default Contacts;
