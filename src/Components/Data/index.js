import {useEffect, useState} from 'react';
import gymData from './gymData.json'
import danceData from './danceData.json'
import yogaData from './yogaData.json'
import cyclingData from './cyclingData.json'
import swimmingData from './swimmingData.json'


function Data({ club= 'dance', classLimit = 15}) {

  const [data,setData]=useState([])

    const dataItem = {
        'gym':gymData,
        'yoga':yogaData,
        'dance':danceData,
        'cycling':cyclingData,
        'swimming':swimmingData
    }

      useEffect(() => {
        const fetchData = async () =>{
          const response = await fetch(`http://localhost:3000/`)
          // setData(response.json())
          console.log(response.json());
        }
        fetchData();
      }, []);

    // const arrNames = dataItem[club].map(i=>i.email);
    const arrNames = data.map(i=>i.email);
    const totalRemainingSpots = classLimit- arrNames.length;
    const isSpotAvailable = totalRemainingSpots>0;

    console.log(arrNames,totalRemainingSpots,isSpotAvailable,'seesees');

  return arrNames,totalRemainingSpots,isSpotAvailable;
}

export default Data