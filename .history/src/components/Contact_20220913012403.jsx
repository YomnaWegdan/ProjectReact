import React from 'react'

function Contact() {
  return (
    <div>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-12 text-center py-4 my-4'>
            <h1>Have Some Question?</h1>
            <hr/>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-5 d-flex justify-content-center'>
            <img src='../images/contact.png' alt='Contact Us' width="300px" height="300px"/>
          </div>
          <form>
            <div className='col-md-6' >
            <form>

              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="John Smith"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>

            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
