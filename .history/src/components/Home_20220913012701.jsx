import React, { Fragment } from 'react'
import Product from './Product'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'




function Home() {
  return (
    <Fragment>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

    </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    
      <img src={img1} className="d-block w-100" alt="Iphone1" height="600px"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="Iphone2" height="600px"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="Iphone3" height="600px"/>
    </div>
    <div className="carousel-item">
    <img src={img4} className="d-block w-100" alt="Iphone4" height="600px"/>
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
