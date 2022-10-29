import React, { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {

    const[text, setText] = useState("");

    const handleAdd =()=>{
        if(text){
            handleAddTodo(text);
            setText("")
        }
    }

  return (
    <div>
     <input placeholder='ADD TODOS HERE' type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
     <button onClick={handleAdd} >ADD</button>
    </div>
  )
}

export default TodoInput
