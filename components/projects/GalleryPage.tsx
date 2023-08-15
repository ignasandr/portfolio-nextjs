"use client";

import React, { useState } from "react";
import type { Project, ProjectImage } from "@/app/types";
import Gallery from "./Gallery";
import ProjectMenu from "./ProjectMenu";

let lg: boolean;
let selectedProjectTail = "left_choir";

// when hovering, background color switches. When selected, the additional borders appear.

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = ({
  projects,
  projectImages,
}: {
  projects: Project[];
  projectImages: ProjectImage[];
}) => {
  const [current, setCurrent] = useState(4);

  const selectedProjectName =
    current === 0 ? "" : projects.find((p) => p.id === current)?.name;

  const currentProjectImages =
    projectImages.find((i) => i.project === selectedProjectName) || null;

  function handleClick(id: number) {
    if (current !== id) {
      setCurrent(id);
    }
  }

  return (
    <div>
      {/* Need some global table in the layout where these could all hook into for some of the dimensions */}
      <div className="flex w-full flex-row justify-center h-screen">
        <ProjectMenu
          projects={projects}
          onClick={handleClick}
          current={current}
        />
        <div className="border-double border-4 border-gray-400 bg-gray-200 h-3/4 w-3/4">
          <div className="flex flex-row items-start justify-between  bg-gray-100 w-full h-full overflow-hidden shadow-md">
            <div className="w-1/6 pt-6 pl-3">
              <p>Description</p>
            </div>
            {currentProjectImages && <Gallery {...currentProjectImages} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
