"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "./data"; // make sure the path is correct

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-pink-500/20 transition">
      <h3 className="text-2xl font-bold mb-2 text-pink-400">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {showMore && project.details && (
        <pre className="text-sm text-gray-400 whitespace-pre-wrap mb-4">
          {project.details}
        </pre>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-pink-700/30 px-2 py-1 rounded-md text-pink-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-pink-300 hover:text-white border border-pink-300 px-4 py-2 rounded transition"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white transition"
          >
            Live Demo
          </a>
        )}
        {project.details && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-white underline underline-offset-2 hover:text-pink-400"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}
