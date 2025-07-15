import React from 'react'

const Button = ({ children, onClick=() => console.log("Empty function"), type='button', className="", disabled=false}) => {
  return (
    <button 
      type={type}
      className={`my-3 px-2 select-none text-white rounded transition font-semibold ${!disabled ? "bg-fuchsia-600 hover:bg-fuchsia-600 active:scale-95 cursor-pointer" : "bg-gray-500 cursor-not-allowed"} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button