import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Alerts from  '../componenets/Alerts'
import BackToTopButton from '../componenets/BackToTopButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../componenets/Footer'



function Features() {
  return (
    <div>
      <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Feature</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Feature</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
      <div className="container mt-4  my-4">
        <div className="row">
          <div className="col ndservice">
            <h4 className="ndservice">HEADING</h4>
            <h1 className="p-2 mt-2 my-2">h1. Heading 1</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>

            <h2 className="p-2 mt-2 my-2">h2. Heading 2</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>

            <h3 className="p-2 mt-2 my-2">h3. Heading 3</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>
            <h4 className="p-2 mt-2 my-2">h4. Heading 4</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>

            <h5 className="p-2 mt-2 my-2">h5. Heading 5</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>

            <h6 className="p-2 mt-2 my-2">h6. Heading 6</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.
            </p>
          </div>

          <div className="col">
            <h4 className="ndservice">PARAGRAPH</h4>
            <p className="ndservice">
              Lorem ipsum dolor sit amet, a mark here adipisicing elit. Atque, iusto, minus sequi natus nesciunt rerum tenetur corrupti autem officiis fugiat expedita laudantium ea aspernatur
            </p>

            <p className="ndservice my-2">
              Consectetur adipisicing elit. <span className="text-danger fw-bold">Corrupti, aliquam, voluptates,</span>Corrupti, aliquam, voluptates, nulla, blanditiis <span className="text-success fw-bold">totam voluptatem voluptatum quod ipsa debitis</span> non ab odio natus.
            </p>

            <h4 className="ndservice my-3">BLOCKQUOTE</h4>

            <div className="my-2 mt-2 py-4">
              <p className="border-start border-3 ps-3 p-4 bg-light text-start  border-warning" style={{ borderColor: 'red' }}>
                Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
              </p>
            </div>

            <div className="my-2 mt-2 py-4">
              <p className="border-top border-3 ps-3 p-4 bg-light text-center  border-warning" style={{ borderColor: 'red' }}>
                Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
              </p>
            </div>

            <div className="my-2 mt-2 py-4">
              <p className="border-end border-3 ps-3 p-4 bg-light text-end border-warning" style={{ borderColor: 'red' }}>
                Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
              </p>
            </div>

            <div className="my-2 mt-2 py-4">
              <p className="border-bottom border-3 ps-3 p-4 bg-light text-center  border-warning" style={{ borderColor: 'red' }}>
                Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton/>

      <div className='container mt-4 py-4'>
    

           

              <Alerts/>

            

            <Alert variant="warning" className="my-2 mt-2 py-4 text-start">
              <h6>A SIMPLE DANGER ALERT!</h6>
              <p className=" p-2 " variant="warning">
                Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
              </p>
              <hr/>
              <p  className=" p-2 " variant="warning">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </Alert>

      </div>
     
    <Footer/>
    </div>
  );
}

export default Features;
