import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-4 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>7th cross Channapatana <br />New bus stand Hassan ,Karnataka</p>
          <p  className='text-gray-500'>P.No: 9611521891 <br />Email: hemanthirgowda122@gmail.com</p>
          <button className='border border-black px-8 py-4 text-sm  hover:bg-black text-gray-950 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default Contact
