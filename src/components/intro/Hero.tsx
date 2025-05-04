"use client";

import { Typewriter } from "react-simple-typewriter";
import * as React from "react";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center text-white"
    >
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <Typewriter
            words={[
              "Hello, I'm James Taylor",
              "I'm a Full Stack Developer",
              "Creating immersive digital experiences",
              "Designing with code. Building with vision.",
              "Let's build something extraordinary.",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={1500}
          />
        </h1>
      </div>
    </section>
  );
}
