import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items justify-between gap-4 py-3 mt-20'>
      <h1 className='text-blue-500 font-bold text-2xl'>DreamPixel</h1>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm
        text-gray-500 max-sm:hidden'>Copyright @DreamPixel | All right reserved</p>

      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="" width={35}/>
        <img src={assets.twitter_icon} alt="" width={35} />
        <img src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer