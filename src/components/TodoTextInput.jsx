import { useEffect, useRef } from "react";

export default function TodoTextInput({ id, todoValue, editApproveHandler, setEditMode }) {
    let TodoTextInputRef = useRef(null)

    useEffect(() => {
        TodoTextInputRef.current.focus();
    }, [TodoTextInput])

    return (
        <input
            ref={TodoTextInputRef}
            type="text"
            {...todoValue}
            className="border-2 rounded p-1 w-full"
            onKeyDown={(target) => {
                editApproveHandler(target, id);
                target.key == "Enter" ? setEditMode(false) : "";
            }
            }
        />
    )
}