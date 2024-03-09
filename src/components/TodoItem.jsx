import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";

export default function TodoItem({ id, title, status, deleteHandler, checkHandler, editApproveHandler }) {
    const [editMode, setEditMode] = useState(false)
    const [todoValue, setTodoValue] = useState(title)


    const editHandler = () => {
        setEditMode(true)
    }
    return (
        <li className=" flex items-center justify-between px-2 py-6 border-b ">

            {
                editMode ?
                    <>

                        <input type="text" value={todoValue} className="border-2 rounded p-1 w-full"
                            onChange={(target) => {
                                setTodoValue(target.target.value)
                            }}
                            onKeyDown={(target) => {
                                editApproveHandler(target, id);
                                target.key == "Enter" ? setEditMode(false) : "";

                            }
                            } />
                        <DeleteIcon onClickHandler={() => setEditMode(false)} />
                    </>
                    :
                    <>
                        <div>
                            <input
                                type="checkbox"
                                checked={status}
                                onChange={() => {
                                    checkHandler(id);
                                }}
                            />
                            <p className={status ? "inline-block mt-1 ml-2 text-gray-600 line-through" : "inline-block mt-1 ml-2 text-gray-600"}>{title}</p>
                        </div>

                        <button type="button" className="flex items-center space-x-1">
                            <EditIcon onClickHandler={editHandler} />
                            <DeleteIcon onClickHandler={() => deleteHandler(id)} />
                        </button>
                    </>
            }




        </li>
    )
}