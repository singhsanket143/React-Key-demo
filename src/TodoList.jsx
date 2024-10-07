import { useCallback } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ listOfTodos, onDeleteTodo }) {

    function deleteTodo(v) {
        console.log('Delete todo with id:', v);
        onDeleteTodo?.(v);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodo, [onDeleteTodo]);

    return (
        <ul>
            {listOfTodos?.map((todo) => {
                return <TodoListItem key={todo.value} todo={todo} onDelete={memoDeleteTodoCallback} />
            })}
        </ul>
    )
}

export default TodoList;