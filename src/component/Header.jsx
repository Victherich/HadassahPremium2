import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Header.css"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './Context'
import Logo from "../Images/logo.png"
import "animate.css"



const Header = () => {
  const {active,setActive}=useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate =()=>{
    navigate("/specialofferonlypage")
  }

  const handleNavigate2 =()=>{
    navigate("/trainingonlypage")
  }

  const [mobileMenu,setMobileMenu]=useState(false)

  return (
    <div className='HeaderWrap'>
      <div className='Header'>
      
        <div className='HeaderLeft'>
          <img src={Logo} alt="logo"/>
        </div>
        <div className='HeaderRight'>
          <NavLink to={"/"} className={location.pathname==="/"?"HeaderRightActive":""}>Home</NavLink>
          <NavLink to={"/aboutus"} className={location.pathname==="/aboutus"?"HeaderRightActive":""}>About us</NavLink>
          <NavLink to={"/products"} className={location.pathname==="/products"?"HeaderRightActive":""}>Products</NavLink>
          <NavLink to={"/solutions"} className={location.pathname==="/solutions"?"HeaderRightActive":""}>Solutions</NavLink>
          <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"HeaderRightActive":""}>Contact us</NavLink>
        </div>

        {mobileMenu && (
  <div className='HeaderRightMobile animate__animated animate__slideInRight'>
    <NavLink to={"/"} className={location.pathname === "/" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Home</NavLink>
    <NavLink to={"/aboutus"} className={location.pathname === "/aboutus" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>About us</NavLink>
    <NavLink to={"/products"} className={location.pathname === "/products" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Products</NavLink>
    <NavLink to={"/solutions"} className={location.pathname === "/solutions" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Solutions</NavLink>
    <NavLink to={"/contactus"} className={location.pathname === "/contactus" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Contact us</NavLink>
    <NavLink onClick={() => setMobileMenu(false)}>X-Close Menu</NavLink>
  </div>
)}


        <div className={location.pathname==="/"?'BurgerHome':"Burger"}>
            {mobileMenu===false&&<h3 onClick={()=>setMobileMenu(true)}>Menu</h3>}
        </div>
        
      </div>
    </div>
  )
}

export default Header
