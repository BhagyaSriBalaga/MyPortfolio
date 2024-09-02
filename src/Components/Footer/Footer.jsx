import React from 'react'
import  logo from '../../assets/bs2.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
        {/* cpy right */}
        <div clasName="footer-cpy-right">
            <p>
              &copy; Bhagya Sri 2024.All Right revserved
            </p>
        </div>
        {/* Social */}
        <ul className='footer-social-media'>
          <li>
            <a href='https://bhagyasribalaga123@gmail.com'>
              <i className='fa-regular fa-envelope'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/bhagya-sri-balaga-4ab180268/'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://x.com/bhagya_sri123'>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </li>
          
        </ul>
    </footer>
  )
}

export default Footer