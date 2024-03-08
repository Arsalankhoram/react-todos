import { useState } from "react";
import TodoSection from "./TodoSection";
import { ulid } from 'ulid'


export default function Todos() {

    const [Todos, setTodos] = useState(
        [
            {
                id: ulid(),
                title: "learn react",
                status: false,
                isEditing: false
            },
            {
                id: ulid(),
                title: "erfan class",
                status: true,
                isEditing: false
            },
            {
                id: ulid(),
                title: "ui design",
                status: false,
                isEditing: false
            }
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


    }

    const deleteHandler = (todoId) => {
        let newTodos = Todos.filter((todo) => {
            return todo.id !== todoId;
        });
        setTodos(newTodos);

    }

    const editRequestHandler = (todoId) => {
        let newTodos = Todos.map((todo) => {
            if (todoId == todo.id) {
                todo.isEditing = true
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const editApproveHandler = (target, todoId) => {
        if (target.key == "Enter" && target.target.type == "text") {
            let newTodos = Todos.map((todo) => {
                if (todoId == todo.id) {
                    todo.title = target.target.value
                    todo.isEditing = false
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
                    isEditing: false
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
            <TodoSection editApproveHandler={editApproveHandler} editRequestHandler={editRequestHandler} deleteHandler={deleteHandler} checkHandler={checkHandler} todos={Todos} />
        </div>

    )
}