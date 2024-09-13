import { removeTodo } from "@/lib/actions";
import { getTodos, Todo } from "@/lib/data";
import { SubmitButton } from "./submit-button";
import { Trash2 } from "lucide-react";

type TodoListItemProps = {
  todo: Todo;
};

function TodoListItem({ todo }: TodoListItemProps) {
  const removeTodoWithId = removeTodo.bind(null, todo.id);

  return (
    <li className="flex gap-2 border rounded items-center p-2 transition-transform bg-accent">
      <div className="flex-1">{todo.title}</div>
      <form action={removeTodoWithId}>
        <SubmitButton size="icon">
          <Trash2 />
        </SubmitButton>
      </form>
    </li>
  );
}

export function TodoList() {
  const todos = getTodos();

  return (
    todos.length && (
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </ul>
    )
  );
}
