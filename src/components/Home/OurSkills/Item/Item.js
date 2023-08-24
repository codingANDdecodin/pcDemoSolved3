import React, { useRef, useState } from 'react'
import "./Item.css"

function Item(props) {
    let percentage=65;
    let dasharray=565;
    // let start=useRef(0)
    // let dashoffset=175.7;
    let onloadHandler=()=>{
        // dashoffset= dasharray- (dasharray * percentage)/100
    }
    // const percentageLoadHandler=()=>{
    //   let progress=  setInterval(()=>{
    //     start.current++;
    //     console.log(start)

    //     if(start.current===percentage){
    //       clearInterval(progress);
    //     }
    //   },1000)
    // }
  return (
    <>
    <div className='relative  my-10 pt-0 px-0 flex flex-col md:bg-red-200'>
    <svg version="1.1" width="230px" height="220px" className='md:self-center' >

    <circle cx="110" cy="110" r="90" strokeDasharray={dasharray}  className='animate-dashAnimation'/>

      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill='white'>
         {`${props.percentage}%`}
       </text>

    </svg>
    <div className='text-white'>{props.skillName}</div>
    </div>
      
    </>
  )
}

export default Item