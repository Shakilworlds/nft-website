import Image from 'next/image'
import React from 'react'
import NFTsButton from './NFTsButton'

const NFTsCard = (props) => {
  return (
    <div className='border border-[#57FD8E]/10 bg-white/5 rounded-lg'>

      {/* NFT Image */}
      <div>
        <Image 
        src={props.imgURL} 
        alt=''
        height={408}
        width={408}
        />
      </div>

      {/* Link Button */}
      <div className='flex px-6 pt-10 pb-6'>
        <NFTsButton>
         {props.name}
        </NFTsButton>
      </div>
    </div>
  )
}

export default NFTsCard