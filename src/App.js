import React, {useEffect} from 'react';
import './App.css';
import Layout from './Components/Layout';

function App() {

  // useEffect(() => {
  //     const fetchData = async () =>{
  //       const response = await fetch(`http://localhost:3000/`)
  //       console.log(response.json());
  //     }
  //     fetchData();
  //   }, []);

  return (
    <div className="App">
        <Layout/>
    </div>
  );
}

export default App;
