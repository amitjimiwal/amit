import React from "react";
import BlurFade from "./magicui/blur-fade";
import { Data } from "@/data/data";
import { WorkCard } from "./WorkCard";
import Heading from "./Heading";
const BLUR_FADE_DELAY = 0.04;
const WorkExperience = () => {
  return (
    <section id="work" className="my-5">
      <div className="flex flex-col gap-2">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <Heading className="text-xl font-bold mb-3">work experience</Heading>
        </BlurFade>
        {Data.experience.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <WorkCard
              key={work.company}
              logoUrl={work.logo}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.url}
              period={`${work.period.start} - ${work.period.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
