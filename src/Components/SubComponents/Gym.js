import React from 'react';
import './styles.css'

function Gym({ setClub = {} }) {
  return (
    <div className='container-'>

      <div className='subcontent'>
        <div className='bgimage bgimage1'></div>
        <div className='description'>
          Achieve your fitness goals in a welcoming and energetic environment designed for all fitness levels! Our state-of-the-art facility offers top-of-the-line equipment, dynamic workout zones, and expert trainers committed to helping you succeed. Whether you're looking to lose weight, build muscle, or boost endurance, we provide a variety of programs tailored to your individual needs.
          Join our diverse community and experience a wide range of group classes, including high-intensity interval training (HIIT), strength training, and more. With a motivating atmosphere, flexible membership options, and personal trainers who guide you every step of the way, you'll stay on track toward a healthier, stronger you.
          Plus, enjoy 24/7 access, spacious locker rooms, and a supportive community that celebrates every milestone. Start your fitness journey today and discover the difference the right environment can make! Reach your goals faster with us.
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

export default Gym