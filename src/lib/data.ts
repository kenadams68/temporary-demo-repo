import "server-only";
import { cookies } from "next/headers";
import { z } from "zod";

const Todo = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  isCompleted: z.boolean(),
});

export type Todo = z.infer<typeof Todo>;

const TodoList = z.array(Todo);

export function getTodos() {
  const cookieStore = cookies();

  const todosString = cookieStore.get("todos")?.value;

  if (!todosString) return [];

  try {
    const result = TodoList.safeParse(JSON.parse(todosString));

    if (!result.success) return [];

    return result.data;
  } catch {
    return [];
  }
}
