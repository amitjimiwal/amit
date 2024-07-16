import { BlogCard } from "@/components/blogs";
import Copywrite from "@/components/copywrite";
import Heading from "@/components/Heading";
import BlurFade from "@/components/magicui/blur-fade";
import { Data } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 min-h-screen">
      <Link
        href="/"
        className="text-slate-500 hover:underline flex items-center"
      >
        <ArrowLeft size={18} /> go back
      </Link>
      <BlurFade delay={0.2}>
        <Heading className="text-xl font-bold mb-4 row-span-2 pt-5">
          blogs
        </Heading>
      </BlurFade>
      <BlurFade delay={0.25}>
        <section className="space-y-5">
          {Data.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </section>
      </BlurFade>
      <Copywrite />
    </div>
  );
};

export default page;
