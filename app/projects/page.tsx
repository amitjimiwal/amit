import Copywrite from "@/components/copywrite";
import Heading from "@/components/Heading";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/projects";
import { Data } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <Heading className="text-xl font-bold mb-4 row-span-2 pt-5 px-2">
          projects
        </Heading>
      </BlurFade>
      <BlurFade delay={0.25}>
        <section className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-2 lg:pb-2 px-2">
          {Data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </BlurFade>
      <Copywrite />
    </div>
  );
};

export default page;
