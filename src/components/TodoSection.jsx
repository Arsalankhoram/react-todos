import TodoItem from "./TodoItem";

export default function TodoSection({ todos, deleteHandler, checkHandler, editApproveHandler }) {
    return (
        <ul className="list-reset">
            {todos.map((todo) => {
                return <TodoItem editApproveHandler={editApproveHandler} deleteHandler={deleteHandler} checkHandler={checkHandler} key={todo.id} id={todo.id} title={todo.title} status={todo.status} />
            })}
        </ul>
    )
}