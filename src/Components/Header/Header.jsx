import React from 'react'
import Typical from 'react-typical'
import profileImg from '../../assets/full_pic.png'
import './Header.css'
const Header = () => {
  return (
    <div className="header-container">
        {/* Header Content */}
        <div className="header-content">
            <h1>Hy ! Am</h1>
            <h2 className='fullname'>Bhagya Sri Balaga</h2>
            <h2>
                I'm a  {""}
                <Typical
                steps={[
                "Frontend Developer 💻",1000,
                    "React Developer ⚛️",1000
                ]}
                    loop={Infinity}
                    wrapper='b'
                />

            </h2>
            <p>
            I'm a web developer with a passion for building user-friendly, responsive websites. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks, I create visually appealing and intuitive web experiences. I'm eager to bring innovative ideas to life and contribute to impactful projects. Let's collaborate to make something great!
            </p>
            {/* links */}
            <div className="header-payments-container">
                <button>Hire Me</button>
                {/* <button>Resume</button> */}
                <i className='fa-brands fa-github'></i>
                <i className='fa-brands fa-linkedin'></i>
                <i class="fa-regular fa-envelope"></i>
            </div>
        </div>
        {/* Image container */}
        <div className="profile-img-container">
            <img src={profileImg} alt=''/>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
        </div>

    </div>
  )
}

export default Header