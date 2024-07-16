import BlurFade from "@/components/magicui/blur-fade";
import { Data } from "@/data/data";
import Image from "next/image";
import WordRotate from "@/components/magicui/word-rotate";
import { LinkTo } from "./opportunity";
export function Header() {
  return (
    <BlurFade>
      <div id="header" className="mt-16 flex gap-6 justify-around">
        <div>
          <BlurFade delay={0.25 * 3} inView>
            <Image
              src={Data.image}
              alt={Data.name}
              width={100}
              height={100}
              className="rounded-xl hover:scale-150 transition-all duration-300"
            />
          </BlurFade>
        </div>
        <div className="flex-col flex flex-1 mt-5">
          <BlurFade delay={0.25} inView>
            <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none text-black dark:text-white">
              {Data.name.toLowerCase()}👋
            </h6>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <WordRotate
              className="max-w-[600px] text-slate-500 dark:text-slate-300 text-xl md:text-[16px]"
              words={[
                "Software Engineer".toLowerCase(),
                "Full Stack Engineer".toLowerCase(),
              ]}
            />
          </BlurFade>
        </div>
      </div>
      <div className="flex gap-5 sm:justify-end mt-5 flex-wrap sm:flex-nowrap justify-center">
        {Object.keys(Data.contact).map((social, index) => (
          <BlurFade key={index} delay={0.25 * (index + 4)} inView>
            <LinkTo href={Data.contact[social as keyof typeof Data.contact] || "#"} text={social} className="text-sm" />
          </BlurFade>
        ))}
      </div>
    </BlurFade>
  );
}
