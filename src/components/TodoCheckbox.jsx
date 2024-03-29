import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import { useContext } from "react";
import { TodoFunctions } from "../contexts/TodoContext";

export default function TodoCheckbox({ id, title, status, editHandler }) {
    const { checkHandler, deleteHandler } = useContext(TodoFunctions)

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={status}
                    onChange={() => {
                        checkHandler(id, status);
                    }}
                />
                <p className={status ? "inline-block mt-1 ml-2 text-gray-600 line-through" : "inline-block mt-1 ml-2 text-gray-600"}>{title}</p>
            </div>

            <button type="button" className="flex items-center space-x-1">
                <EditIcon onClickHandler={editHandler} />
                <DeleteIcon onClickHandler={() => deleteHandler(id)} />
            </button>
        </>
    )
}