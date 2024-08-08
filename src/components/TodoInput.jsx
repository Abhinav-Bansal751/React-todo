import { useState } from "react"



export default function Todoinput (props) {
    
    const {handleAddTodo,settodoValue,todoValue} = props
    return (<>
    <header>
        <input  value={todoValue} placeholder="Add todo" onChange={(e) => {
            settodoValue(e.target.value)
        }}/>
        <button onClick={() =>{
            handleAddTodo(todoValue)
            settodoValue('')
        }}>Add</button>
    </header>
    </>)

}