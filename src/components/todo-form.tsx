"use client";

import { addTodo } from "@/lib/actions";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";
import { useRef } from "react";

export function TodoForm() {
  const formRef = useRef<React.ElementRef<"form">>(null);

  return (
    <form
      className="flex flex-col gap-1 items-end"
      ref={formRef}
      action={async (formData) => {
        await addTodo(formData);
        formRef.current?.reset();
      }}
    >
      <Input name="title" />
      <SubmitButton>Save</SubmitButton>
    </form>
  );
}
