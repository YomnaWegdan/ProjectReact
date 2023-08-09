import React, { Fragment } from 'react'
import img1 from '../'
import img2 from '/src/images/img2.jpg'
import img3 from '/src/images/img3.jpg'
import img4 from '/src/images/img4.jpg'



function Home() {
  return (
    <Fragment>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    
      <img src={img1} className="d-block w-100" alt="Iphone1"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="Iphone2"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="Iphone3"/>
    </div>
    <div className="carousel-item">
    <img src={img4} className="d-block w-100" alt="Iphone4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
    </Fragment>
  )
}

export default Home
