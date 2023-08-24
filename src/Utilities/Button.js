import React from 'react'

const Button = ({className, children,onClick,type}) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button;