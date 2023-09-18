import React,{useEffect} from 'react'
import './Review.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

const Review = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <>
    <div className='review section'>
      <div className='secContainer'>
        <span className='secTitle'>
          What People Say
        </span>
        <div className='reviewContainer container grid'>
          <div data-aos='fade-up' data-aos-duration='3000'className='singleReview'>
            <div className='imgDiv'>
              <img className='imm' src={user1}/>
            </div>
            <p className='paraa'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.eos nisi beatae nobis eum
               repudiandae tempora magni praesentium, at repellat, id incidunt minima pariatur ut molestiae saepe quasi.
            </p>
            <div className='name'>
              Nicole Webb
            </div>
          </div>
        </div>
        <div className='reviewContainer container grid'>
          <div data-aos='fade-up' data-aos-duration='3500' className='singleReview'>
            <div className='imgDiv'>
              <img className='imm' src={user2}/>
            </div>
            <p className='paraa'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.eos nisi beatae nobis eum
               repudiandae tempora magni praesentium, at repellat, id incidunt minima pariatur ut molestiae saepe quasi.
            </p>
            <div className='name'>
              Lidney Josline
            </div>
          </div>
        </div>
        <div className='reviewContainer container grid'>
          <div data-aos='fade-up' data-aos-duration='4000' className='singleReview'>
            <div className='imgDiv'>
              <img className='imm' src={user3}/>
            </div>
            <p className='paraa'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.eos nisi beatae nobis eum
               repudiandae tempora magni praesentium, at repellat, id incidunt minima pariatur ut molestiae saepe quasi.
            </p>
            <div className='name'>
              Rupert Loreot
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Review