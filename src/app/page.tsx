import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-4 flex flex-col gap-4">
      <TodoForm />
      <TodoList />
    </main>
  );
}
