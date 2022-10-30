//Complete the custom Input component based on the props that it expects to receive
import { Input } from '@chakra-ui/react'
import { useState } from 'react';

export const Inputs = (props) => {
  
  const [text,settext]=useState("rahul")
  const handlechange=(e)=>{
    settext(e.target.value)
  }
  return <Input type={props.type}  placeholder='Add Something'  size={props.size} width='auto' value={text} variant='outline'  onChange={handlechange}  />;
};

Inputs.defaultProps={
  type:"text",
  size:"md",
  
}