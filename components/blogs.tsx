import React from "react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import Heading from "./Heading";
import { Data } from "@/data/data";
import { LinkTo } from "./opportunity";

interface BlogCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  href?: string;
  desc?: string;
  period?: string;
}
const Blogs = () => {
  return (
    <div className="mb-10">
      <section className="mx-auto my-5">
        <Heading className="text-xl font-bold mb-4 row-span-2 pt-5">
          blogs
        </Heading>
        {Data.blogs.slice(0, 2).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </section>
      <LinkTo href="/blogs" text="view all blogs" />
    </div>
  );
};
export default Blogs;
export const BlogCard = ({ blog }: { blog: (typeof Data.blogs)[0] }) => {
  return (
    <Link
      target="_blank"
      href={blog.link || "#"}
      className="block cursor-pointer"
    >
      <Card className="flex hover:scale-[1.02]  duration-300 transition-all border-none p-2 shadow-none">
        <div className="flex-none">
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={blog.logoUrl}
              alt={blog.topics[0]}
              className="object-contain"
            />
          </Avatar>
        </div>
        <div className="ml-2 flex-grow  items-center flex-col group">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-1 text-base">
              <h3 className="inline-flex items-center  justify-center font-semibold  leading-none text-xs sm:text-sm">
                {blog.title}
                {blog.topics && (
                  <span className="hidden md:inline-flex gap-x-1">
                    {blog.topics.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle md:ml-2 text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {blog.postDate}
              </div>
            </div>
            <div className="font-sans text-xs">{blog.readTime}</div>
          </CardHeader>
          <CardContent className="p-0 mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
            {blog.description}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
