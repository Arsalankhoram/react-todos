import { useState } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import TodoTextInput from "./TodoTextInput";
import TodoCheckbox from "./TodoCheckbox";
import useTextInputChange from "../hooks/useTextInputChange";

export default function TodoItem({ id, title, status }) {
    const [editMode, setEditMode] = useState(false)
    const todoValue = useTextInputChange(title)
    const editHandler = () => {
        setEditMode(true)
    }

    return (
        <li className=" flex items-center justify-between px-2 py-6 border-b ">
            {
                editMode
                    ?
                    <>
                        <TodoTextInput id={id} todoValue={todoValue} setEditMode={setEditMode} />
                        <DeleteIcon onClickHandler={() => setEditMode(false)} />
                    </>
                    :
                    < TodoCheckbox id={id} title={title} status={status} editHandler={editHandler} />
            }
        </li>
    )
}