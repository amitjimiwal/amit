"use client";

import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { Data } from "@/data/data";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Socials() {
  return (
    <section id="socials" className="mb-28 scroll-mt-28 text-center sm:mb-40">
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Object.keys(Data.contact).map((skill, index) => (
          <motion.li
            className="cursor-pointer bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
