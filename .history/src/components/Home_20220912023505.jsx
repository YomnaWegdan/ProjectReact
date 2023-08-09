import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src="/public/images/img1.jpg" className="d-block w-100" alt="Iphone"/>
    </div>
    <div class="carousel-item">
      <img src="/public/images/img2.jpg" className="d-block w-100" alt="Iphone"/>
    </div>
    <div class="carousel-item">
      <img src="/public/images/img3.jpg" className="d-block w-100" alt="Iphone"/>
    </div>
    <div class="carousel-item">
    <img src="/public/images/img4.jpg" className="d-block w-100" alt="Iphone"/>
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
