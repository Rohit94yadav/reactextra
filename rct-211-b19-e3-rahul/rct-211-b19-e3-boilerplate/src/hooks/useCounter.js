/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
import { useState } from "react";
export const useCounter = (props) => {
  const [countValue,setcountvalue] = useState("");

  const incCount = (value=1) => {
    const maxsum =countValue+value

    if(maxsum <= props.maxValue){
      setcountvalue((prev)=>Number(prev+value))
    }
  };


const decCount = (value=1) => {
  const minisum=countValue-value

  if(minisum>=props.minValue){
    setcountvalue((prev)=>Number(prev-value))
  }
};
  return {
    countValue,
    incCount,
    decCount,
  };
};
