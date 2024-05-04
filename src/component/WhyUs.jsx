import React from 'react'
import "../CSS/WhyUs.css"
import {FaAssistiveListeningSystems, FaCar, FaCashRegister, FaDev, FaDollarSign, FaGlobeAfrica, FaMobile, FaMoneyBill, FaMoneyCheck, FaProjectDiagram, FaTripadvisor, FaUsers, } from "react-icons/fa"
import { FaBowlFood, FaHeartCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const WhyUs = () => {
  return (
    <div className='OurServicesWrap'>
        <div className='OurServices'>
            <div className='OurServicesHeading'>
              <h1>Value Propositions</h1>
            </div>
            <div className='OurServicesBody'>
              
                <div className='OurService'>
                    <FaBowlFood className='OurServiceBodyIcon'/>
                    <h2>Extended Shelf Life:</h2>
                    <p>By utilizing advanced processing and packaging techniques, we ensure that our perishable foodstuffs stay fresh for longer periods, reducing the need for frequent replacements and minimising food wastage.</p>
                </div>

                

                <div className='OurService'>
                    <FaHeartCircleCheck className='OurServiceBodyIcon'/>
                    <h2>Enhanced Health Benefits:</h2>
                    <p>Our dehydration method preserves the natural nutrients and flavors of the produce, offering customers wholesome and nutritious options that contribute to their overall well-being.</p>
                </div>

                <div className='OurService'>
                    <FaDollarSign className='OurServiceBodyIcon'/>
                    <h2>Cost Efficiency:</h2>
                    <p>With our products, customers can enjoy the benefits of extended shelf life, reducing the frequency of grocery shopping and minimizing food spoilage-related expenses, ultimately saving them money in the long run.</p>
                </div>

                <div className='OurService'>
                    <FaGlobeAfrica className='OurServiceBodyIcon'/>
                    <h2>Environmental Sustainability: </h2>
                    <p>By minimizing food wastage and utilizing eco-friendly packaging materials, we actively contribute to environmental conservation, allowing customers to make a positive impact on the planet with every purchase.</p>
                </div>

                <div className='OurService'>
                    <FaTripadvisor className='OurServiceBodyIcon'/>
                    <h2>Convenience: </h2>
                    <p>Our processed and packaged foodstuffs offer unparalleled convenience, allowing customers to enjoy fresh, nutritious ingredients without the hassle of frequent shopping trips or extensive meal preparation.</p>
                </div>

            </div>
            <div>
              
            </div>
        </div>
        <div className='EnterAgricLearnHub'>
            <p>Are you a farmer or an Agriculturist? Click to enter the <Link to={"/agriclearnhub"}>Agric-Learn Hub</Link> by Hadassah Premium</p>
        </div>
    </div>
  )
}

export default WhyUs
