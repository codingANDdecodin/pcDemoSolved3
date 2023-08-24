import React, { useEffect } from 'react'
import './Welcome.css'

function Welcome() {

  return (
    <div>
        <div className='md:bg-cover md:bg-no-repeat md:bg-center  welcome-container'>  
            <div className='md:pt-0 md:m-0  welcome-parent'>

                <div className='  welcome-details-name'>
                    <span className='md:text-4xl  primary-text'>
                      <span className='  normal-text'> WELCOME TO </span> <span className='highlighted-text'>PC WEB WORKS</span>
                    </span>
                </div>
                <div  className='  welcome-details-tagline'>
                    <div className='md:text-sm   tagline-line'>
                        <span className='tagline-line-words'>pc</span>
                        <span className='tagline-line-words'>web</span>
                        <span className='tagline-line-words'>works</span>
                        <span className='tagline-line-words'>come</span>
                        <span className='tagline-line-words'>with</span>
                        <span className='tagline-line-words'>more</span>
                        <span className='tagline-line-words'>than</span>
                        <span className='tagline-line-words'>260</span>
                        <span className='tagline-line-words'>morden</span>
                        <span className='tagline-line-words'>web</span>
                        <span className='tagline-line-words'>elements</span>
                        <span className='tagline-line-words'>fully</span>
                        <span className='tagline-line-words'>editable</span>
                        <span className='tagline-line-words'>and</span>
                    </div>
                    <div className='md:text-sm   tagline-line'>
                    <span className='tagline-line-words'>covering</span>
                    <span className='tagline-line-words'>everything</span>
                    <span className='tagline-line-words'>needed</span>
                    <span className='tagline-line-words'>to</span>
                    <span className='tagline-line-words'>build</span>
                    <span className='tagline-line-words'>your</span>
                    <span className='tagline-line-words'>own</span>
                    <span className='tagline-line-words'>website</span>
    
                    </div>                    
                </div>

                <div className=' welcome-options'>
                    <div className='  btn-primary' >
                        <button className=' md:bg-red-400 btn-primary-view   '>VIEW DEMO</button>
                    </div>
                    <div className='btn-primary' >
                        <button className='btn-primary-buy'>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome