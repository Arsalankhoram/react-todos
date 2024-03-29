import TodoItem from "./TodoItem";

export default function TodoSection({ todos }) {
    return (
        <ul className="list-reset">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} id={todo.id} title={todo.title} status={todo.status} />
            })}
        </ul>
    )
}