import { Data } from "@/data/data";
import Heading from "./Heading";
const About = () => {
  return (
    <div className="text-white my-16 space-y-2">
      <Heading className="cursor-pointer">about</Heading>
      <p className="w-full text-slate-500 dark:text-slate-300 text-sm md:text-[16px] text-justify">
        {Data.about.toLowerCase()}
      </p>
    </div>
  );
};

export default About;
