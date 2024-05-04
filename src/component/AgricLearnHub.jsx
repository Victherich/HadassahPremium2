import React, { useState,useRef } from 'react'
import { FaBackward } from 'react-icons/fa'
import "../CSS/AgricLearnHub.css"
import Swal from 'sweetalert2'
import Learnpic1 from "../Images/front-view-woman-with-harvest.jpg"




const AgricLearnHub = () => {
  const AgricLearnHubBodyRef=useRef(null)

  const [agricLearnHubBodyShow,setAgricLearnHubBodyShow]=useState(false)
  const handleExplore = async()=>{
   await setAgricLearnHubBodyShow(true)
    if(AgricLearnHubBodyRef.current){
      AgricLearnHubBodyRef.current.scrollIntoView({behavior:'smooth',block:"start"})
    }
  }

  const handleLocation =()=>{
    window.history.back()
  }
  
  
  


  return (
    <div className='AgricLearnHub'>
        <div className='AgricLearnHubHeaderWrap'>
            <h2>Welcome to</h2>
            <h1>AgricLearnHub</h1>
            <h2>Educating and connecting Agriculturists and farmers for Knowledge, better productivity and efficiency.</h2>
            <div className='BackButtonWrap'>
                    <button 
                    onClick={handleExplore}
                    >Explore Knowledge </button>
                </div>
                <div className='BackButtonWrap'>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>Join the community </button>
                </div>
            
        </div>
        {agricLearnHubBodyShow&&<div className='AgricLearnHubBody' ref={AgricLearnHubBodyRef} >
            <div className='Learning'>
                <div className='LearningImgWrap'>
                    <img src={Learnpic1} alt="Learn"/>
                </div>
                <div className='LearningTextWrap'>
                    <p>How to plant all types of Crop in your state</p>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>View</button>
                </div>
            </div>

            <div className='Learning'>
                <div className='LearningImgWrap'>
                    <img src={Learnpic1} alt="Learn"/>
                </div>
                <div className='LearningTextWrap'>
                    <p>How to plant all types of Crop in your state</p>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>View</button>
                </div>
            </div>

            <div className='Learning'>
                <div className='LearningImgWrap'>
                    <img src={Learnpic1} alt="Learn"/>
                </div>
                <div className='LearningTextWrap'>
                    <p>How to plant all types of Crop in your state</p>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>View</button>
                </div>
            </div>

            <div className='Learning'>
                <div className='LearningImgWrap'>
                    <img src={Learnpic1} alt="Learn"/>
                </div>
                <div className='LearningTextWrap'>
                    <p>How to plant all types of Crop in your state</p>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>View</button>
                </div>
            </div>
            <div className='Learning'>
                <div className='LearningImgWrap'>
                    <img src={Learnpic1} alt="Learn"/>
                </div>
                <div className='LearningTextWrap'>
                    <p>How to plant all types of Crop in your state</p>
                    <button onClick={()=>Swal.fire({icon:"success",title:"Coming soon...", timer:2000,showConfirmButton:false})}>View</button>
                </div>
            </div>

        </div>}
        {/* <div className='BackButtonWrap'>
                    <button 
                    onClick={handleLocation}
                    ><FaBackward/> Back</button>
                </div> */}

    </div>
  )
}

export default AgricLearnHub
