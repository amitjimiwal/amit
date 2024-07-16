"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Data } from "@/data/data";
import Markdown from "react-markdown";
import { Stack } from "./technologies";
import Heading from "./Heading";
import { LinkTo } from "./opportunity";
export default function Projects() {
  return (
    <>
      <section className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-2 lg:pb-2">
        <Heading className="text-xl font-bold mb-4 row-span-2 pt-5">
          featured <br />
          projects
        </Heading>
        {Data.projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <LinkTo href="/projects" text="view all projects" />
    </>
  );
}

export function ProjectCard({
  project,
}: {
  project: (typeof Data.projects)[0];
}) {
  return (
    <motion.div
      style={{
        aspectRatio: "16/9",
        cursor: "context-menu",
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full flex flex-col justify-between aspect-square">
        <CardHeader>
          <CardTitle>{project.name.toLowerCase()}</CardTitle>
          <Markdown className="text-slate-500 dark:text-slate-300 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {project.description.toLowerCase()}
          </Markdown>
          <div>
            {project.techStack.map((tech, index) => (
              <Stack key={index} stack={tech.toLowerCase()} />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <Image
            src={project.previewImage}
            alt="Project"
            width={128}
            height={128}
            className="rounded-lg w-full aspect-[3/2] object-cover"
          />
        </CardContent>
        <CardFooter className="px-2 pb-2 flex gap-5 justify-center">
          <LinkTo href={project.links.github_repo} text="github" />
          <LinkTo href={project.links.live_link} text="live preview" />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
