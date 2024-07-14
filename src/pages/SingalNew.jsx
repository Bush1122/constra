import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import new1 from '../img/news1.jpg';
import new2 from '../img/news2.jpg';
import new3 from '../img/news3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faFileAlt, faCommentDots, faCalendar } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from '../componenets/BackToTopButton';
import Footer from '../componenets/Footer';

function SingalNew() {
  interface Comment {
    name: string;
    date: string;
    text: string;
    replies: Comment[];
  }
  
  const dummyComments: Array<Comment> = [
    {
      name: 'Carole Marvin.',
      date: '17-5-2024',
      text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
      replies: [], 
    },
    {
      name: 'Carole Marvin.',
      date: '17-5-2024',
      text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
      replies: [], 
    },
  ];
  
  const Blog = () => {
    const [comments, setComments] = useState(dummyComments);
    const [formData, setFormData] = useState({
      name: '',
      date: '',
      text: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const addComment = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, date, text } = formData;
      if (name && date && text) {
        const newComment: Comment = { name, date, text, replies: [] };
        setComments([...comments, newComment]);
        setFormData({ name: '', date: '', text: '' });
      } else {
        alert('Please fill in all fields.');
      }
    };

    const replyToComment = (index: number) => {
      const replyText = prompt('Enter your reply');
      if (replyText !== null) {
        const currentDate = new Date().toLocaleDateString();
        const newReply: Comment = { 
          name: formData.name, 
          date: currentDate, 
          text: replyText, 
          replies: [] 
        };
        const updatedComments = [...comments];
        updatedComments[index].replies.push(newReply);
        setComments(updatedComments);
      }
    };

    return (
      <div>
        <div className='container-fluid main-page'>
          <div>
            <h2 className='text-center fw-bold display-2 text-light'>New</h2>
          </div>
          <Breadcrumb className='text-light fw-bold'>
            <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
            <Breadcrumb.Item active className='text-light'>News</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className='col-4 mt-4'>
              <h6 className='text-dark ndservice border-start border-3 p-3 border-warning'>RECENT POSTS</h6>
              <div className='row mt-4'>
                <div className='col'>
                  <img src={new1} className="img-fluid" alt="project1" width={150} height={150} />
                </div>
                <div className='col'>
                  <p className='ndservice'>WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI</p>
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='col'>
                  <img src={new2} className="img-fluid" alt="project1" width={150} height={150} />
                </div>
                <div className='col'>
                  <p className='ndservice'>THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED</p>
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='col'>
                  <img src={new3} className="img-fluid" alt="project1" width={150} height={150} />
                </div>
                <div className='col'>
                  <p className='ndservice'>SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES</p>
                </div>
              </div>
              <div className='mt-4'>
                <h6 className='text-dark ndservice border-start border-3 p-3 border-warning'>CATEGORIES</h6>
                <h6 className='ndservice'>Construction</h6>
                <hr />
                <h6 className='ndservice'>Building</h6>
                <hr />
                <h6 className='ndservice'>Safety</h6>
                <hr />
                <h6 className='ndservice'>Structure</h6>
                <hr />
              </div>
              <h6 className='text-dark ndservice border-start border-3 p-3 border-warning'>TAGS</h6>
              <div className='mt-4 my-2 row'>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Construction</p>
                </div>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Design</p>
                </div>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Project</p>
                </div>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Safety</p>
                </div>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Building</p>
                </div>
                <div className='col-4'>
                  <p className='text-light bg-warning p-2'>Planning</p>
                </div>
              </div>
              <div className='mt-4'>
                <h6 className='text-dark ndservice border-start border-3 p-3 border-warning'>ARCHIVES</h6>
                <h6 className='ndservice'>February 2016</h6>
                <hr />
                <h6 className='ndservice'>January 2016</h6>
                <hr />
                <h6 className='ndservice'>December 2015</h6>
                <hr />
                <h6 className='ndservice'>November 2015</h6>
                <hr />
              </div>
            </div>

            {/* Right Column */}
            <div className='col-7 mt-5 py-2'>
              <div className='mt-5'>
                <img src={new2} className="img-fluid" alt="project1" width={800} height={1050} />
                <div className='row mt-2'>
                  <div className='col-2 p-1 border-start border-1'>
                    <FontAwesomeIcon icon={faFileAlt} size="1x" className="ml-3 text-warning" />
                    <small>News</small>
                  </div>
                  <div className='col-2 p-1 border-start border-1'>
                    <FontAwesomeIcon icon={faCalendar} size="1x" className="ml-3 text-warning" />
                    <small>June-14,2016</small>
                  </div>
                  <div className='col-2 p-1 border-start border-1'>
                    <FontAwesomeIcon icon={faCommentDots} size="1x" className="ml-3 text-warning" />
                    <small>03 Comments</small>
                  </div>
                </div>
                <h4 className='ndservice p-3 fw-bold'>We Just Completes $17.6 Million Medical Clinic In Mid-Missouri</h4>
                <p className='ndservice p-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p className='ndservice p-3'>
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p className='ndservice p-3'>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ue magnam aliquam quaerat voluptatem.
                </p>
              </div>
              <hr />

              <div className="my-2 mt-2 py-4">
                <p className="border-start border-3 ps-3 p-4 bg-light text-center border-warning">
                  Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut
                </p>
              </div>

              <div className='row'>
                <div className='col-3'>
                  <p className="p-1 border text-dark">Construction</p>
                </div>
                <div className='col-2'>
                  <p className="p-1 border text-dark">Safety</p>
                </div>
                <div className='col-2'>
                  <p className="p-1 border text-dark">Planning</p>
                </div>
              </div>

              <div>
                <h3 className='ndservice'>Comment </h3>
                {comments.map((comment, index) => (
                  <div key={index} className="comment ndservice">
                    <div className="comment-details ndservice P-4">
                      <div className="comment-name ndservice">{comment.name}</div>
                      <div className="comment-text">{comment.text}</div>
                      <div className="text-warning mt-2">{comment.date}</div>
                      <button className='btn btn-warning' onClick={() => replyToComment(index)}>Reply</button>
                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="reply">
                          <div className="reply-details">
                            <div className="reply-name">{reply.name}</div>
                            <div className="reply-text">{reply.text}</div>
                            <div className="text-danger mt-2">{reply.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="container">
                  <form onSubmit={addComment}>
                    <div className="row gy-4 gy-xl-5 p-xl-5">
                      <div className="col-6">
                        <label htmlFor="fullname" className="form-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control border-zinc-400"
                          id="username"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-6 col-md-6">
                        <label htmlFor="date" className="form-label">
                          Date <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="text"
                          rows="3"
                          value={formData.text}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-4">
                      <button className="btn btn-warning btn-lg" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackToTopButton />
        <Footer />
      </div>
    );
  };

  return <Blog />;
}

export default SingalNew;
