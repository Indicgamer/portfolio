import React from "react";

export const AboutMe = () => {
  return (
    <section className="w-full max-container py-5 px-5">
      <h1 className="mb-16 text-4xl font-bold font-montserrat text-pink-600">About Me</h1>
      <div className=" flex  mx-auto px-5">
        <p className="text-xl font-bold text-pink-700 font-palanquin">
          <span className="text-6xl font-cursive leading-[0] ">"I</span> am a passionate full-stack web developer with strong expertise in Node.js and MongoDB. Recently graduated with a B.Tech in Computer Science Engineering from Sharnbasava University Kalaburgi, I have a robust understanding of modern web development technologies and frameworks. I am committed to building efficient, scalable, and user-friendly web applications. My technical skills, combined with my enthusiasm for continuous learning and problem-solving, make me an asset in any development team
          <span className="font-cursive">"</span>
        </p>
      </div>
    </section>
  );
};
