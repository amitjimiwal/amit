import IconCloud from "@/components/magicui/icon-cloud";
import Heading from "./Heading";
import BlurFade from "./magicui/blur-fade";

const stacks = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "figma",
  "visualstudiocode",
  "nestjs",
];

export function TechStack() {
  return (
    <div className="w-full">
      <BlurFade inView>
        <Heading className="text-xl font-bold mb-4">tech-stack</Heading>
        <div className="text-justify">
          {stacks.map((stack, index) => (
            <Stack key={index} stack={stack} />
          ))}
        </div>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 text-center">
          <IconCloud iconSlugs={stacks} />
        </div>
      </BlurFade>
    </div>
  );
}

export function Stack({ stack }: { stack: string }) {
  return (
    <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-400 text-background rounded-md mr-2 mb-2 cursor-context-menu">
      {stack.includes("dot") ? stack.replace("dot", ".") : stack}
    </div>
  );
}
