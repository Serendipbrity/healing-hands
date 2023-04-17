import React from 'react'

const Contact = () => {

  return (
    <>
    <div id='contact'>

        <div id='wrapNoMap'>
      <h1 id='contactHeading' className='contact-address'>Contact</h1>

        <span className='call' id='call'>Call us at: </span>
        <a href="tel:+1234567890" className='call'> (240) 808-0933</a>
      <p id='address' className='contact-address'>
        Visit us at:<br />
        426 N Centre St <br />
        Cumberland, MD 21502<br />
        </p>
        </div>

        <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.6800817851213!2d-78.7708058234695!3d39.65691387157174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca8ec19076e45d%3A0x1ac7dc641b59771!2sHealing%20Hands%20Massage%20Therapy!5e0!3m2!1sen!2sus!4v1681752187801!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Contact