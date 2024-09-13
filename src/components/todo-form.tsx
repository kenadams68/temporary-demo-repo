"use client";

import { addTodo } from "@/lib/actions";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";
import { useRef } from "react";
import { Label } from "./ui/label";

export function TodoForm() {
  const formRef = useRef<React.ElementRef<"form">>(null);

  return (
    <form
      className="flex flex-col gap-2"
      ref={formRef}
      action={async (formData) => {
        await addTodo(formData);
        formRef.current?.reset();
      }}
    >
      <div>
        <Label htmlFor="title">Todo Title</Label>
        <Input id="title" name="title" placeholder="Add a todo..." />
      </div>
      <div className="flex justify-end">
        <SubmitButton type="button">Submit</SubmitButton>
      </div>
    </form>
  );
}
