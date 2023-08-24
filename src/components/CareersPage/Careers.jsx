import React, { useState } from 'react'
import Button from '../../Utilities/Button'
import {TbTriangleInverted} from 'react-icons/tb'
import {TbTriangle} from 'react-icons/tb'
import Input from '../../Utilities/Input'
// import careerbg from '../../img/career/careerbg.jpeg'
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
            location:"mumbai",
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

    const [filterOpenings,setFilterOpenings]=useState([...openings])



    const OpenPosition=(props)=>{
        let [arrow,setArrow]=useState(false)
        let changeArrow=()=>{
            setArrow(!arrow)
        }
        return(
            <>
              <div className='w-full text-left pl-12 py-8 md:pl-4'>
                  <div className='text-4xl font-semibold pb-4 border-b-2 border-gray-300 md:text-2xl '>{props.position}</div>
                  <div className='text-3xl flex  justify-between py-4 pr-4 font-thin md:text-xl' onClick={changeArrow}>
                       <p>{props.role}</p>
                       <div>
                        {
                            arrow ?<TbTriangle/>: <TbTriangleInverted/> 
                            

                        }
                       </div>
                    </div>
                  <div>
                    {   arrow &&  <div className='mt-24'> 
                            <p className='text-2xl font-semibold md:text-xl'>Location: <span className='font-normal'>{props.location}</span></p>
                            <p className='text-2xl font-bold py-6 md:text-xl' >Expreience: <span className='font-normal'>{props.experience}</span></p>
                            <div className='pl-6'>
                                <ul>
                                    {
                                        props.description.bullets.map((i,index)=>{
                                            return(
                                                <li key={index}   style={{'listStyle':'circle'}} className='text-2xl py-4 md:text-lg md:py-3 sm:pr-2'>{i}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='py-12 md:flex md:justify-center'>
                                <Button className={"text-3xl bg-yellow-400 text-white p-6 md:text-lg md:p-4 "}>APPLY NOW</Button>
                            </div>
                          </div>
                    
                    }
                  </div>
              </div>
            </>
        )
    }

    const filterOpeningsHandler=()=>{
        const uppercaseFindPosition = findPosition.toUpperCase();
        const  uppercaseFindLocation=findLocation.toUpperCase();
        let filterData=openings.filter(data=> {

            const uppercasePosition = data.position.toUpperCase();
            const uppercaseLocation=data.location.toUpperCase();

           
             return uppercaseFindLocation===uppercaseLocation || uppercasePosition === uppercaseFindPosition;
        })
        setFilterOpenings(filterData)
    }

  return (
    <>
       <div className="bg-yellow-300 flex  flex-col w-full py-24 text-7xl text-left px-16 md:text-4xl sm:text-3xl sm:px-6 ">
        <span>EXPLORE OUR</span>
        <span className='font-bold'>CURRENT OPENINGS</span>

   
            <form action=' '>
            <div className='flex md:flex-col  md:align-baseline'>

                <div className='mt-10 w-1/5  md:w-2/5 sm:w-full'>

                    <Input type={'text'} className={' h-10 text-xl rounded-xl pl-2  '} placeholder={'enter position'} value={findPosition} onChange={(e)=>{setFindPosition(e.target.value)}}></Input>
                </div>

                <select className='h-10 text-xl px-10 mt-10 w-1/5 ml-8  rounded-xl md:w-2/5 md:ml-0 md:px-0 sm:w-full' value={findLocation} onChange={(e)=>{setFindLocation(e.target.value)}}>
                    <option value=''>Location</option>
                    <option value="pune" >pune</option>
                    <option value="mumbai" >mumbai</option>
                </select>

                <div className='  w-1/5 ml-8 md:w-2/5 md:ml-0 md:mt-10 sm:w-full'>
                    <Button type={'button'} onClick={filterOpeningsHandler} className={'text-lg border border-black w-full  rounded-xl h-10 bg-blue-500 '} >Job Search</Button>
                </div>
            </div>

            </form>

       </div>
         
       <div>
        <p className='text-2xl text-left pl-12 pt-4 md:text-lg md:pl-4'>{filterOpenings.length} <span>jobs found</span></p>
        {
            filterOpenings.map((i,index)=>{
                  return <OpenPosition key={index} position={i.position} role={i.role} location={i.location} experience={i.experience} description={i.description}></OpenPosition>
            })
        }
       </div>
    </>
  )
}

export default Careers
