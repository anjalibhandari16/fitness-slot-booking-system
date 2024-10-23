import React,{useState} from 'react'
import Form from '../Form'

function Yoga({setClub={}}) {
  const [open, setOpen] = useState(false);

  return (
    <div className='container-'>

    <div className='subcontent'>
      <div className='bgimage bgimage3'></div>
      <div className='description'>
      Unlock your full potential with our transformative yoga sessions, designed to harmonize body, mind, and soul. Whether you're a beginner or an experienced yogi, our classes offer a rejuvenating escape from daily stress. Guided by expert instructors, you'll explore a blend of breathing techniques, strength-building postures, and deep stretches that promote flexibility, balance, and mental clarity. Yoga is not just about fitness – it's a lifestyle change that enhances focus, reduces anxiety, and cultivates inner peace.
      Each session is a journey toward self-discovery and mindfulness, allowing you to connect with your body in ways you never thought possible. Join us to experience a sense of calm, improve your posture, and build endurance while fostering a community of wellness. Whether you’re looking to tone your muscles, relieve tension, or simply find peace of mind, our yoga classes offer something for everyone. Take a step towards a healthier, happier you!
      </div>
    </div>

    <div className='slot'>
         <div>
            <div> Class Limit : 10</div>
            <div> Total Slot Available : 2</div>
          </div>
        <div className='buttons'>
          <button onClick={() => setOpen(true)}>Book Seat Now</button>
          {open?<Form open={open} setOpen={setOpen} />:null}
          <button onClick={() => setClub(false)}>Go Back</button>
        </div>
    </div>

  </div>
  )
}

export default Yoga