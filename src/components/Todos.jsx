import { useEffect, useState } from "react";
import TodoSection from "./TodoSection";
import { ulid } from 'ulid'

export default function Todos() {
    const [Todos, setTodos] = useState(
        [

        ]
    )

    useEffect(() => {
        if(localStorage.todos)
        setTodos(JSON.parse(localStorage.todos))
    }, [])

    useEffect(() => {
        localStorage.todos = JSON.stringify(Todos)
    }, [Todos])

    const checkHandler = (todoId) => {
        let newTodos = Todos.map((todo) => {
            if (todoId == todo.id) {
                todo.status = !todo.status
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteHandler = (todoId) => {
        let newTodos = Todos.filter((todo) => {
            return todo.id !== todoId;
        });
        setTodos(newTodos);

    }

    const editApproveHandler = (target, todoId) => {
        if (target.key == "Enter") {
            let newTodos = Todos.map((todo) => {
                if (todoId == todo.id) {
                    todo.title = target.target.value
                }
                return todo;
            });
            setTodos(newTodos);
        }
    }

    const enterHandler = ({ key, target }) => {
        if (key == "Enter" && target.value != "") {
            setTodos([
                ...Todos,
                {
                    id: ulid(),
                    title: target.value,
                    status: false,
                }
            ])
            target.value = null
        }
    }

    return (
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
            <div className="flex items-center mb-6">
                <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
            </div>
            <div className="relative">
                <input type="text" onKeyDown={enterHandler} placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
            </div>
            <TodoSection editApproveHandler={editApproveHandler} deleteHandler={deleteHandler} checkHandler={checkHandler} todos={Todos} />
        </div>

    )
}