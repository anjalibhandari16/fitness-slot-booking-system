import React,{useState, useEffect} from 'react';
import Modal from 'simple-react-modal';
import './styles.css';
// import gymData from '../Data/gymData.json';
import axios from 'axios';

function Form({open, setOpen={}}) {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        phone_number:'',
        dataExtra:''
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(formData,'b4 Submit')
        try {
            // Send a POST request to your API
            const response = await axios.post(`http://localhost:3000/testdata1`, formData);
            console.log('Data successfully saved:', response.data);
          } catch (error) {
            console.error('Error saving data:', error);
        }
        alert("Data Saved");
        setOpen(false)

    }

  return (
    <form className='form_container' onSubmit={handleSubmit}>
        <Modal show={open} onClose={()=>setOpen(false)}>
            <div className='content'>Its Amazing that you want to be part of the FIT Journey!</div>
            <div className='content'>Please Enter your Details to Book a Slot for _{}</div>

            <div className='form_details'>
                <div className='form_item'>
                    <label>Name : </label>
                    <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className='form_item'>
                    <label>Email Id : </label>
                    <input 
                    type="email" name="email" value={formData.email} onChange={handleChange}  />
                </div>
                <div className='form_item'>
                    <label>Phone Number : </label>
                    <input 
                    type="number" name="phone_number" value={formData.phone_number} onChange={handleChange} maxLength="10" />
                </div>
                <div className='form_item'>
                    <label>Additonal Info : </label>
                    <input 
                    type="text" name="dataExtra" value={formData.dataExtra} onChange={handleChange}  />
                </div>
            </div>

            <button type='submit'>Submit</button>


        </Modal>
    </form>
  )
}

export default Form