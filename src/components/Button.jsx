import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-gradient-to-r from-[#89FFF0] to-[#B6FF9B] text-[#031B29] py-5 px-10 rounded-[4px] font-Allenoire text-xl cursor-pointer text-center'>
      {props.children}
    </div>
  )
}

export default Button