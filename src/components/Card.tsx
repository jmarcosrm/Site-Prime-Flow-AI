import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={clsx(
        "rounded-2xl bg-cinza-escuro p-6 shadow-sm hover:shadow-lg hover:ring-1 hover:ring-laranja/50 transition",
        className
      )}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
