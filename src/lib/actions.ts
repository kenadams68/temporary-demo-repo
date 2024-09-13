"use server";

import { nanoid } from "nanoid";
import { cookies } from "next/headers";
import { z } from "zod";
import { getTodos, Todo } from "./data";

const TodoInput = z.object({
  title: z.string().trim().min(1),
});

export async function addTodo(formData: FormData) {
  const input = {
    title: formData.get("title"),
  };

  const result = TodoInput.safeParse(input);

  if (!result.success) {
    return { success: false };
  }

  const todo: Todo = { ...result.data, id: nanoid(), isCompleted: false };
  const todos = getTodos();
  todos.push(todo);

  const cookieStore = cookies();
  cookieStore.set("todos", JSON.stringify(todos));
}

export async function removeTodo(todoId: string) {
  let todos = getTodos();
  todos = todos.filter((todo) => todo.id !== todoId);

  const cookieStore = cookies();
  cookieStore.set("todos", JSON.stringify(todos));
}
