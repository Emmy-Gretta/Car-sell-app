import React, { useState } from 'react';
import './style.css';

function Form() {

   const [error, setFormError] = useState(false);
   const [priceRange, setRange] = useState(0);
   const [formData, setFormData] = useState({
      mark: "",
      model: "",
      year: "",
      mileage: "",
      condition: "",
      features: [],
      transmission: "",
      contactNumber: "",
    });

   const handleFormChanges = (e) => {
      const { name, value, type, checked } = e.target;
    
      if (type === "checkbox") {
        const features = Array.isArray(formData.features) ? formData.features : [];
        if (checked) {
          features.push(value);
        } else {
          features = features.filter((feature) => feature !== value);
        }
    
        setFormData((prevData) => ({
          ...prevData,
          features,
        }));
      } else if (type === "range" && name === "priceRange") {
        setRange(parseInt(value));
        console.log(priceRange)
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "range" ? parseInt(value) : value,
        }));
       
      }
      console.log(formData)
    };

    const validationRules = {
      mark: {
        required: true,
      },
      model: {
        required: true,
      },
      year: {
        required: true,
        pattern: /^\d+$/,
      },
      mileage: {
        required: true,
        pattern: /^\d+$/,
      },
      condition: {
        required: true,
      },
      features: {
        required: false,
      },
      transmission: {
        required: true,
      },
      priceRange: {
        required: true,
        pattern: /^\d+$/,
      },
      contactNumber: {
        required: true,
      },
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Check if any required fields are empty
      if (
        formData.mark.trim() === "" ||
        formData.model.trim() === "" ||
        formData.year.trim() === "" ||
        formData.mileage.trim() === "" ||
        formData.transmission.trim() === "" ||
        formData.condition.trim() === "" ||
        formData.features.length === 0 ||
        formData.contactNumber.trim() === ""
      ) {
        setFormError(true);
      } else {
        setFormError(false);
        console.log(formData);
      }
    };



  return (
    <div>
      <div className="container">
         <form action="#" className='' onSubmit={handleSubmit}>
            <h1>Car Sell App Form</h1> <br />
            <label htmlFor="" className='label'>Car mark:</label> <br />
            <input 
              type="text" 
              className='form-control' 
              name='mark'
              placeholder='Enter car mark'
              value={formData.Formmark} 
              onChange={handleFormChanges}
            /> <br />
             <label htmlFor="" className='label'>Car model:</label> <br />
            <input 
              type="text" 
              className='form-control' 
              placeholder='Enter car model'
              name='model'
              value={formData.model} 
              onChange={handleFormChanges}
            /> <br />
            <label htmlFor="" className='label'>Year:</label> <br />
            <input 
              type="text" 
              className='form-control' 
              placeholder='Enter the year'
              name='year'
              value={formData.year} 
              onChange={handleFormChanges}
            /> <br />
            <label htmlFor="" className='label'>Mileage:</label> <br />
            <input 
              type="text" 
              className='form-control' 
              placeholder='Enter mileage'
              name='mileage'
              value={formData.mileage} 
              onChange={handleFormChanges}
            /> <br />
              {/* Condition*/}
            <fieldset>
               <legend>Condition</legend> 
               <input 
                 type="radio" 
                 className='' 
                 name='condition'
                 value="Excellent"
                 checked={formData.condition === "Excellent"}
                 onChange={handleFormChanges}
              /> 
               <label htmlFor="">Excellent</label> <br />
               <input 
                 type="radio" 
                 className='' 
                 name='condition'
                 value="Good" 
                 checked={formData.condition === "Good"}
                 onChange={handleFormChanges}
              />
               <label htmlFor="">Good</label> <br />
               <input 
                 type="radio" 
                 className='' 
                 name='condition'
                 value="Fair"
                 checked={formData.condition === "Fair"}
                 onChange={handleFormChanges}
              />
               <label htmlFor="">Fair</label> <br />
               <input 
                 type="radio" 
                 className='' 
                 name='condition'
                 value="Poor"
                 checked={formData.condition === "Poor"}
                 onChange={handleFormChanges}
              />
              <label htmlFor="">Poor</label> <br />
            </fieldset>
              {/* features*/}
            <fieldset>
               <legend>Features</legend>
               <input 
                 type="checkbox" 
                 className='' 
                 name='features'
                 value="Air conditioning"
                 onChange={handleFormChanges}
              />
               <label htmlFor="">Air conditioning</label> <br />
               <input 
                 type="checkbox" 
                 className='' 
                 name='features'
                 value="Power steeling"
                 onChange={handleFormChanges}
              />
               <label htmlFor="">Power steering</label>  <br />
               <input 
                 type="checkbox" 
                 className='' 
                 name='features'
                 value="Power Windows"
                 onChange={handleFormChanges}
              />
               <label htmlFor="">Power windows</label> <br />
               <input 
                 type="checkbox" 
                 className='' 
                 name='features'
                 value="Navigation system"
                 onChange={handleFormChanges}
              />
              <label htmlFor="">Navigation</label> <br /> <br />
            </fieldset>
            {/* Transmission*/}
            <label htmlFor="">Transmission</label> <br />
            <select name="transmission" onChange={handleFormChanges} value={formData.transmission}>
               <option value="">Select</option> 
               <option value="automatic">Automatic</option>
               <option value="manual">Manual</option>
            </select> <br /> <br />
              {/* Others*/}
              <label htmlFor="">Price range: </label> <br />
               <input 
                 type="range" 
                 className='range' 
                 name='range'
                 min={0}
                 max={10000}
                 value={formData.priceRange} 
                 onChange={handleFormChanges}
              /> <br /> <br />
               <label htmlFor="">Contact:</label> <br />
               <input 
                 type="number" 
                 className='form-control' 
                 name='contactNumber'
                 placeholder='Enter contact number'
                 value={formData.contactNumber} 
                 onChange={handleFormChanges}
              /> <br />
              {/* Submit button*/}
              {error && <p className='error'>Please, Fill all required fields!</p>}
              <button className='btn btn-success' type='submit' onChange={handleFormChanges}>Purchase</button>
         </form>
      </div>
    </div>
  )
}

export default Form
