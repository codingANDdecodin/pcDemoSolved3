import React, { useState } from 'react'
import axios from 'axios'
import Input from '../../Utilities/Input'
import Textarea from '../../Utilities/Textarea'
import Button from '../../Utilities/Button'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {TiSocialLinkedin} from 'react-icons/ti'
import  spinner from '../../img/contactUs/spiner.gif'


function GetInTouch() {
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let [empty,setEmpty]=useState(false)
    let [loading,setLoading]=useState(false)

    const submitForm= async (e)=>{
        e.preventDefault();

        try{
            setLoading(true)
            if(name.length === 0 || email.length === 0){
               setLoading(false)
               setEmpty(true)
            }else {
                setEmpty(false)
            let data={
                name:name,
                email:email,
                message:message
                
            }
            const res = await axios.post(`/contact`, data);
            if(res.status === 200){
                setLoading(false)
                setName("");
                setEmail("");
                setMessage("");

            }else{
                setLoading(false)
               
            }
        
        }
        }catch(errr){

        }
       
    }
  return (
    <>
     <div className='  flex flex-1 mx-20 my-12 md:flex-col md:mx-0'>
            <div className='flex flex-col w-2/4 px-12 md:w-full'>
                <span className='text-xl font-bold text-gray-500 text-left pb-2'>Let’s get in touch</span>
                <p className='text-left text-gray-400'>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                     lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id 
                     elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nec sagittis 
                     sem nibh id elit. Aenean sollicitudin, lorem quis bibendum auctor. Nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate,
                     nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                      amet mauris.
                </p>
                <div className=' flex flex-col'>
                   <span  className='text-2xl font-bold text-gray-500 text-left'>Send us an Email</span>
                   <form>
                    <div className='flex flex-col'>

                       <div className='py-2'>
                            <Input className={'py-3 text-left  border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500'} type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}}  label={'Your Name(required)'}/>
                            {
                                empty &&  <p className='text-left text-red-600'>this is required*</p>
                            }
                        </div>
                        <div className='py-2'>
                            <Input className={'py-3 text-left  border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500'} type={'text'}  value={email} onChange={(e)=>{setEmail(e.target.value)}}  label={'Your Email(required)'}/>
                            {
                                empty &&  <p className='text-left text-red-600'>this is required*</p>
                            }
                        </div>
                        <div className='py-2'>
                            <Textarea className={'py-3 p-2   border-2 text-left focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500' } type={'text'} rows='4' value={message} onChange={(e)=>{setMessage(e.target.value)}}  label={'Your Message'}/>
                                         
                        </div>
                        <div className='text-left py-2'>
                        <Button className={'border-2 bg-yellow-500 px-14 py-3 hover:bg-yellow-600 text-white'} type={'submit'}  onClick={()=>{}}>send</Button>
                        {
                           loading &&     <div className='px-2'><img className='h-8' src={spinner}></img></div>
                        }
                        </div>
                    </div>
                   </form>
                </div>
            </div>
          
            <div className='flex flex-col px-12 w-2/4 md:w-full'>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8393344278593!2d73.80138207279747!3d18.44560258263346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953abbedeb37%3A0x6f25bdffe8f2da4e!2sSun%20Crest!5e0!3m2!1sen!2sin!4v1691825317525!5m2!1sen!2sin" 
        className='w-full md:h-96 pb-8'  height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col bg-yellow-00 py-4 border-y border-gray-400 text-gray-500'>
                    <span className='text-left text-2xl font-bold text-gray-500'>Contact Info</span>
                    <span className='text-left py-2'>Address: 738 Kertzmann Wall, 4989 Louie Rapid</span>
                    <span className='text-left py-2'>Email: info@domain.com</span>
                    <span className='text-left py-2'>Phone: (213) 2020 555013, (213) 7700 900106</span>
                    <span className='text-left py-2'>Fax:  (213) 7700 900106</span>
                </div>
                <div className='flex pt-7'>
                <BiLogoFacebook size='3em' color='yellow' className='border p-2 border-gray-400 mr-2 '/>
                <AiOutlineTwitter size='3em' color='yellow' className='border p-2 border-gray-400 mr-2'/>
                <AiOutlineGooglePlus size='3em' color='yellow' className='border p-2 border-gray-400 mr-2'/>
                <TiSocialLinkedin size='3em' color='yellow' className='border p-2 border-gray-400 mr-2'/>

            </div>
            </div>
         
    </div>   
    </>
  )
}

export default GetInTouch