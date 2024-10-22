import React from 'react'

function Swimming({setClub={}}) {
  return (
    <div className='container-'>

    <div className='subcontent'>
      <div className='bgimage bgimage5'></div>
      <div className='description'>
      Swimming is more than just a sport; it's a liberating experience that connects you with the water and invigorates your spirit. Imagine gliding through crystal-clear waters, the sun warming your skin as you feel weightless and free. With each stroke, you build strength, improve endurance, and enhance flexibility while embracing the rhythm of your breath. Whether you're diving into a pool or exploring the vastness of the ocean, swimming offers a unique blend of tranquility and exhilaration.
      Join us for a journey that promotes fitness and fosters camaraderie among fellow enthusiasts. Our swimming program caters to all skill levels, from beginners to advanced swimmers, providing expert coaching and a supportive environment. Discover the joy of mastering new techniques, participating in friendly competitions, and enjoying poolside gatherings. Dive in, make a splash, and unlock a healthier, happier you. Experience the magic of swimming—your new adventure awaits!
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

export default Swimming