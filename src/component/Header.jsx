// import React, { useContext, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import "../CSS/Header.css";
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';
// import Logo from "../Images/logo.png";
// import "animate.css";

// const Header = () => {
//   const { active, setActive } = useContext(Context);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/specialofferonlypage");
//   };

//   const handleNavigate2 = () => {
//     navigate("/trainingonlypage");
//   };

//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [mobileMenu2,setMobileMenu2]=useState(false)

//   const toggleMobileMenu = () => {
//     setMobileMenu(!mobileMenu);

//     if(mobileMenu===true){
//       setMobileMenu2(true)
//     }

//   };

  

//   return (
//     <div className='HeaderWrap'>
//       <div className='Header'>

//         <div className='HeaderLeft'>
//           <img src={Logo} alt="logo" />
//         </div>
//         <div className='HeaderRight'>
//           <NavLink to={"/"} className={location.pathname === "/" ? "HeaderRightActive" : ""}>Home</NavLink>
//           <NavLink to={"/aboutus"} className={location.pathname === "/aboutus" ? "HeaderRightActive" : ""}>About us</NavLink>
//           <NavLink to={"/products"} className={location.pathname === "/products" ? "HeaderRightActive" : ""}>Products</NavLink>
//           <NavLink to={"/solutions"} className={location.pathname === "/solutions" ? "HeaderRightActive" : ""}>Solutions</NavLink>
//           <NavLink to={"/contactus"} className={location.pathname === "/contactus" ? "HeaderRightActive" : ""}>Contact us</NavLink>
//         </div>

//         {mobileMenu && (
//           <div className={`HeaderRightMobile animate__animated ${mobileMenu2 ? 'animate__slideOutRight' : 'animate__slideInRight' }`}>
//             <NavLink to={"/"} className={location.pathname === "/" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Home</NavLink>
//             <NavLink to={"/aboutus"} className={location.pathname === "/aboutus" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>About us</NavLink>
//             <NavLink to={"/products"} className={location.pathname === "/products" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Products</NavLink>
//             <NavLink to={"/solutions"} className={location.pathname === "/solutions" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Solutions</NavLink>
//             <NavLink to={"/contactus"} className={location.pathname === "/contactus" ? "HeaderRightActive" : ""} onClick={() => setMobileMenu(false)}>Contact us</NavLink>
//             <NavLink onClick={() => setMobileMenu(false)}>X-Close Menu</NavLink>
//           </div>
//         )}

//         <div className={location.pathname === "/" || location.pathname === "/agriclearnhub" ? 'BurgerHome' : "Burger"}>
//           {mobileMenu === false && <h3 onClick={toggleMobileMenu}>Menu</h3>}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../CSS/Header.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import Logo from "../Images/logo.png";
import "animate.css";

const Header = () => {
  const { active, setActive } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/specialofferonlypage");
  };

  const handleNavigate2 = () => {
    navigate("/trainingonlypage");
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='HeaderWrap'>
      <div className='Header'>
        <div className='HeaderLeft'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='HeaderRight'>
          <NavLink to={"/"} className={location.pathname === "/" ? "HeaderRightActive" : ""}>Home</NavLink>
          <NavLink to={"/aboutus"} className={location.pathname === "/aboutus" ? "HeaderRightActive" : ""}>About us</NavLink>
          <NavLink to={"/products"} className={location.pathname === "/products" ? "HeaderRightActive" : ""}>Products</NavLink>
          <NavLink to={"/solutions"} className={location.pathname === "/solutions" ? "HeaderRightActive" : ""}>Solutions</NavLink>
          <NavLink to={"/contactus"} className={location.pathname === "/contactus" ? "HeaderRightActive" : ""}>Contact us</NavLink>
        </div>

        {mobileMenu && (
          <div ref={menuRef} className={`HeaderRightMobile animate__animated ${mobileMenu ? 'animate__slideInRight' : 'animate__slideOutRight'}`}>
            <NavLink to={"/"} className={location.pathname === "/" ? "HeaderRightActive" : ""} onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to={"/aboutus"} className={location.pathname === "/aboutus" ? "HeaderRightActive" : ""} onClick={closeMobileMenu}>About us</NavLink>
            <NavLink to={"/products"} className={location.pathname === "/products" ? "HeaderRightActive" : ""} onClick={closeMobileMenu}>Products</NavLink>
            <NavLink to={"/solutions"} className={location.pathname === "/solutions" ? "HeaderRightActive" : ""} onClick={closeMobileMenu}>Solutions</NavLink>
            <NavLink to={"/contactus"} className={location.pathname === "/contactus" ? "HeaderRightActive" : ""} onClick={closeMobileMenu}>Contact us</NavLink>
            <NavLink onClick={closeMobileMenu}>X-Close Menu</NavLink>
          </div>
        )}

        <div className={location.pathname === "/" || location.pathname === "/agriclearnhub" ? 'BurgerHome' : "Burger"}>
          {mobileMenu === false && <h3 onClick={toggleMobileMenu}>Menu</h3>}
        </div>

      </div>
    </div>
  );
};

export default Header;
