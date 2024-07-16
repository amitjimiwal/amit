import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  href?: string;
  period: string;
  description: string;
}

export const WorkCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Link target="_blank" href={href || "#"} className="block cursor-pointer">
      <Card className="flex border-none p-2 shadow-none">
        <div className="flex-none">
          <Avatar className="m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-1 text-base">
              <h3 className="hidden md:inline-flex items-center  justify-center font-semibold  leading-none text-xs sm:text-sm">
                {title.toLowerCase()}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <h3 className="inline-flex md:hidden items-center  justify-center font-semibold  leading-none text-sm">
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period.toLowerCase()}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs">{subtitle.toLowerCase()}</div>
            )}
          </CardHeader>
          <CardContent className="pl-0 mt-1 md:mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
            {description.toLowerCase()}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
