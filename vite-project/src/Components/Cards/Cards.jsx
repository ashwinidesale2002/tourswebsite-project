import React,{useEffect} from 'react'
import "./Cards.css"
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import {AiOutlineSwapRight} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Cards = () => {
useEffect(()=>{
  Aos.init({duration: 2000})
},[])

  return (
   <>
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='2000' className='cardContainer container grid'>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={banner3}/>
          </div>
          <h4 className='textDiv'>
            Balloon Flight
          </h4>
        </div>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={banner4}/>
          </div>
          <h4 className='textDiv'>
             Beach Travels
          </h4>
        </div>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={banner5}/>
          </div>
          <h4 className='textDiv'>
            Mountain Tours
          </h4>
        </div>
      </div>
      <div className='spanText flex'>
        Others Tour <AiOutlineSwapRight className='icon'/>
      </div>
    </div>
   </>
  )
}

export default Cards