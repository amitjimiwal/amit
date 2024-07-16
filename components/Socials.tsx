import Heading from "./Heading";

export default function Projects() {
  return (
    <section id="projects">
      <Heading className="text-xl font-bold mb-4">projects</Heading>
      <div></div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg dark:hover:shadow-lg transition-all duration-300 dark:hover:border-slate-600 ease-out h-full"
      }
    >
      <Link
        target="_blank"
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            className="h-40 w-full overflow-hidden object-cover object-top"
            loading="lazy"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="text-slate-500 dark:text-slate-300 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex justify-center gap-1">
            {links?.map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
              >
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
