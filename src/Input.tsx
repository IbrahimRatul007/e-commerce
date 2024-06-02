import React from 'react'
import {FieldValues, UseFormRegister, useForm} from 'react-hook-form'
import * as yup from "yup"
   
interface InputProps {
    placeholder: string;
    type?:string;
    name:"password" | "userName" | "phone" | "address" | "email"|"name";
    // register:UseFormRegister<YupPropsTwo>;
}

interface YupPropsOne {
  userName: string;
  password: string;
}

interface YupPropsTwo {
  userName: string;
  password: string;
  phone: string;
  address: string;
  email: string;
  name: string;
}

const Input: React.FC<InputProps> = ({placeholder, type,name,register}) => {
  return (
    <input className='border-b-2 pb-2 border-gray-400' placeholder={placeholder} type={type} {...register(name)}/>   
  )
}

export default Input
