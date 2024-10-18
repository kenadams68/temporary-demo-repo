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
      className="flex flex-col gap-1"
      ref={formRef}
      action={async (formData) => {
        const result = await addTodo(formData);
        if (!result?.success) return;
        formRef.current?.reset();
      }}
    >
      <Label className="font-semibold">Title</Label>
      <Input name="title" />
      <SubmitButton className="self-end">Save</SubmitButton>
    </form>
  );
}
