import React, { useState } from 'react'
import Button from '../../Utilities/Button'
import {TbTriangleInverted} from 'react-icons/tb'
import {TbTriangle} from 'react-icons/tb'
import Input from '../../Utilities/Input'
//  import careerbg from  '../../img/career/careerbg.jpeg'
function Careers() {
    const [findPosition,setFindPosition]=useState('');
    const [findLocation,setFindLocation]=useState('');

    const [openings,setOpenings]=useState([
        {
            position:"C++ DEVELOPER",
            role:"c++ Developer with emmbded c",
            location:"pune",
            experience:"4 years",
            description:{
                bullets: [
                    "At least 4 years of IT experience out of which minimum 2 years should be development using .Net / .Net Core and SQL Server.",

                    "Minimum 2 years of experience in using either Azure or Azure DevOps/ Azure DevOps Server and GitHub. ",

                    "Implement ALM/DevOps solution / processes using Azure/Azure DevOps and GitHub ",

                    "Mentor junior resources on AL/DevOps processes",

                    "Troubleshoot Azure DevOps pipelines for deployment issues."
                ]
            }
        },
        {
            position:"JAVA DEVELOPER",
            role:"Java Developer with emmbded c",
            location:"Pune",
            experience:"4 years",
            description:{
                bullets: [
                    "At least 4 years of IT experience out of which minimum 2 years should be development using .Net / .Net Core and SQL Server.",

                    "Minimum 2 years of experience in using either Azure or Azure DevOps/ Azure DevOps Server and GitHub. ",

                    "Implement ALM/DevOps solution / processes using Azure/Azure DevOps and GitHub ",

                    "Mentor junior resources on AL/DevOps processes",

                    "Troubleshoot Azure DevOps pipelines for deployment issues."
                ]
            }
        },
        {
            position:"FRONTEND DEVELOPER",
            role:"Frontend Developer with emmbded c",
            location:"Pune",
            experience:"4 years",
            description:{
                bullets: [
                    "At least 4 years of IT experience out of which minimum 2 years should be development using .Net / .Net Core and SQL Server.",

                    "Minimum 2 years of experience in using either Azure or Azure DevOps/ Azure DevOps Server and GitHub. ",

                    "Implement ALM/DevOps solution / processes using Azure/Azure DevOps and GitHub ",

                    "Mentor junior resources on AL/DevOps processes",

                    "Troubleshoot Azure DevOps pipelines for deployment issues."
                ]
            }
        },
        {
            position:"BACKEND DEVELOPER",
            role:"Backend Developer with emmbded c",
            location:"Pune",
            experience:"4 years",
            description:{
                bullets: [
                    "At least 4 years of IT experience out of which minimum 2 years should be development using .Net / .Net Core and SQL Server.",

                    "Minimum 2 years of experience in using either Azure or Azure DevOps/ Azure DevOps Server and GitHub. ",

                    "Implement ALM/DevOps solution / processes using Azure/Azure DevOps and GitHub ",

                    "Mentor junior resources on AL/DevOps processes",

                    "Troubleshoot Azure DevOps pipelines for deployment issues."
                ]
            }
        },
    ])


    const OpenPosition=(props)=>{
        let [arrow,setArrow]=useState(false)
        let changeArrow=()=>{
            setArrow(!arrow)
        }
        return(
            <>
              <div className='w-full text-left pl-12 py-8'>
                  <div className='text-4xl font-semibold pb-4 border-b-2 border-gray-300 '>{props.position}</div>
                  <div className='text-3xl flex  justify-between py-4 pr-4 font-thin' onClick={changeArrow}>
                       <p>{props.role}</p>
                       <div>
                        {
                            arrow ?<TbTriangle/>: <TbTriangleInverted/> 
                            

                        }
                       </div>
                    </div>
                  <div>
                    {   arrow &&  <div className='mt-24'> 
                            <p className='text-2xl font-semibold'>Location: <span className='font-normal'>{props.location}</span></p>
                            <p className='text-2xl font-bold py-6'>Expreience: <span className='font-normal'>{props.experience}</span></p>
                            <div className='pl-6'>
                                <ul>
                                    {
                                        props.description.bullets.map((i,index)=>{
                                            return(
                                                <li key={index}   Style='list-style:circle' className='text-2xl py-4'>{i}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='py-12'>
                                <Button className={"text-3xl bg-yellow-400 text-white p-6"}>APPLY NOW</Button>
                            </div>
                          </div>
                    
                    }
                  </div>
              </div>
            </>
        )
    }

    const filterOpenings=()=>{
        const uppercaseFindPosition = findPosition.toUpperCase();
        let filterData=openings.filter(data=> {
            // let cheakPosition=data.position===findPosition ;
            // console.log(data.position)
            // console.log(findPosition)
            //  return cheakPosition;
            const uppercasePosition = data.position.toUpperCase();
            return uppercasePosition === uppercaseFindPosition;
            })
                console.log(filterData)
        setOpenings(filterData)
    }

  return (
    <>
       <div className="bg-yellow-300 flex  flex-col w-full py-24 text-7xl text-left px-16">
        <span>EXPLORE OUR</span>
        <span className='font-bold'>CURRENT OPENINGS</span>

   
            <form action=' '>
            <div className='flex'>

                <div className='mt-10 w-1/5 '>

                    <Input type={'text'} className={' h-10 text-xl rounded-xl pl-2  '} placeholder={'enter position'} value={findPosition} onChange={(e)=>{setFindPosition(e.target.value)}}></Input>
                </div>

                <select className='h-10 text-xl px-10 mt-10 w-1/5 ml-8  rounded-xl ' value={findLocation} onChange={(e)=>{setFindLocation(e.target.value)}}>
                    <option value="pune" >pune</option>
                    <option value="mumbai" >mumbai</option>
                </select>

                <div className='  w-1/5 ml-8 '>
                    <Button type={'button'} onClick={filterOpenings} className={'text-lg border border-black w-full  rounded-xl h-10 bg-blue-500 '} >Job Search</Button>
                </div>
            </div>

            </form>

       </div>
         
       <div>
        <p className='text-2xl text-left pl-12'>{openings.length} <span>jobs found</span></p>
        {
            openings.map((i,index)=>{
                  return <OpenPosition key={index} position={i.position} role={i.role} location={i.location} experience={i.experience} description={i.description}></OpenPosition>
            })
        }
       </div>
    </>
  )
}

export default Careers