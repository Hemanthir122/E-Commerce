import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"US"}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img}alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nihil, quo voluptates iste odit minima, facere ut repudiandae nulla voluptatem architecto natus doloremque vitae a! Nisi blanditiis quo illum placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, distinctio voluptatem aliquam quo necessitatibus similique labore magni vel omnis numquam laboriosam. Aspernatur laboriosam ipsa officiis quo odit nostrum ratione veritatis?</p>
        <b className='text-gray-800 text-xl'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam impedit recusandae pariatur non in consectetur voluptas ullam nihil sunt quo, cumque expedita, ducimus, alias reprehenderit magnam id? Consectetur, soluta accusantium!</p>
      </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
