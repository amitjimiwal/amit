import { cn } from "@/lib/utils";
import React from "react";

const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "w-full text-slate-500 dark:text-slate-300 text-sm md:text-[16px] text-justify",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Text;
