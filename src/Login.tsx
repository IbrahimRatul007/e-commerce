import React from 'react'
import { FcGoogle } from "react-icons/fc";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form';

const Login = () => {
  const schema = yup.object().shape({
    userName: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().min(4).max(20).required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
})
const{handleSubmit,register}=useForm({
  resolver: yupResolver(schema),
})
    
  const onSubmit = ((data:{}) =>{
      console.log(data)
  })
  return (
      <div className='flex justify-around h-2/4 w-3/4 sm:max-xl:flex-col sm:max-xl:items-center'>
        <img src="assets/sideImage.png" alt='hello' className='w-1/2 h-2/3 sm:max-md:hidden rounded-md'/>
          <div className=' w-96 h-svh '>
              <div className='w-full flex flex-col items-start gap-4 mb-12'>
              <h1 className='text-4xl font-bold'>Create an account</h1>
              <p className="text-lg font-bold">Enter your details below</p>
              </div>
            <form className='flex flex-col gap-8 w-full'>

              <Input placeholder="Email" type='email'name='email' register={register}/>
              <Input placeholder="Username" type='text'name='userName' register={register}/>
              <Input placeholder="Password" type='password'name='password' register={register}/>
              <Input placeholder="Name" type='text'name='name' register={register} />
              <Input placeholder="Address" type='text'name='address' register={register}/>
              <Input placeholder="Phone" type="text"name='phone' register={register}/>

            </form>
          <Button text={"Create Account"} color='bg-red-500' textColor="white"/>
          <div className='flex flex-col gap-8'>
              <button className='flex items-center justify-center gap-2 w-full h-14 border-2 drop-shadow-lg border-gray-400 rounded-md hover:scale-105'><FcGoogle size={30}/>Sign up with Google</button>
              <p>Already have account? <a href='#'><strong>Log in</strong></a></p>
          </div>
          </div>
      </div>
  )
}

export default Login
