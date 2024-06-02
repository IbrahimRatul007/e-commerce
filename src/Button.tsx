import React from 'react'

interface ButtonProps {
    text: string;
    type?:"submit" | "reset" | "button" | undefined;
    color: string;
    textColor: string;
}
const Button: React.FC<ButtonProps> = ({text,color,textColor,type}) => {
  return (
    <button className={`m-4 ml-0 ${color} w-full h-14 rounded-md ${textColor} font-bold hover:bg-red-400 hover:text-white drop-shadow-lg`} type={type}>{text}</button>
  )
}

export default Button
