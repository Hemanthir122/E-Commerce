import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState]=useState('Login');
  const onSubmitHandler=async(e)=>{
    e.preventDefault();

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className=' inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.4px] w-6 bg-gray-800 align-middle'/>
      
      </div>
      {currentState==='Login' ? '' :< input type="text " className='w-full   border border-black px-3 py-2 rounded-xl' placeholder='Name'  required />}
      <input type="email " className='w-full   border border-black px-3 py-2 rounded-xl' placeholder='Email'  required />
      <input type="password " className='w-full   border border-black px-3 py-2 rounded-xl' placeholder='password' required/>
      <div className='w-full flex  text-sm mt-[-8px]'>
      <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto  gap-2 text-gray-800">
  <p className="cursor-pointer">Forget your password?</p>
  {currentState === 'Login' ? (
    <p onClick={() => setCurrentState('Sign up')} className="cursor-pointer">Create Account</p>
  ) : (
    <p onClick={() => setCurrentState('Login')} className="cursor-pointer ">Login Here</p>
  )}
</form>

<div className="flex justify-center mt-4 w-full">
        <button className="bg-black text-white border rounded-lg px-8 py-2">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>  
      </div>
    </form>
  )
}

export default Login
