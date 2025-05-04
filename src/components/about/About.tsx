"use client";
import { motion } from "framer-motion";
import Bio from "./Bio";
import Description from "./Description";
import Skills from "./Skills";
import Objectives from "./Objectives";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center px-6 py-20 text-white"
    >
      <div className="max-w-5xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <Bio />
          <Description />
          <Skills />
          <Objectives />
        </motion.div>
      </div>
    </section>
  );
}
