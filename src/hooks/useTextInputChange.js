import { useState } from "react";

export default function useTextInputChange(defultValue) {
    const [inputValue, setInputValue] = useState(defultValue)

    const onChnageHandler = (event) => {
        setInputValue(event.target.value)
    }

    return { value: inputValue, onChange: onChnageHandler }
}