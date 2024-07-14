import React, { useState } from 'react';

const ContactForm = () => {
    const initialFormData = {
        username: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formData, setFormData] = useState(initialFormData);
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const  name  = e.target.name;
        const  value  = e.target.value;
    
        setFormData({
           ...formData, 
           [name]: value });
    
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    
        setTimeout(() => {
          setSubmitted(true);
        }, 1000);
      };
     
      
      const handleReset = () => {
        setFormData(initialFormData);
        setSubmitted(false);
      };
    
    return (
        <div className="container-fluid py-4">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9 p-4 py-2 mt-3">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
    
            {!submitted ? (
              
              <form onSubmit={handleSubmit}>
                <div className="row gy-4 gy-xl-5 p-xl-5">
                  <div className="col-12">
                    <label for="fullname" className="form-label">Full Name <span class="text-danger">*</span></label>
                   
                    <input 
                    type="text" 
                    className="form-control"
                     id="username" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange} required/>
    
                  </div>
    
                  <div className="col-12 col-md-6">
                    <label for="email" className="form-label" >Email <span class="text-danger">*</span></label>
                    <div className="input-group">
    
                      <input
                        type="email"
                        class="form-control"
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required/>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <div className="input-group">
                   
                   
                      <input 
                       type="phone"
                       class="form-control" 
                       id="phone" 
                       name="phone" 
                       value={formData.phone}
                       onChange={handleChange}
                      required/>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                  
                  
                    <textarea 
                    className="form-control" 
                    id="message"
                     name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required>
                      </textarea>
    
    
                     </div>
    
    
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-warning btn-lg text-light" type="submit">Send Massage</button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
            <div class="alert alert-warning" role="alert">
             <p>Thank You massage have been be send</p>
             <button  class="btn btn-warning" onClick={handleReset}>Send Another Message</button>
               </div>
                 
             )}
            
            
          </div>
          </div>
          </div>
          </div>
    );
};

export default ContactForm;
