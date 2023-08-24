import React, { useState } from 'react'
import axios from "axios";
import Textarea from '../../../Utilities/Textarea';
import Input from '../../../Utilities/Input';
import Button from '../../../Utilities/Button';
import spinner from '../../../img/contactUs/spiner.gif'


function ContactUs() {
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
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
                subject:subject,
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
    
      <form onSubmit={submitForm}>
        <div className='px-10 py-28 bg-gray-50 md:px-0 md:py-0'> 
            <div className='flex flex-col space-y-3 mx-32 md:mx-10 font-ligth text-gray-400 text-sm' >
                <div className='flex-1 flex space-x-20 md:flex-col  md:space-x-0 md:space-y-5'>
                    <div className='w-full'>
                      <Input className={'py-3 text-left  border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500'} type={'text'}  value={name} onChange={(e)=>{setName(e.target.value)}} label={'Your Name(required)'}/>
                        {
                            empty &&  <p className='text-left text-red-600'>this is required*</p>
                        }
                   </div>
                   <div className='w-full'>
                    <Input className={'py-3  text-left  border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500'} type={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}} label={'Your Email(required)'}/>
                       {
                            empty &&  <p className='text-left text-red-600'>this is required*</p>
                        }
                    </div>

                    
                    <Input className={'py-3 text-left  border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500'} type={'text'} value={subject} onChange={(e)=>{setSubject(e.target.value)}} label={'Subject'}/>


                
                    
                </div>
                <div>
                
                    <Textarea className={'py-3 p-2   border-2 text-left focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500' } type={'text'} value={message} rows='4' onChange={(e)=>{setMessage(e.target.value)}} label={'Your Message'}/>
                
                </div>
                <div className='flex  justify-center'>
                    <Button className={'border-2 bg-yellow-500 px-14 py-3 hover:bg-yellow-600 text-white'} type={'submit'} onClick={()=>{}}>send</Button>
                    {
                        loading &&     <div className='px-2'><img className='h-8' src={spinner}></img></div>
                    }
                </div>
            </div>
        </div>
        </form>
    </>
  )
}

export default ContactUs