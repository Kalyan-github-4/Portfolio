// components/ui/ToastProvider.tsx
"use client";

import * as React from "react";
import { useToast } from "../../hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider as ToastPrimitive, ToastTitle, ToastViewport } from "./toast";

export type ToastProps = React.ComponentProps<typeof Toast>;
export type ToastActionElement = React.ReactElement<typeof ToastClose>;

export function ToastProvider() {
  const { toasts } = useToast();

  return (
    <ToastPrimitive>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
            {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastPrimitive>
  );
}