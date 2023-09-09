import { useState } from "react";
import '../style/todo.css';

const Todo = ({todo,onUpdate,onDelete}) => {

    const [edit,setEdit] = useState(false);

    const EditForm = () =>{
        const [newValue,setNewValue] =useState(todo.title);

        const handleClickUpdate = (event) => {
            event.preventDefault();
        }

        const handleChangeUpdate = (event) => {
            setNewValue(event.target.value)
        }

        const handleButtonUpdate = (event) => {
            event.preventDefault();
            onUpdate(todo.id, newValue);
            setEdit(false)
        }
      return (
            <form className="editForm" action="" onSubmit={handleClickUpdate} >
                <input className="editFormInput" type="text" onChange={handleChangeUpdate} value={newValue}  />
                <button className="editFormButton" onClick={handleButtonUpdate}>Update</button>
            </form>
      )
    }

    const TodoElement = () => {
        const handleClickDelete= (event) => {
            event.preventDefault();
            onDelete(todo.id);
        }
      return (
        <div className="todoElement">
          <div className="contentTodoElement">
          {todo.title}
          </div>
          <button className="buttonTodoElement azul" onClick={()=>setEdit(true)} >Update</button>
          <button className="buttonTodoElement rojo" onClick={handleClickDelete}>Delete</button>
        </div>
      )
    }

    return (
        <div>
            {
            edit  ? <EditForm/>
                  : <TodoElement/>
            }
        </div>
        )
}

export {Todo};