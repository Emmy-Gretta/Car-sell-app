import React from 'react'

function Form() {
  return (
    <div>
      <form action="" className='form'>
        <fieldset>
         <legend>Car Sell App Form</legend>
         <label htmlFor="mark">Car Mark</label>
         <input type="text" className='form-control' name='mark' placeholder='Enter the car mark' /> <br />
         <label htmlFor="model">Car model</label>
         <input type="text" className='form-control' name='model' placeholder='Enyter the car model' /> <br />
         <label htmlFor="year">Year</label>
         <input type="date" className='form-control' name='date' placeholder='Enter the date' /> <br />
         <label htmlFor="year">Mileage</label>
         <input type="number" className='form-control' name='mileage' placeholder='Enter the date' /> <br />
        <fieldset>
         <legend>Condition</legend>
         <input type="radio" className='' name='excellent' />
         <label htmlFor="exce">Excellent</label> <br />
         <input type="radio" className='' name='Good' />
         <label htmlFor="exce">Good</label> <br />
         <input type="radio" className='' name='Fair' />
         <label htmlFor="exce">Fair</label> <br />
         <input type="radio" className='' name='Poor' />
         <label htmlFor="exce">Poor</label> <br />
        </fieldset> 
        <fieldset>
         <legend>Features</legend>
         <input type="checkbox" className='' name='air-conditioning' />
         <label htmlFor="">Air conditional</label>  <br />
         <input type="checkbox" className='' name='Power-steeling' />
         <label htmlFor="">Power steeling</label>  <br />
         <input type="checkbox" className='' name='Power-windows' />
         <label htmlFor="">Power windows</label> <br />
         <input type="checkbox" className='' name='abs' />
         <label htmlFor="">ABS</label> <br />
         <input type="checkbox" className='' name='navigation-system' />
         <label htmlFor="">Navigation System</label>
        </fieldset> <br />
        <label htmlFor="">Transmission</label> <br />
        <select name="trans">
         <option value="auto">Automatic</option>
         <option value="man">Manual</option>
        </select> <br /> <br />
        <label htmlFor="">Price range</label>
        <input type="range" className='' name='priceRange' /> <br /> <br />
        <label htmlFor="">Contact number:</label> <br />
        <input type="number" className='form-control' name='contact' />
        </fieldset>
      </form>
    </div>
  )
}

export default Form;
