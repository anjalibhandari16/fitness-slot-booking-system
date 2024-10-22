import React from 'react'

function Cycling({setClub={}}) {
  return (
    <div className='container-'>

    <div className='subcontent'>
      <div className='bgimage bgimage4'></div>
      <div className='description'>
      Join us for an exhilarating cycling adventure that combines fitness, fun, and friendship! Whether you're a seasoned cyclist or just starting out, our cycling community welcomes riders of all skill levels. Experience the thrill of gliding through scenic trails, breathing in fresh air, and feeling the wind on your face as you pedal towards new horizons. Our rides are designed to challenge and inspire you, featuring diverse routes that showcase breathtaking landscapes and hidden gems.
      Connect with fellow enthusiasts, share tips, and enjoy the camaraderie that comes from cycling together. We organize weekly group rides, skill-building workshops, and fun events that celebrate our love for cycling. Embrace a healthier lifestyle, discover the joy of the open road, and create lasting memories along the way. Don’t miss out—join us on this exciting journey and pedal your way to adventure! Sign up today and let the ride begin!
      </div>
    </div>

    <div className='slot'>
        <div>Total Slot Available : 2</div>
        <div className='buttons'>
          <button>Book Seat Now</button>
          <button onClick={() => setClub(false)}>Go Back</button>
        </div>
    </div>

  </div>
  )
}

export default Cycling