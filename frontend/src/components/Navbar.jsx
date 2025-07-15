import React from 'react'
import Button from './Button.jsx'

const Navbar = ({ setReview }) => {
  const handleClick = () => {
    // console.log("Hello");
    setReview("");
  };
  return (
    <nav className='fixed top-0 left-0 px-6 text-white w-full flex justify-center items-center z-50 bg-zinc-700'>
      <div className="mx-auto text-2xl font-bold">
        Review your code.
      </div>
      <Button onClick={handleClick}>Clear</Button>
    </nav>
  )
}

export default Navbar