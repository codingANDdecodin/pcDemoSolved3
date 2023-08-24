import React from 'react'
import "./WeDo.css"
import tablet from '../../../img/WeDo/tablet.png'

function WeDo() {
  return (
    <div>
        <div className='container'>
            <div className='container-wedo'>
                <div className='heading-text'>What We Do ?</div>
                <div className='reguler-text'>
                <p>
                Ideas aPC WEB WORKS was established in 2007 with a vision to provide a Software Development and web application
                 development company with experienced IT consultants who can offer valuable business solutions. We help you and your business connect with customers, 
                integrate with vendors and empower employees to work to their fullest potential.
                </p>
                <p>
                these advantages assure that the organization will
                  be dynamic enough to adapt itself to the fast changing world of Information
                 Technology.
                </p>
                </div>  
                <div className='btns'>
                    <button className='btn-read'>Read More</button>
                </div>
            </div>
            <div className='container-img'>
                
                    <img className='picture' src={tablet}/>
            
            </div>
        </div>
    </div>
  )
}

export default WeDo