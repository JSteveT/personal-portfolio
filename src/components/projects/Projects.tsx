"use client";

import * as React from "react";
import { ProjectCard, projects } from "@/components/projects";
import { Project } from "./data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
