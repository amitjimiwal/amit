import About from "@/components/about";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import Resume from "@/components/opportunity";
import Copywrite from "@/components/copywrite";
import WorkExperience from "@/components/workexperience";
import { TechStack } from "@/components/technologies";
export default function Page() {
  return (
    <main className="px-4 flex flex-col md:container">
      <Header />
      <BlurFade>
        <About />
        <Resume />
        <WorkExperience />
        <TechStack />
        <Copywrite />
      </BlurFade>
    </main>
  );
}
