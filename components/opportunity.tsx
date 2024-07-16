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
        <span className="font-extrabold text-black ">sde</span> role
      </p>
      <div className="flex items-center gap-4 justify-center">
        <Link
          href={Data.contact.cal}
          className="text-sm text-black hover:text-red-700"
        >
          <ArrowUpRight className="inline text-sm" size={20} /> schedule a
          meet/cal.com
        </Link>
        <Link
          href={Data.contact.resume_link}
          className="text-sm text-black hover:text-red-700 "
        >
          <ArrowUpRight className="inline text-sm" size={20} />
          resume
        </Link>
      </div>
    </div>
  );
};

export default Resume;
