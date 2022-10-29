import React, { useEffect } from 'react';
import axios from "axios";
import TodoInput from './TodoInput'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTodosFailure, getTodosRequest, getTodosSuccess, PostTodoFailure, PostTodoRequset, PostTodoSuccess } from '../Redux/AppReducer/Action';

const Todos = () => {

    const dispatch = useDispatch();

    // const isLoading = useSelector((state) => state.isLoading);
    // const {todos} = useSelector((state)=> state.todos)
   
    const {todos,isLoading,isError} = useSelector((state)=> {
        return{
            todos: state.AppReducer.todos,
            isLoading: state.AppReducer.isLoading,
            isError: state.AppReducer.isError,
        }
        },shallowEqual)

    const getTodos = ()=>{

        dispatch(getTodosRequest())

        axios.get(`http://localhost:8080/todos`).then(res=>{
            dispatch(getTodosSuccess(res.data))
            console.log(res.data)
        })
        .catch(err=>{
            dispatch(getTodosFailure())
            console.log(err)
        })
    }

    const addTodo = (title)=>{
        if(title){
            const payload = {
                title, status:false,
            }
            dispatch(PostTodoRequset())
           return axios.post(`http://localhost:8080/todos`,payload).then((res)=>{
                dispatch(PostTodoSuccess(res.data))
                console.log(res.data)
            })
            .catch((err)=>{
                dispatch(PostTodoFailure())
                console.log(err)
            })
        }
    }

    const handleAddTodo=(text)=>{
        addTodo(text).then(()=> getTodos());
    }

    useEffect(()=>{
        getTodos();
    },[])

  return (
    <div>
     {isLoading ? <div>Loading...</div> : <TodoInput handleAddTodo={handleAddTodo} />}
     {todos.length>0 && todos.map((el)=>{
        return <div key={el.id}>{el.title} - {el.status ? "True" : "False"}</div>
     })}
    </div>
  )
}

export default Todos
