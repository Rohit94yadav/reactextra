import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { handleAddCount, handleReduceCount } from '../Redux/AppReducer/Action';


const Counter = () => {

//   const {dispatch, subscribe} = Store;

// const {count} = Store.getState();

// const [update, setUpdate] = useState(0)

// subscribe(()=>{
//   setUpdate(prev => prev+1)
// })

    const count = useSelector((state)=> {return state.AppReducer.count})
const dispatch = useDispatch();

const handleAdd = ()=>{
  dispatch(handleAddCount(1))
}

const handleReduce = ()=>{
  dispatch(handleReduceCount(2))
}

  return (
    <div>
     <h1>Counter {count}</h1>
     <button onClick={handleAdd}>ADD</button>
     <button onClick={handleReduce}>REDUCE</button>
    </div>
  )
}

export default Counter
