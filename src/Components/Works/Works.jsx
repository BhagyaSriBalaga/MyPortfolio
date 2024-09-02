import React from 'react'
import w1 from '../../assets/github.png'
import w2 from '../../assets/weather.png'
import w3 from '../../assets/rock.png'
import w4 from '../../assets/hair.png'
import w5 from '../../assets/todo.png'
import w6 from '../../assets/netflix.png'
import w7 from '../../assets/quote.png'
import w8 from '../../assets/hostel.png'
import w9 from '../../assets/calci.png'
import w10 from '../../assets/watch.png'
import './Works.css'
const Works = () => {
  return (
    <div className="works-container">
        <h1>My Recent Works</h1>
        <div className="works-list-container">
            <div className="works-item">
              <img src={w1} alt='work1'/>
            </div>
            <div className="works-item">
              <img src={w2} alt='work2'/>
            </div>
            <div className="works-item">
              <img src={w3} alt='work3'/>
            </div>
            <div className="works-item">
              <img src={w4} alt='work4'/>
            </div>
            <div className="works-item">
              <img src={w5} alt='work5'/>
            </div>
            <div className="works-item">
              <img src={w6} alt='work6'/>
            </div>
            <div className="works-item">
              <img src={w7} alt='work7'/>
            </div>
            <div className="works-item">
              <img src={w8} alt='work8'/>
            </div>
            <div className="works-item">
              <img src={w9} alt='work9'/>
            </div>
            <div className="works-item">
              <img src={w10} alt='work10'/>
            </div>

        </div>
    </div>
  )
}

export default Works