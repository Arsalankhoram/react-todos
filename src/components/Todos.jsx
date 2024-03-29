import { useEffect, useState } from "react";
import TodoSection from "./TodoSection";
import useFetch from "../hooks/useFetch";

export default function Todos() {
    const [Todos, setTodos] = useState(
        [

        ]
    )

    const checkHandler = (todoId, todoStatus) => {
        fetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: !todoStatus })
        })
    }

    const deleteHandler = (todoId) => {
        fetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, {
            method: 'DELETE',
        })
    }

    const editApproveHandler = (target, todoId) => {
        if (target.key == "Enter") {
            fetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ title: target.target.value })
            })
        }

    }

    const enterHandler = ({ key, target }) => {
        if (key == "Enter" && target.value != "") {
            let newItem = {
                title: target.value,
                status: false,
            }
            fetch('https://6606ae80be53febb857e6b20.mockapi.io/todos/', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newItem)
            })
            target.value = null
        }
    }


    useEffect(() => {
        fetch("https://6606ae80be53febb857e6b20.mockapi.io/todos", {
            method: "GET",
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
            })
    }, [checkHandler, deleteHandler, editApproveHandler])

    return (
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
            <div className="flex items-center mb-6">
                <h1 className="mr-6 text-4xl font-bold text-purple-600">TO DO APP</h1>
            </div>
            <div className="relative">
                <input type="text" onKeyDown={enterHandler} placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
            </div>
            <TodoSection editApproveHandler={editApproveHandler} deleteHandler={deleteHandler} checkHandler={checkHandler} todos={Todos} />
        </div>

    )
}