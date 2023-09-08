import { useState } from "react";

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
            <form action="" onSubmit={handleClickUpdate} >
                <input type="text" onChange={handleChangeUpdate} value={newValue}  />
                <button onClick={handleButtonUpdate}>Update</button>
            </form>
      )
    }

    const TodoElement = () => {
        const handleClickDelete= (event) => {
            event.preventDefault();
            onDelete(todo.id);
        }
      return (
        <div className="a">
          {todo.title}
          <button onClick={()=>setEdit(true)} >Update</button>
          <button onClick={handleClickDelete}>Delete</button>
        </div>
      )
    }

    return (
        <div className="a">
            {
            edit  ? <EditForm/>
                  : <TodoElement/>
            }
        </div>
        )
}

export {Todo};