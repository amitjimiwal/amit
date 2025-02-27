import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import Copywrite from "@/components/copywrite";
type TLayout = Readonly<{
  children: React.ReactNode;
}>;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Jimiwal",
  description: "Software engineer driven by learning and challenges.",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dejzy9q65/image/upload/v1735397274/The_Good_Life_GoDaddy_Store_Image_3_kkhyvx.png",
        width: 800,
        height: 600,
        alt: "Amit Jimiwal",
      },
    ],
  },
};

export default function Layout({ children }: TLayout) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full w-full dark:bg-black")}>
        <div className="flex flex-col items-center sm:max-w-4xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
