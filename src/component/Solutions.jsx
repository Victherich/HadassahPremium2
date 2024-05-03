import React from 'react'
import "../CSS/Solutions.css"
import Img1 from "../Images/sol1.jpeg"
import Img2 from "../Images/sol2.jpg"
import Img3 from "../Images/sol3.jpg"
import Img4 from "../Images/sol4.jpg"
import Img5 from "../Images/demand and supply.jpg"

const Solutions = () => {
  return (
    <div className='Solutions'>
        <h1>OUR SOLUTIONS</h1>
        <div className='Solution'>
                <div className='SolutionImgWrap'>
                    <img src={Img1} alt="Solution"/>
                </div>
                <div className='SolutionRight'>
                    <h2>Wastage Protection:</h2>
                    <p>We provide comprehensive solutions to minimize food wastage in markets and households, enabling businesses to maximize their resources and consumers to enjoy fresh, safe foodstuffs.</p>
                </div>
        </div>

        <div className='Solution'>
        <div className='SolutionRight'>
                    <h2>Environmental Protection:</h2>
                    <p> Through sustainable practices and eco-friendly packaging materials, we strive to reduce the environmental impact of food wastage, promoting a cleaner, healthier planet for future generations.
                      </p></div>
                <div className='SolutionImgWrap'>
                    <img src={Img2} alt="Solution"/>
                </div>
                
        </div>

        <div className='Solution'>
                <div className='SolutionImgWrap'>
                    <img src={Img3} alt="Solution"/>
                </div>
                <div className='SolutionRight'>
                    <h2>Business Loss Prevention:</h2>
                    <p>We support sellers and dealers of perishable foodstuffs by offering innovative processing and packaging solutions that enhance product longevity, reduce depreciation, and increase profitability.</p>
                </div>
        </div>

        <div className='Solution'>
        <div className='SolutionRight'>
                    <h2>Consumer satisfaction and convenience:</h2>
                    <p> With our products, Consumers no longer need to go through 
                        the stress of always visiting the markets to purchase perishable foodstuffs 
                        because they can always get as much as they want in just a visit without fear of perishing.</p>
                </div>
                <div className='SolutionImgWrap'>
                    <img src={Img4} alt="Solution"/>
                </div>
                
        </div>

        <div className='Solution'>
                <div className='SolutionImgWrap'>
                    <img src={Img5} alt="Solution"/>
                </div>
                <div className='SolutionRight'>
                    <h2>Scarcity and Inflation reduction:</h2>
                    <p>Because our solution prevents wastage of perishable foodstuffs, we are there by reducing 
                        scarcity of these foodstuffs as well as preventing inflation in their prices while in wait for next harvest season.
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Solutions
