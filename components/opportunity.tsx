"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Data } from "@/data/data";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
const Resume = () => {
  return (
    <div className=" bg-blue-200 text-center py-2 rounded-xl mx-9 my-10">
      <p className="text-red-950 text-sm hidden sm:block">
        i&apos;m currently open for internship/fulltime opportunities in{" "}
        <span className="font-extrabold text-black ">sde/fullstack</span> roles
      </p>
      <div className="flex items-center gap-6 justify-center">
        <LinkTo href={Data.cal} text="schedule a meeting/cal.com" />
        <LinkTo href={Data.resume_link} text="resume" />
      </div>
    </div>
  );
};

export default Resume;

export function LinkTo({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className={cn(
          "text-sm text-black hover:text-red-700 hover:scale-105 transition-transform duration-75",
          className,
        )}
      >
        <ArrowUpRight className="inline text-sm" size={20} />
        {text}
      </Link>
    </motion.div>
  );
}
