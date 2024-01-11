import React from "react";
import { useState, useEffect } from "react";
import "../constants";
import { GridElement } from "../components/GridElement";
import { proj } from "../constants";

export const Projects = () => {
  return (
    <section className="w-full max-container px-5 py-5 flex flex-col gap-10  ">
      <h1 className="text-4xl font-montserrat font-bold text-pink-600">
        My Work
      </h1>

      <div className="grid gap-20 px-8 py-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 content-center">
        {proj.map((item) => {
          return (
            <GridElement
            key={item.title}
              imgURL={item.imgURL}
              projectTitle={item.title}
              projURL={item.projectURL}
            /> 
          );
        })}
      </div>
    </section>
  );
};
