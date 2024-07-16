import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none text-black dark:text-white cursor-pointer",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
