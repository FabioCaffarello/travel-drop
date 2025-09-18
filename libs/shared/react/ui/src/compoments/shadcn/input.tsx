import * as React from "react"

import { cn } from "@travel-drop/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type,
    className: cn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      className
    ),
    ...props,
  };

  // Remove defaultValue if value is present (controlled)
  if (inputProps.value !== undefined) {
    inputProps.value = inputProps.value ?? "";
    delete inputProps.defaultValue;
    // Ensure onChange is present for controlled input
    if (!inputProps.onChange) {
      inputProps.readOnly = true;
    }
  } else if (inputProps.defaultValue !== undefined) {
    // Uncontrolled input
    delete inputProps.value;
  }

  return <input data-slot="input" {...inputProps} />;
}

export { Input }
