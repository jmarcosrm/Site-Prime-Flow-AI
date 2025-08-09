import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-transform duration-200";
  const variants = {
    primary: "bg-laranja text-preto hover:scale-105 hover:shadow-lg",
    ghost: "bg-transparent text-branco-suave hover:bg-cinza-escuro/60",
    outline: "border border-laranja text-laranja hover:bg-laranja hover:text-preto",
  };
  return <button className={clsx(base, variants[variant], className)} {...props} />;
}
