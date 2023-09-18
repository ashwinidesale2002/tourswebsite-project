import React,{useEffect}from 'react'
import './Tours.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import tourImage1 from '../assets/img.jpg'
import tourImage2 from '../assets/img1.jpg'
import {AiFillStar} from 'react-icons/ai'

const Tours = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
     <>
     <div className='tours container section'>
      <div className='secContainer'>
        <span className='secTitle'>
          Hot Tours
        </span>
        <div className='tourContainer'>

          <div data-aos='fade-up' data-aos-duration='3000' className='singleTour grid'>
            <div className='imgDiv'>
              <img className='img' src={tourImage1}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className='tourInfo'>
              <span className='tourTitle'>
                Ladakh
              </span>
              <div className='stars_review flex'>
                <div className='stars'>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  10 Customer Review
                </small>
              </div>
              <p>
              Adorned with the lofty barren mountains,
              Ladakh is home to some of the highest motorable passes like Khardung La (5359 m), 
              Marsimik La (5582 m), and Chang La (5360 m), and alpine lakes like Pangong Tso (4350 m) and Tso Moriri (4522 m).
              </p>
              
            </div>
            <div>
            <button className='btn'>Buy This Tour</button>
            </div>
            <span className='price'>
              $790
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className='singleTour grid'>
            <div className='imgDiv'>
              <img src={tourImage2}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className='tourInfo'>
              <span className='tourTitle'>
              mauritius islan
              </span>
              <div className='stars_review flex'>
                <div className='stars'>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  10 Customer Review
                </small>
              </div>
              <p>
              Mauritius is famous for its beach holiday resorts, 
              incredible snorkelling areas, unforgettable yacht adventures, fantastic deep-sea fishing spots, 
              and, of course, the famed Chamarel plains with their seven colours.
              </p>
            </div>
            <div>
            <button className='btn'>Buy This Tour</button>
            </div>
            <span className='price'>
              $670
            </span>
          </div>
        </div>
      </div>

     </div>
     </>
  )
}

export default Tours