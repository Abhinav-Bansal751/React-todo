import { useState,useEffect } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/Todolist";

function App () {
    const [todos,setTodos] = useState([]);
    const [todoValue,settodoValue] = useState('')

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
      }

    function handleAddTodo (newtodo) {
        const newtodoList=[...todos,newtodo]
        setTodos(newtodoList)
        persistData(newtodoList)
    }

    function deletetodo(index){
        const newtodoList = todos.filter((todo,todoindex) =>{
          return  todoindex !== index
        })
        setTodos(newtodoList)
        persistData(newtodoList)      
    }

    function edittodo(index){
        const value4edit = todos[index];
        settodoValue(value4edit)
        deletetodo(index)
    }

    useEffect(() =>{
        if(!localStorage){
            return
        }
        let localtodos = localStorage.getItem('todos')
        if(!localtodos){
            return
        }
        localtodos = JSON.parse(localtodos).todos
        setTodos(localtodos)
    } ,[])
    return (
    <>
        <Todoinput handleAddTodo={handleAddTodo} todoValue={todoValue} settodoValue={settodoValue} />
        <TodoList todos={todos} deletetodo={deletetodo} edittodo={edittodo} />
    </>
    )
}

export default App;
