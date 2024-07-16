import About from "@/components/about";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import Resume from "@/components/opportunity";
import Copywrite from "@/components/copywrite";
import WorkExperience from "@/components/workexperience";
import { TechStack } from "@/components/technologies";
import Projects from "@/components/projects";
import Blogs from "@/components/blogs";
export default function Page() {
  return (
    <main className="px-4 flex flex-col md:container">
      <Header />
      <BlurFade>
        <About />
        <Resume />
        <WorkExperience />
        <TechStack />
        <Blogs />
        <Projects />
        <Copywrite />
      </BlurFade>
    </main>
  );
}
