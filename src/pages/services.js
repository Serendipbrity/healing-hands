import React from 'react';

const Services = () => {
  return (
    <div id='services'
    >
   
      <h1 id='servicesAndRates'>Services & Rates</h1>
         <div id='serviceWrap'>
      <h2 id='massage' className='text'>Massage</h2>
      <h3 className='text mins'>60 minutes $75</h3>
      <h3 className='text mins'>90 minutes $105</h3>
      </div>
        <button id='sBtn' href="" onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/bcourt95' })}>Book Now</button>
      
      </div>
  );
};

export default Services;