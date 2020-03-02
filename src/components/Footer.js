import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {

  return <div className="section" style={{ backgroundColor: 'rgb(0, 0, 0)', color: '#FFFFFF' }}>
    <div className="container">
      <div className="columns is-multiline has-text-centered">
        <div className="column">
          <div className="footer-title">Help & Information</div>
          <br/>
          <Link className="footer-subtitle">Delivery & Returns</Link>
          <br/>
          <Link className="footer-subtitle">Help</Link>
          <br/>
          <Link className="footer-subtitle">Track Order</Link>
        </div>
        <div className="column">
          <div className="footer-title">About Golden Shoe</div>
          <br/>
          <Link className="footer-subtitle">About Us</Link>
          <br/>
          <Link className="footer-subtitle">Our Store</Link>
          <br/>
          <Link className="footer-subtitle">Mobile App</Link>
        </div>
        <div className="column">
          <div className="footer-title">Follow Us</div>
          <br/>
          <Link className="footer-subtitle">Facebook</Link>
          <br/>
          <Link className="footer-subtitle">Twitter</Link>
          <br/>
          <Link className="footer-subtitle">Instagram</Link>
        </div>
      </div>
    </div>
  </div>
}

export default Footer