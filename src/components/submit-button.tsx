"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";

type SubmitButtonProps = Pick<ButtonProps, "size" | "className" | "children">;

export function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...rest}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
