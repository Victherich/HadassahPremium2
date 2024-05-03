import React from 'react'
import "../CSS/Products.css"
import Tomato from "../Images/tomato.png"
import Pepper from "../Images/pepper.png"
import Onion from "../Images/onion.png"
import Ugu from "../Images/ugu.png"

const Products = () => {
  return (
    <div className='OurProducts'>
        <h1>OUR PRODUCTS</h1>
        <div className='OurProductsBody'>
            <div className='OurProductCard'>
                <div className='OurProductCardImgWarp'>
                    <img src={Tomato} alt="Product"/>
                </div>
                <div className='OurProductCardTextWrap'>
                    <h2>Tomato Brilliance</h2>
                    <p>Experience the vibrant taste and nutritional goodness of our Tomato Brilliance. Each sun-ripened tomato is carefully selected and expertly dehydrated to preserve its flavor, color, and nutrients. Our advanced dehydration method locks in the natural sweetness and tanginess of tomatoes, making them perfect for soups, sauces, and salads. Our Tomato Brilliance is not only delicious but also promotes heart health and boosts immunity.</p>

                </div>
            </div>
            <div className='OurProductCard'>
                <div className='OurProductCardImgWarp'>
                    <img src={Onion} alt="Product"/>
                </div>
                <div className='OurProductCardTextWrap'>
                    <h2>Onion Elegance</h2>
                    <p>Elevate your culinary creations with the savory richness of our Onion Elegance. Handpicked onions undergo a meticulous dehydration process to capture their distinctive aroma and flavor. Unlike conventional methods, our dehydration technique retains the nutritional integrity of onions while enhancing their shelf life. Rich in antioxidants and anti-inflammatory properties, our Onion Elegance adds depth and complexity to your favorite dishes while supporting overall health and well-being.</p>

                </div>
            </div>
            <div className='OurProductCard'>
                <div className='OurProductCardImgWarp'>
                    <img src={Pepper} alt="Product"/>
                </div>
                <div className='OurProductCardTextWrap'>
                    <h2>Pepper Perfection</h2>
                    <p>Spice up your meals with the bold flavor and fiery heat of our Pepper Perfection. Each hand-selected pepper undergoes a specialized dehydration process to intensify its flavor while preserving its nutritional value. Unlike traditional drying methods, our dehydration technique ensures that our peppers retain their distinctive taste and aroma, making them a versatile ingredient in a variety of dishes. Packed with vitamin C and antioxidants, our Pepper Perfection not only adds zest to your meals but also provides immune-boosting benefits for overall health and vitality.</p>

                </div>
            </div>
            <div className='OurProductCard'>
                <div className='OurProductCardImgWarp'>
                    <img src={Ugu} alt="Product"/>
                </div>
                <div className='OurProductCardTextWrap'>
                    <h2>Verdant Vitality (Green Vegetables)</h2>
                    <p>Indulge in the crisp freshness of our Verdant Vitality green vegetables. Sourced from the finest farms, our selection of nutrient-rich green vegetables undergoes a gentle dehydration process to preserve their vibrant color and vital nutrients. Bursting with vitamins, minerals, and antioxidants, our Verdant Vitality green vegetables offer a convenient and flavorful way to incorporate essential nutrients into your diet. Whether added to stir-fries, salads, or smoothies, our greens vegetables are a delicious and nutritious addition to any meal.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
