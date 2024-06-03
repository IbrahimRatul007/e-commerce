import React from "react";
import { LoginProps } from "./Login";
import { SignUpProps } from "./Signup";

interface MyNewProps extends SignUpProps, LoginProps {}

interface InputProps {
  placeholder: string;
  type?: string;
  name: "password" | "userName" | "phone" | "address" | "email" | "name";
  register: any;
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, register }) => {
  return (
    <input
      className="border-b-2 pb-2 border-gray-400"
      placeholder={placeholder}
      type={type}
      {...register(name)}
    />
  );
};

export default Input;
