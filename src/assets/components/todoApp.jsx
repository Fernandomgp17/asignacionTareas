import { useState } from "react";
import { Todo } from "./todo";

const TodoApp = () => {
    
    const [title,setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title
        }
        setTodos([...todos,newTodo]);
        setTitle('')
    }

    const onUpdate = (id,value) => {
        const todosAll = [...todos]
        const itemFind = todosAll.find((item)=>item.id === id);
        itemFind.title = value;
        setTodos(todosAll)
    }

    const onDelete = (id) => {
        const nuevo = [...todos];
        const nuevoArray = nuevo.filter((item)=> item.id !== id);
        setTodos(nuevoArray);
    }

    return (
        <div className="container" >
            <form className="todoCreateForm" action="" onSubmit={handleSubmit} >
                <input type="text" className="todoInput" value={title} onChange={handleChange} />
                <button className="buttonCreate" >Create Todo</button>
            </form>
            <div className="container">
                {todos.map((todo)=>{
                    return <Todo key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
                
            </div>
        </div>
    )
}

export {TodoApp};