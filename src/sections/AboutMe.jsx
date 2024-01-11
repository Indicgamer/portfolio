import React from "react";

export const AboutMe = () => {
  return (
    <section className="w-full max-container py-5 px-5">
      <h1 className="mb-16 text-4xl font-bold font-montserrat text-pink-600">About Me</h1>
      <div className=" flex  mx-auto px-5">
        <p className="text-xl font-bold text-pink-700 font-palanquin">
          <span className="text-6xl font-cursive leading-[0] ">"I</span> am a
          4th Year B.Tech student at Sharnbasava University Kalaburgi,
          specializing in Frontend Web Development. With a strong foundation in
          frontend technologies such as React, and proficiency in backend
          technologies like Node.js, Express, and Next.js, I have successfully
          completed several impactful web projects as showcased in my portfolio.
          My programming skills extend to Java, C, and Python. Eager to apply my
          technical expertise to address real-world challenges, I am
          enthusiastic about collaborative teamwork and innovation in
          problem-solving
          <span className="font-cursive">"</span>
        </p>
      </div>
    </section>
  );
};
