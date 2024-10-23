import React, { useState } from 'react';
import './styles.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Gym from '../SubComponents/Gym'
import Yoga from '../SubComponents/Yoga';
import Dance from '../SubComponents/Dance';
import Cycling from '../SubComponents/Cycling';
import Swimming from '../SubComponents/Swimming';
// import Data from '../Data';

function Layout() {

  const [club, setClub] = useState(false);

  const val = {
    'gym':<Gym setClub={setClub}/>,
    'yoga':<Yoga setClub={setClub}/>,
    'dance':<Dance setClub={setClub}/>,
    'cycling':<Cycling setClub={setClub}/>,
    'swimming':<Swimming setClub={setClub}/>
  }

  return (
    <div className='container'>
      <h1 className='heading'>Welcome to Fitness Club</h1>
      <div className='sub_heading'>Congratulations on taking the first step of your fitness journey—you should be very proud of yourself, and we’re excited to be a part of it!</div>
      <div className='sub_heading'>Choose from a Wide range of Healty Fitness Choices and Join Now.</div>
      
      {!club ? 
      <div className='box_container'>

        <div className='box' onClick={()=>setClub('gym')}>
          <div className='box_heading'>Gym</div>
          <div className='box_image box1image'>
          </div>
          <div className='box_discription'>
            Achieve your fitness goals at our state-of-the-art gym!
          </div>
        </div>

        <div className='box' onClick={()=>setClub('dance')}>
          <div className='box_heading'>Dance</div>
          <div className='box_image box2image'>
          </div>
          <div className='box_discription'>
            Bringing emotions to life through grovy moves!
          </div>
        </div>

        <div className='box' onClick={()=>setClub('yoga')}>
          <div className='box_heading'>Yoga</div>
          <div className='box_image box3image'>
          </div>
          <div className='box_discription'>
            Offering a path to overall well-being and self-awareness.
          </div>
        </div>

        <div className='box' onClick={()=>setClub('cycling')}>
          <div className='box_heading'>Cycling</div>
          <div className='box_image box4image'>
          </div>
          <div className='box_discription'>
            Adventure that rejuvenates your mind and body. 
          </div>
        </div>

        <div className='box' onClick={()=>setClub('swimming')}>
          <div className='box_heading'>Swimming</div>
          <div className='box_image box5image'>
          </div>
          <div className='box_discription'>
            Glide through calm waters and riding ocean waves!
          </div>
        </div>
      </div>

    : val[club]}

      <footer>
        <div className='socials'>
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaYoutube /></a>
        </div>

        <div className='footer_items'>
          <a href='#'>Home</a>
          <a  href='#'>About Us</a>
        </div>

        <div className='copyright'>Copyright ©2024, Designed By Anjali Bhandari</div>
      </footer>


    </div>
  )
}

export default Layout