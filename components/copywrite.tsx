"use client";
import React from "react";
import { SkillIcons } from "./icons";
import BlurFade from "./magicui/blur-fade";
import { useRouter } from "next/navigation";
const Copywrite = () => {
  const nav = useRouter();
  return (
    <BlurFade>
      <div className="w-full flex justify-center items-center md:p-2 md:mt-6 py-4">
        {<SkillIcons.credit />}
        <div className="mx-1 text-slate-500   dark:text-slate-300  ">
          {new Date().getFullYear()}
        </div>
        <div
          onClick={() => {
            nav.push("https://www.notamit.tech");
          }}
          className="mx-1 text-slate-500 dark:text-slate-300 dark:hover:text-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
        >
          {"notamit.tech"}
        </div>
      </div>
    </BlurFade>
  );
};

export default Copywrite;
