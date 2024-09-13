import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <TodoForm />
        </CardHeader>
        <CardContent>
          <TodoList />
        </CardContent>
        <CardFooter className="text-xs">
          &copy;{new Date().getFullYear()} All rights reserved.
        </CardFooter>
      </Card>
    </main>
  );
}
