import React from "react";
import Text from "./Text";
import Link from "next/link";
import { Data } from "@/data/data";
import { ArrowUpRight } from "lucide-react";
const Resume = () => {
  return (
    <div className=" bg-blue-200 text-center py-2 rounded-xl mx-9 my-10">
      <p className="text-red-950 text-sm hidden sm:block">
        i&apos;m currently looking for internship/fulltime opportunities in{" "}
        <span className="font-extrabold text-black ">sde/fullstack</span> roles
      </p>
      <div className="flex items-center gap-6 justify-center">
        <LinkTo href={Data.contact.cal} text="schedule a meeting/cal.com" />
        <LinkTo href={Data.contact.resume_link} text="resume" />
      </div>
    </div>
  );
};

export default Resume;

function LinkTo({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-sm text-black hover:text-red-700 hover:scale-105 transition-transform duration-75">
      <ArrowUpRight className="inline text-sm" size={20} />
      {text}
    </Link>
  );
}
