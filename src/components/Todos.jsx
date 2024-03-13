import { useEffect, useState } from "react";
import TodoSection from "./TodoSection";
import { ulid } from 'ulid'
import useFetch from "../hooks/useFetch";

export default function Todos() {
    const [Todos, setTodos] = useState(
        [

        ]
    )

    const checkHandler = (todoId) => {
        let newTodos = Todos.map((todo) => {
            if (todoId == todo.id) {
                todo.status = !todo.status
            }
            return todo;
        });
        setTodos(newTodos);
        // useFetch(`https://65ee12c408706c584d9b10cf.mockapi.io/todos/${todoId}`, "GET", { status: target.target.value });
    }

    const deleteHandler = (todoId) => {
        useFetch(`https://65ee12c408706c584d9b10cf.mockapi.io/todos/${todoId}`, "DELETE");
    }

    const editApproveHandler = (target, todoId) => {
        if (target.key == "Enter") {
            useFetch(`https://65ee12c408706c584d9b10cf.mockapi.io/todos/${todoId}`, "PUT", { title: target.target.value });
        }

    }

    const enterHandler = ({ key, target }) => {
        if (key == "Enter" && target.value != "") {
            let newItem = {
                title: target.value,
                status: false,
            }
            useFetch("https://65ee12c408706c584d9b10cf.mockapi.io/todos", "POST", newItem);
            target.value = null
        }
    }

    useEffect(() => {
        let result = useFetch("https://65ee12c408706c584d9b10cf.mockapi.io/todos", "GET");
        result.then((data) => setTodos(data))
        console.log("hi");
        return () => enterHandler()
    }, [enterHandler])



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