import React from 'react'
import facebook from "../Images/logos_facebook.png"
import "../CSS/Footer.css"
import phone from "../Images/teenyicons_phone-solid.png"
import email from "../Images/ic_round-email.png"

const Footer = () => {
  return (
    <div className='FooterWrap'>
      <div className='Footer'>
      <div className='FooterUpper'> 
      <div className='FooterEmail'><img src={email}/><p>hadassahpremium247@gmail.com</p></div>
      <div className='FooterPhone'><img src={phone}/><p> +2348168864508</p></div>
      <div className='FooterSocial'><img src={facebook} alt="socialIcon"/>hadassahpremium247</div>
      </div>
      <div className='FooterLower'>
        <h2>Hadassah Premium</h2>
        <p>Giving you Premium Delights!!!</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
