import { useState } from "react";

const Todo = ({todo}) => {
    const [edit,setEdit] = useState(true);
    return (
        <div className="a">
            {edit ? (
                <div className="a">
                    <input type="text" />
                    <button>Update</button>
                </div>
            )
                  : (
                    <div className="a">
                        {todo.title}
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                  )}
        </div>
        )
}

export {Todo};