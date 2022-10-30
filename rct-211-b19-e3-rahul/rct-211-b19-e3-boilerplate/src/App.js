import "./App.css";
import { Buttons } from "./Components/Button";
import { Inputs } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";
import { Button } from '@chakra-ui/react'
import { useState } from "react";

function App({handlechange}) {
  
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <Button colorScheme="red"  onClick={() => incCount()}>Increment</Button>
      <Button colorScheme="red" onClick={() => incCount(3)}>Increment 3</Button>
      <Button colorScheme="red" onClick={() => decCount(2)}>Decrement 2</Button>
      <Button colorScheme="red" onClick={() => decCount(4)}>Decrement 4</Button>
      <Button colorScheme="red" onClick={() => decCount()}>Decrement 2</Button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Buttons size="lg" colorScheme="red" />
      <br />
      <Inputs  type="email" size="xs" handlechange={handlechange}  />
    </div>
  );
}

export default App;
