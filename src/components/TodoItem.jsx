import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";

export default function TodoItem({ id, title, status, isEditing, deleteHandler, checkHandler, editRequestHandler, editApproveHandler }) {

    const [todoValue, setTodoValue] = useState(title)



    return (

        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div className={isEditing ? "flex" : ""}>
                <input
                    type={isEditing ? "text" : "checkbox"}
                    value={isEditing ? todoValue : ""}
                    className={isEditing ? "border-2 rounded p-0.5 w-full " : ""}
                    checked={status}
                    onChange={(target) => {
                        checkHandler(id);
                        setTodoValue(target.target.value)
                    }}
                    onKeyDown={(target) =>
                        editApproveHandler(target, id)}
                />
                <p className={status ? "inline-block mt-1 ml-2 text-gray-600 line-through" : "inline-block mt-1 ml-2 text-gray-600"}>{isEditing ? "" : title}</p>
            </div>
            <button type="button" className="absolute right-0 flex items-center space-x-1">
                <EditIcon onClickHandler={() => {
                    editRequestHandler(id)
                }} />
                <DeleteIcon onClickHandler={() => deleteHandler(id)} />
            </button>
        </li>
    )
}