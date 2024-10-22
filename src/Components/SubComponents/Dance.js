import React from 'react'

function Dance({setClub={}}) {
  return (
    <div className='container-'>

    <div className='subcontent'>
      <div className='bgimage bgimage2'></div>
      <div className='description'>
      Experience the joy of movement and self-expression by joining our dynamic dance classes! Whether you're a beginner or an experienced dancer, our classes are designed to energize your body and inspire your soul. From high-energy hip-hop to the graceful flow of contemporary dance, we offer a wide variety of styles to suit every interest. Our passionate instructors provide personalized guidance to help you develop your skills, improve your fitness, and boost your confidence. Each session is not just a workout, but a creative outlet where you can express yourself, connect with others, and have fun. With a supportive community and vibrant atmosphere, you'll find dance is a perfect way to de-stress and stay active. So, put on your dancing shoes, feel the rhythm, and let’s dance your way to a healthier, happier you. Join us today and discover the transformative power of dance!      </div>
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

export default Dance