import React from 'react'

function Input({className,type,label,value,onChange,placeholder}) {
  return (
    <>
    <div className='flex flex-col w-full'> 
        <label className=' text-left text-gray-400'>{label}</label>
        <input className={className} type={type} onChange={onChange} value={value} placeholder={placeholder}/>
    </div>    
    </>
  )
}

export default Input