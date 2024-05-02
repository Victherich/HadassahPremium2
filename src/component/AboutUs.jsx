import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
import Swal from 'sweetalert2'
import { FaBackward } from 'react-icons/fa6'
import Logo from "../Images/logo.png"

const AboutUs = () => {

const handleLocation =()=>{
    window.history.back()
}

  return (
    <div className='ContactUsWrap'>
        <div className='ContactUs'>
            <div className='ContactUsHeader'>
                <h1>About Us</h1>
            </div>
        <div className='ContactUsBody'>
                
                <div className='ContactUsBodyLeft' style={{padding:"5%"}}>
                    <p><strong style={{color:"green"}}>Hadassah Premium </strong> is a leading provider of innovative solutions in the food industry, specializing in the processing and packaging of perishable foodstuffs. Founded with a commitment to combating food wastage and promoting sustainability, we are dedicated to revolutionizing the way food is preserved, distributed, and consumed.
                    <br/><br/>
<span style={{fontWeight:"bold", color:"green"}}>Our Mission:</span><br/>

At Hadassah Premium, our mission is clear: to minimize food wastage, protect the environment, empower businesses, and safeguard families. Through our advanced processing and packaging techniques, we aim to extend the shelf life of perishable food items, ensuring their availability and freshness for consumers while reducing the negative impact on our communities and planet.
<br/><br/>
<span style={{fontWeight:"bold",color:"green"}}>Our Approach:</span><br/>


Driven by a passion for excellence and innovation, we leverage cutting-edge technologies and industry best practices to develop high-quality solutions tailored to the needs of our clients. Our team of experts combines technical expertise with a deep understanding of market dynamics to deliver tangible results that drive business growth and promote sustainability.

<br/><br/>
<span style={{fontWeight:"bold", color:"green"}}>Our Values:</span>
<br/>
Integrity, innovation, and sustainability are at the core of everything we do at Hadassah Premium. We uphold the highest standards of ethical conduct, strive for continuous improvement and excellence, and are committed to making a positive impact on our communities and environment.
<br/><br/>
<strong style={{color:"green"}}>Join Us:</strong> Join us in our mission to create a world where food wastage is minimized, businesses thrive, and families enjoy fresh, safe foodstuffs every day. Together, we can make a difference and build a brighter, more sustainable future for all.</p>

    
                </div>
                <div className='ContactUsBodyRight'>
                    <img src={Logo} alt="Contact us"/>

                </div>
        </div>
        <div className='BackButtonWrap'>
                    <button 
                    onClick={handleLocation}
                    ><FaBackward/> Back</button>
                </div>
        </div>
    </div>
  )
}

export default AboutUs
