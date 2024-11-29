import React from 'react'

const NewsletterBox = () => {

const onSubmitHandler=(event)=>{
    event.preventDefult();
}

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% Off</p>
      <p className='text-gray-400 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt expedita ipsam aliquam repellat impedit at quod. Aut quam nobis aliquam libero dolore nesciunt quo sed modi quae eos, repellat architecto.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center  gap-3 mx-auto my-6 border pl-3 '>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
