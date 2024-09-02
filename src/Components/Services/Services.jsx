import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className='services-container'>
        <div className="services-list-container">
            {/* description */}
            <div className="services-desc-container">
                <h1>My Awesome <span>Services</span></h1>
                <p>I'm a dedicated web developer with a strong command of HTML,
                     CSS, JavaScript, and React, allowing me to create responsive
                      and user-friendly websites. Alongside my frontend expertise,
                       I'm also proficient in Java, C, and Python, giving me a well-rounded 
                       skill set for tackling diverse programming challenges.
                        I'm passionate about coding and continuously expanding my 
                        knowledge to bring innovative solutions to life. Whether it's 
                        crafting sleek web interfaces or diving into backend logic,
                         I'm excited to contribute to projects that make an impact.</p>

                         <button>Hire Me</button>
            </div>
            {/* item */}
            <div className="service-item-container">
                <div className="services-item">
                    <i className='fa-solid fa-code'></i>
                    <div className="item-desc">
                        <h3>Web Development</h3>
                        <p> I create visually appealing and intuitive web experiences. I'm eager to bring innovative ideas to life and contribute to impactful projects.</p>
                    </div>
                </div>
                <div className="services-item">
                    <i className='fa-solid fa-desktop'></i>
                    <div className="item-desc">
                        <h3>Desktop Development</h3>
                        <p> I create visually appealing and intuitive web experiences. I'm eager to bring innovative ideas to life and contribute to impactful projects.</p>
                    </div>
                </div>
                <div className="services-item">
                    <i className='fa-solid fa-tablet-alt'></i>
                    <div className="item-desc">
                        <h3>U/X Design</h3>
                        <p> I create visually appealing and intuitive web experiences. I'm eager to bring innovative ideas to life and contribute to impactful projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services