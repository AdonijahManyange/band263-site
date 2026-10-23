import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "glass";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl p-8 transition-all duration-300",

        {
          "bg-white border border-gray-200 shadow-lg":
            variant === "default",

          "border border-gray-300 bg-transparent":
            variant === "outlined",

          "border border-white/20 bg-white/10 backdrop-blur-lg":
            variant === "glass",

          "hover:-translate-y-2 hover:shadow-2xl":
            hover,
        },

        className
      )}
    >
      {children}
    </div>
  );
}