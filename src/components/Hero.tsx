"use client";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero: FC = () => {
  return (
    <section className="max-w-4xl text-center py-20">
      <h1 className="max-md:text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
        <Typewriter
          words={["James Taylor"]}
          cursor={false}
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
        Frontend Developer & Designer based in Brighton
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-12">
        Building beautiful, high-performance websites with a passion for user
        experience. Explore my projects, learn about my journey, or let’s create
        something amazing together!
      </p>
    </section>
  );
};

export default Hero;
