import React,{useEffect} from 'react'
import './Staff.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
const Staff = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <>
    <div className='staff container section'>
      <div className='secContainer'>
        <span className='secTitle'>
           Different People - One Mission
        </span>

        <div className='staffContainer grid'>
          <div data-aos='fade-up' data-aos-duration='2000' className='singleStaff'>
            <div className='imgDiv'>
              <img className='img' src={user4}/>
            </div>
            <span className='name'>
              Nicle Charmaine
            </span>
            <span className='jobTitle'>
              CEO Wander
            </span>
            <span className='contact'>
             +344 990 4456 70
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className='singleStaff'>
            <div className='imgDiv'>
              <img className='img' src={user5}/>
            </div>
            <span className='name'>
              Mel Gupta
            </span>
            <span className='jobTitle'>
              Software Engineer
            </span>
            <span className='contact'>
             +994 690 4456 40
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000'  className='singleStaff'>
            <div className='imgDiv'>
              <img className='img' src={user6}/>
            </div>
            <span className='name'>
              Cirilo Lobo
            </span>
            <span className='jobTitle'>
              IT Specialist
            </span>
            <span className='contact'>
             +544 440 6456 90
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Staff