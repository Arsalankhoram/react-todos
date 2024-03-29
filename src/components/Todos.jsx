import { useEffect, useState } from "react";
import TodoSection from "./TodoSection";
import useFetch from "../hooks/useFetch.js"
import { TodoFunctions } from "../contexts/TodoContext.jsx";


export default function Todos() {
    const [Todos, setTodos] = useState([])

    useEffect(() => {
        UpdateTodo()
    }, [])

    const UpdateTodo = () => {
        useFetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/`, 'GET')
            .then((data) => {
                setTodos(data)
            })
    }

    const checkHandler = (todoId, todoStatus) => {
        useFetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, 'PUT', { status: !todoStatus })
            .then(() => UpdateTodo())
    }

    const deleteHandler = (todoId) => {
        useFetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, 'DELETE')
            .then(() => UpdateTodo())
    }

    const editApproveHandler = (target, todoId) => {
        if (target.key == "Enter") {
            useFetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/${todoId}`, 'PUT', { title: target.target.value })
                .then(() => UpdateTodo())
        }
    }

    const enterHandler = ({ key, target }) => {
        if (key == "Enter" && target.value != "") {
            let newItem = {
                title: target.value,
                status: false,
            }
            useFetch(`https://6606ae80be53febb857e6b20.mockapi.io/todos/`, 'POST', newItem)
                .then(() => UpdateTodo())
            target.value = null
        }
    }

    return (
        <TodoFunctions.Provider value={{ editApproveHandler, deleteHandler, checkHandler }}>
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600">TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" onKeyDown={enterHandler} placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoSection todos={Todos} />
            </div>
        </TodoFunctions.Provider>
    )
}