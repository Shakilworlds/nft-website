import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='container pt-6 flex justify-between border-b border-[#ADFFAA]/25 pb-4'>
      {/* Company Logo */}
      <Image 
       src="/logo.png"
       alt='logo'
       height={60}
       width={50}
      />

      {/* Button */}

      <Button>
        Contact Me
      </Button>

    </nav>
  )
}

export default Navbar