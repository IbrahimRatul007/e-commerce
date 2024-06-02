import React from "react";
import {useForm} from 'react-hook-form'
import Input from "./Input";
import Button from "./Button";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Signup = () => {
    const schema = yup.object().shape({
        userName: yup.string().required(),
        password: yup.string().min(4).max(20).required(),
    })
    
    const{handleSubmit,register}=useForm({
        resolver: yupResolver(schema),
    })
    
    const onSubmit = ((data:{}) =>{
        console.log(data)
    })

  return (
    <div className="flex justify-around items-center sm:max-xl:h-full w-3/4 sm:max-xl:mx-auto">
      <img
        src="assets/sideImage.png"
        alt="hello"
        className="w-1/2 h-2/3 sm:max-xl:hidden rounded-md"
      />
      <div className=" w-96 h-96 sm:max-xl:flex-col sm:max-xl:absolute sm:max-xl:top-1/4">
        <div className="w-full flex flex-col items-start gap-4 mb-12">
          <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
          <p className="text-lg font-bold">Enter your details below</p>
        </div>
        <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Username" type="text" name="userName" register={register} />
          <Input placeholder="Password" type="password" name="password"  register={register}/>
        <div className="flex">
        <Button text={"Log In"} color="bg-red-500" textColor="text-white" />
        <Button text={"Forgot Password?"} color="white" textColor="text-red-500" type="button"/>
        </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;
