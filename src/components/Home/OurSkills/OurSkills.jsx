import React from 'react'
import Item from './Item/Item'

function OurSkills() {

  let itemData=[
    {
      percentage:65,
      skillName:"HTML"
    },
    {
      percentage:65,
      skillName:"CSS"
    },
    {
      percentage:65,
      skillName:"REACT"
    },
    {
      percentage:65,
      skillName:"NODE"
    },
  ]



  return (
    <>
      <div className=' pt-10 pb-10 flex justify-around  bg-[url("https://okab.pixeldima.com/wp-content/uploads/2016/05/video-bg.jpg")] bg-cover bg-center bg-fixed -z-10 relative  md:h-screen md:bg-sticky md:pt-0 md:pb-0  '>
        <div className='absolute left-0 top-0 h-full w-full -z-10 bg-black opacity-40 flex justify-center'>        </div>  

            <div className='h-1/4 w-4/5 flex justify-around align-center  md:flex-col md:my-52 md:align-stretch '>
       

          
                { itemData.map((i,index)=> <Item key={index} percentage={i.percentage} skillName={i.skillName} />)}

            </div>     
      </div>
    </>
  )
}

export default OurSkills