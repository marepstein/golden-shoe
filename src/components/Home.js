import React from 'react'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  'https://www.crockettandjones.com/wordpress/wp-content/uploads/2017/03/origins-of-shoe-styles-banner-1.jpg',
  'https://jennardor.com/image/catalog/shoes3/2-new.png',
  'images/slide_4.jpg'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  height: '100vh'
}

const propertiesTwo = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  height: '100vh'
}

const Home = () => {

  return <div className="home-section">
    <div className="section">
      <div className="container">
        <div className="sign-up">
          {/* <Slide {...propertiesTwo}>
            <div className="slide-option">
              <h1>Sign up and receive £10 off your first order</h1>
            </div>
            <div className="slide-option">
              <h1>Delivery & Returns Policy</h1>
            </div>
          </Slide> */}
						<h1>Sign up and receive £10 off your first order</h1>
        </div>
      </div>
    </div>
    <div className="banner">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: 'url(https://www.crockettandjones.com/wordpress/wp-content/uploads/2017/03/origins-of-shoe-styles-banner-1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '400px' }}>
            <div className="slide-overlay"><button>Shop Mens New</button></div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/woman-shoes-turquoise-color-background-woman-accessory-fashion-lifestyle-concept_1428-2067.jpg?size=626&ext=jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '400px' }}>
            <div className="slide-overlay"><button>Shop Womens New</button></div>
          </div>
        </div>
        {/* <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div> */}
      </Slide>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column" id="home-column">
            <div className="title">Womens</div>
            <button className="shop-button">Shop Now</button>
          </div>
          <div className="column" id="home-column">
            <div className="title">Mens</div>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}


export default Home