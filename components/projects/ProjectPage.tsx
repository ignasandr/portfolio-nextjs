"use client";

import React, { useState } from "react";
import type { Project, ProjectImage } from "@/app/types";
import Gallery from "./Gallery";
import ProjectMenu from "./ProjectMenu";
import Description from "./Description";

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const ProjectPage = ({
  projects,
  projectImages,
}: {
  projects: Project[];
  projectImages: ProjectImage[];
}) => {
  const [current, setCurrent] = useState(1);

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
    <>
      <div className="md:flex">
        <ProjectMenu
          projects={projects}
          onClick={handleClick}
          current={current}
        />
        <Description
          title={projects.find((project) => project.id === current)?.title}
          subtitle={
            projects.find((project) => project.id === current)?.subtitle
          }
          description={
            projects.find((project) => project.id === current)?.description
          }
          roles={projects.find((project) => project.id === current)?.roles}
        />
      </div>
      <div className="border-double border-4 border-gray-400 bg-gray-200 h-full w-full">
        <div className="flex flex-col items-start bg-gray-100 w-full h-full overflow-hidden shadow-md">
          {currentProjectImages && <Gallery {...currentProjectImages} />}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
