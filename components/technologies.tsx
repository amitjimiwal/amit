import IconCloud from "@/components/magicui/icon-cloud";
import Heading from "./Heading";
import SVGIcons from "./icons";

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
  "visualstudiocode",
  "figma",
  "nestjs",
];

export function TechStack() {
  return (
    <div className="w-full">
      <Heading className="text-xl font-bold mb-4">tech-stack</Heading>
      <div className="text-left">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-background rounded-md mr-2 mb-2 cursor-context-menu"
          >
            {stack.includes("dot") ? stack.replace("dot", ".") : stack}
          </div>
        ))}
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 text-center">
        <IconCloud iconSlugs={stacks} />
      </div>
    </div>
  );
}
